package backend.controller;

import backend.entity.EduLevelCategory;
import backend.service.EduLevelCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/category/eduLevel")
public class EduLevelCategoryController {

    @Autowired
    private EduLevelCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<EduLevelCategory> listEduCategory = service.getAll();
            if(listEduCategory.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listEduCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            EduLevelCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody EduLevelCategory eduLevelCategory) {
        try {
            EduLevelCategory t = service.save(eduLevelCategory);
            if(t==null){
                return new ResponseEntity<>("Trình độ học vấn đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody EduLevelCategory eduLevelCategory) {
        try {
            int id = Integer.parseInt(pv);
            eduLevelCategory.setId(id);
            EduLevelCategory t = service.save(eduLevelCategory);
            if(t==null){
                return new ResponseEntity<>("Trình độ học vấn đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
