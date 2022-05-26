package backend.controller;

import backend.entity.CreateUpdateTaxRequest;
import backend.entity.Tax;
import backend.service.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/tax")
public class TaxController {

    @Autowired
    private TaxService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Tax> listTax = service.getAll();
            if(listTax.isEmpty()){
                return new ResponseEntity<>("List of tax is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listTax, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Tax c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Tax not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateTaxRequest request) {
        try {
            Tax t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Tax code already exist or wrong format.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateTaxRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Tax code doesn't exist.", HttpStatus.NOT_FOUND);
            }
            Tax t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Tax code already exist or wrong format.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
