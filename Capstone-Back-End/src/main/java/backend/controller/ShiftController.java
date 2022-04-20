package backend.controller;

import backend.entity.Shift;
import backend.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/shift")
public class ShiftController {

    @Autowired
    private ShiftService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Shift> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Chưa có quyền tài khoản được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody Shift shift) {
        try {
            String mess = service.getSaveShiftMessage(shift);
            return new ResponseEntity<>(mess,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
