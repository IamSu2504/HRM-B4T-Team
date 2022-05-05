package backend.controller;


import backend.entity.Contract;
import backend.entity.CreateUpdateContractRequest;
import backend.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://192.168.1.7/")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/contract")
public class ContractController {

    @Autowired
    private ContractService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Contract> listContract = service.getAll();
            if(listContract.isEmpty()){
                return new ResponseEntity<>("Danh sách hợp đồng trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listContract, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            Contract c = service.getById(pv);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy hợp đồng", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateContractRequest request) {
        try {
            String mess = service.getCreateMessage(request);
            if(mess!=null){
                return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateContractRequest request) {
        try {
            if (service.getById(pv) == null) {
                return new ResponseEntity<>("Mã hợp đồng không tồn tại", HttpStatus.NOT_FOUND);
            }
            request.setMaHD(pv);
            String mess = service.getUpdateMessage(request);
            if(mess!=null){
                return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
