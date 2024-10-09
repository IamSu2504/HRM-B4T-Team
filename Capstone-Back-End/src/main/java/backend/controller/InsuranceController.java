package backend.controller;

import backend.entity.CreateUpdateInsuranceRequest;
import backend.entity.Insurance;
import backend.service.InsuranceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
                return new ResponseEntity<>("List of insurance is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listInsurance, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/maNV/{id}")
    public ResponseEntity<?> getByMaNV(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.getByMaNV(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Insurance c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Insurance not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateInsuranceRequest request) {
        try {
            Insurance t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Insurance code already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateInsuranceRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Insurance code doesn't exist.", HttpStatus.NOT_FOUND);
            }
            Insurance t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Insurance code already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
