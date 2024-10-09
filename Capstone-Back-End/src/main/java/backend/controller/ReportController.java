package backend.controller;

import backend.entity.Employee;
import backend.entity.EmployeeReport;
import backend.entity.SalaryReport;
import backend.entity.WorkingProcess;
import backend.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/report")
public class ReportController {

    @Autowired
    private ReportService service;

    @GetMapping(value = "/salary")
    public ResponseEntity<?> getListSalaryReport() {
        try {
            List<SalaryReport> list = service.getListSalaryReport();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/employee/outdated")
    public ResponseEntity<?> getListContractEmployeeReport() {
        try {
            List<EmployeeReport> list = service.getAllContractEmployeeReport();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/employee")
    public ResponseEntity<?> getListEmployeeReport() {
        try {
            List<Employee> list = service.getAllEmployeeReport();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/working-process/employee/{empID}")
    public ResponseEntity<?> getWorkingProcessReport(@PathVariable("empID") String employeeID) {
        try {
            List<WorkingProcess> reports = service.getEmployeeWorkingProcessReportMess(employeeID);
            if(reports == null){
                return new ResponseEntity<>("Employee code not existed", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(reports, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
