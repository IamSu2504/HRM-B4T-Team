package backend.controller;

import backend.entity.CertificateManager;
import backend.entity.CreateUpdateCertificateRequest;
import backend.entity.WorkingProcess;
import backend.service.CertificateManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/manager/certificate")
public class CertificateManagerController {

    @Autowired
    private CertificateManagerService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<CertificateManager> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách chứng chỉ trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getByMaNV(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.getByMaNV(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/id/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            CertificateManager c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy chứng chỉ này", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateCertificateRequest request) {
        try {
            CertificateManager t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Chứng chỉ này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateCertificateRequest request) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Chứng chỉ này không tồn tại", HttpStatus.NOT_FOUND);
            }
            request.setId(id);
            CertificateManager t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Chứng chỉ này đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
