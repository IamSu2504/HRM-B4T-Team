package backend.controller;

import backend.entity.Contract;
import backend.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/contract")
public class ContractController {

    @Autowired
    private ContractService service;

    @PostMapping("/user/{id}")
    public ResponseEntity<?> getContract(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.getContract(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
