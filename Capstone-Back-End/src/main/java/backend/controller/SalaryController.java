package backend.controller;

import backend.entity.CreateUpdateSalaryRequest;
import backend.entity.Salary;
import backend.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/salary")
public class SalaryController {

    @Autowired
    private SalaryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Salary> listSalary = service.getAll();
            if(listSalary.isEmpty()){
                return new ResponseEntity<>("List salary is empty!", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listSalary, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Salary c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Salary does not exist!", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getContract(@PathVariable("id") String maHD) {
        try {
            return new ResponseEntity<>(service.getByContractID(maHD), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateSalaryRequest request) {
        try {
            String mess = service.getSaveMessage(request);
            if(mess!=null){
                return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>("Add successful!", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateSalaryRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Salary does not exist!", HttpStatus.NOT_FOUND);
            }
            String mess = service.getSaveMessage(request);
            if(mess!=null){
                return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            service.delete(id);
            return new ResponseEntity<>("Delete successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
