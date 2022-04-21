package backend.controller;

import backend.service.ViewDayOffEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/employee/viewDayOff")
public class ViewDayOffEmployeeController {

    @Autowired
    private ViewDayOffEmployeeService service;

    @GetMapping(value = "/user/{id}")
    public ResponseEntity<?> getByMaNV(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.viewDayOff(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
