package backend.controller;

import backend.entity.Employee;
import backend.entity.EmployeeReport;
import backend.entity.Role;
import backend.entity.SalaryReport;
import backend.service.ReportService;
import backend.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/employee/outdated")
    public ResponseEntity<?> getListContractEmployeeReport() {
        try {
            List<EmployeeReport> list = service.getAllContractEmployeeReport();
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/employee")
    public ResponseEntity<?> getListAllEmployeeReport() {
        try {
            List<Employee> list = service.getAllEmployeeReport();
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
