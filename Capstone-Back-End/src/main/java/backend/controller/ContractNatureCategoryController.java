package backend.controller;

import backend.entity.ContractNatureCategory;
import backend.service.ContractNatureCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category/contractNature")
public class ContractNatureCategoryController {

    @Autowired
    private ContractNatureCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<ContractNatureCategory> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("List Category is empty!", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            ContractNatureCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Category not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody ContractNatureCategory contractNatureCategory) {
        try {
            ContractNatureCategory c = service.save(contractNatureCategory);
            if(c == null){
                return new ResponseEntity<>("Category already exist!", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful!", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody ContractNatureCategory contractNatureCategory) {
        try {
            int id = Integer.parseInt(pv);
            contractNatureCategory.setId(id);
            ContractNatureCategory t = service.save(contractNatureCategory);
            if(t==null){
                return new ResponseEntity<>("Contract Nature already existed!", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        try {
            service.delete(id);
            return new ResponseEntity<>("Delete successful!", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
