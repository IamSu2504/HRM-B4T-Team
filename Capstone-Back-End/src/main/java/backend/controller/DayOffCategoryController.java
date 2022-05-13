package backend.controller;

import backend.entity.DayOffCategory;
import backend.service.DayOffCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category/dayOff")
public class DayOffCategoryController {

    @Autowired
    private DayOffCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<DayOffCategory> listDayOffCategory = service.getAll();
            if(listDayOffCategory.isEmpty()){
                return new ResponseEntity<>("Category is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listDayOffCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            DayOffCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Category not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody DayOffCategory dayOffCategory) {
        try {
            DayOffCategory t = service.save(dayOffCategory);
            if(t==null){
                return new ResponseEntity<>("Type of day off already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody DayOffCategory dayOffCategory) {
        try {
            int id = Integer.parseInt(pv);
            dayOffCategory.setId(id);
            DayOffCategory t = service.save(dayOffCategory);
            if(t==null){
                return new ResponseEntity<>("Type of day off already exist.", HttpStatus.EXPECTATION_FAILED);
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
