package backend.controller;

import backend.service.InsuranceEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/employee/insurance")
public class InsuranceEmployeeController {

    @Autowired
    private InsuranceEmployeeService service;

    @GetMapping("/{id}")
    public ResponseEntity<?> getInsurance(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.getInsurance(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
