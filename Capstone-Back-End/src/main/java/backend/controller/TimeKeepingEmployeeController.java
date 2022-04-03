package backend.controller;

import backend.service.TimeKeepingEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/employee/viewTimeKeeping")
public class TimeKeepingEmployeeController {

    @Autowired
    private TimeKeepingEmployeeService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getByID(@RequestBody String maNV) {
        try {
            return new ResponseEntity<>(service.viewTimeKeeping(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
