package backend.controller;

import backend.entity.Employee;
import backend.entity.TimeKeepingEmployee;
import backend.service.TimeKeepingEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/employee/timekeeping")
public class TimeKeepingEmployeeController {

    @Autowired
    private TimeKeepingEmployeeService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<TimeKeepingEmployee> listTimeKeeping = service.getAll();
            if(listTimeKeeping.isEmpty()){
                return new ResponseEntity<>("Danh sách chấm công trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listTimeKeeping, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/search/{text}")
    public ResponseEntity<?> getSearched(@PathVariable("text") String text) {
        try {
            List<TimeKeepingEmployee> list = service.getSearched(text.trim());
            if (list.isEmpty()) {
                return new ResponseEntity<>("Chưa có người dùng được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            TimeKeepingEmployee c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy danh sách chấm công", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
