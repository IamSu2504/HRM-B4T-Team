package backend.controller;

import backend.entity.CreateUpdateShiftRequest;
import backend.entity.Shift;
import backend.entity.ShiftTableRequest;
import backend.service.EmployeeService;
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

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(value = "/employee/{id}")
    public ResponseEntity<?> getEmployeeTotalShift(@RequestBody int month, @PathVariable("id") String id) {
        try {
            if(employeeService.getById(id)==null){
                return new ResponseEntity<>("Mã nhân viên không tồn tại", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            int totalShiftInMonth = service.getEmployeeTotalShiftInMonth(id,month);
            return new ResponseEntity<>(totalShiftInMonth, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/table")
    public ResponseEntity<?> getTable(@RequestBody ShiftTableRequest request) {
        try {
            List<Shift> shifts = service.getTable(request);
            if(shifts==null){
                return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(shifts, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateShiftRequest request) {
        try {
            String mess = service.getSaveShiftMessage(request);
            if (mess.contains("thành công")) {
                return new ResponseEntity<>(mess, HttpStatus.OK);
            }
            else {
                if (mess.equals("")) {
                    return new ResponseEntity<>("Đăng kí ca làm thành công", HttpStatus.INTERNAL_SERVER_ERROR);
                } else {
                    return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@RequestBody CreateUpdateShiftRequest request, @PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Ca làm không tồn tại", HttpStatus.NOT_FOUND);
            }
            String mess = service.getSaveShiftMessage(request);
            if(mess == null){
                return new ResponseEntity<>("Đăng kí ca làm thành công", HttpStatus.OK);
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
