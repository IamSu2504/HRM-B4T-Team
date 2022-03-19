package backend.controller;


import backend.entity.RelativeCategory;
import backend.service.RelativeCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/relativeCategory")
public class RelativeCategoryController {

    @Autowired
    private RelativeCategoryService service;

    @GetMapping("")
    public ResponseEntity<?> getAll() {
        try {
            List<RelativeCategory> list = service.getAll();
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi đéo nói nhiều", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody RelativeCategory relativeCategory) {
        try {
            service.create(relativeCategory);
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi đéo nói nhiều", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "")
    public ResponseEntity<?> update(@RequestBody RelativeCategory relativeCategory) {
        try {
            service.update(relativeCategory);
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi đéo nói nhiều", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        try {
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi đéo nói nhiều", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
