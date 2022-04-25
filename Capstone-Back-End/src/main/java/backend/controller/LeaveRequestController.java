package backend.controller;

import backend.entity.LeaveRequest;
import backend.service.LeaveRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/leaveRequest")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<LeaveRequest> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Chưa có quyền tài khoản được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody LeaveRequest leaveRequest) {
        try {
            String mess = service.createLeaveRequest(leaveRequest);
            return new ResponseEntity<>(mess,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
