package backend.controller;

import backend.service.ContractService;
import backend.service.SalaryEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/employee/salary")
public class SalaryEmployeeController {
    @Autowired
    private SalaryEmployeeService service;

    @PostMapping("/user/{id}")
    public ResponseEntity<?> getContract(@PathVariable("id") String maHD) {
        try {
            return new ResponseEntity<>(service.getSalary(maHD), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
