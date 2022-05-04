package backend.controller;

import backend.entity.CreateUpdateLeaveRequest;
import backend.entity.CreateUpdateShiftRequest;
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
            if (list.isEmpty()) {
                return new ResponseEntity<>("Chưa có đơn xin nghỉ nào.", HttpStatus.NOT_FOUND);
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
            LeaveRequest c = service.getById(id);
            if (c == null) {
                return new ResponseEntity<>("Không tìm thấy đơn xin nghỉ.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateLeaveRequest request) {
        try {
            String mess = service.createLeaveRequest(request);
            if (mess == null) {
                return new ResponseEntity<>("Đăng kí nghỉ thành công", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (mess.contains("thành công")) {
                return new ResponseEntity<>(mess, HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@RequestBody CreateUpdateLeaveRequest request, @PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Đơn đăng ký nghỉ không tồn tại", HttpStatus.NOT_FOUND);
            }
            String mess = service.createLeaveRequest(request);
            if (mess == null) {
                return new ResponseEntity<>("Duyệt đơn thành công", HttpStatus.OK);
            }
            if (mess.contains("thành công")) {
                return new ResponseEntity<>(mess, HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}