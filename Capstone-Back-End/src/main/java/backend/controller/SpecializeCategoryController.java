package backend.controller;

import backend.entity.SpecializeCategory;
import backend.service.SpecializeCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/category/specialize")
public class SpecializeCategoryController {

    @Autowired
    private SpecializeCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<SpecializeCategory> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Category is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            SpecializeCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Category not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody SpecializeCategory specializeCategory) {
        try {
            SpecializeCategory c = service.save(specializeCategory);
            if(c==null){
                return new ResponseEntity<>("Specialize code already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody SpecializeCategory specializeCategory) {
        try {
            int id = Integer.parseInt(pv);
            specializeCategory.setId(id);
            SpecializeCategory c = service.save(specializeCategory);
            if(c==null){
                return new ResponseEntity<>("Specialize code already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            service.delete(id);
            return new ResponseEntity<>("Delete successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
