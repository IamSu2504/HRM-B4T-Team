package backend.controller;

import backend.entity.CreateUpdateInsuranceRequest;
import backend.entity.Insurance;
import backend.service.InsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/insurance")
public class InsuranceController {

    @Autowired
    private InsuranceService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Insurance> listInsurance = service.getAll();
            if(listInsurance.isEmpty()){
                return new ResponseEntity<>("Danh sách bảo hiểm trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listInsurance, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Insurance c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy bảo hiểm", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateInsuranceRequest request) {
        try {
            Insurance t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Mã số bảo hiểm đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateInsuranceRequest request) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Mã bảo hiểm này không tồn tại", HttpStatus.NOT_FOUND);
            }
            Insurance t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Mã số bảo hiểm đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
