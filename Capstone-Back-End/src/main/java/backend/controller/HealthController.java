package backend.controller;

import backend.entity.CreateUpdateHealthRequest;
import backend.entity.Health;
import backend.service.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/manager/health")
public class HealthController {

    @Autowired
    private HealthService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Health> listHealth = service.getAll();
            if(listHealth.isEmpty()){
                return new ResponseEntity<>("Danh sách tình trạng sức khỏe trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listHealth, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Health h = service.getById(id);
            if(h==null){
                return new ResponseEntity<>("Không tìm thấy tình trạng sức khỏe", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(h, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateHealthRequest request) {
        try {
            Health t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Tình trạng sức khỏe này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateHealthRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Tình trạng sức khỏe này không tồn tại", HttpStatus.NOT_FOUND);
            }
            Health t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Tình trạng sức khỏe này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
