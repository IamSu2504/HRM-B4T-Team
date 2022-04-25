package backend.controller;

import backend.entity.CreateUpdateWorkingProcess;
import backend.entity.WorkingProcess;
import backend.service.WorkingProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/workingProcess")
public class WorkingProcessController {

    @Autowired
    private WorkingProcessService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<WorkingProcess> listWP = service.getAll();
            if(listWP.isEmpty()){
                return new ResponseEntity<>("Danh sách quá trình làm việc trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listWP, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            WorkingProcess c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy quá trình làm việc này", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateWorkingProcess request) {
        try {
            WorkingProcess t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Quá trình công tác này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateWorkingProcess request) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Quá trình công tác này không tồn tại", HttpStatus.NOT_FOUND);
            }
            WorkingProcess t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Quá trình công tác này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
