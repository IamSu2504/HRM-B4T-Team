package backend.controller;


import backend.entity.DepartmentCategory;
import backend.service.DepartmentCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category/department")
public class DepartmentCategoryController {

    @Autowired
    private DepartmentCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<DepartmentCategory> listDepartmentCategory = service.getAll();
            if(listDepartmentCategory.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listDepartmentCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            DepartmentCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody DepartmentCategory departmentCategory) {
        try {
            DepartmentCategory t = service.save(departmentCategory);
            if(t==null){
                return new ResponseEntity<>("Mã phòng ban đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody DepartmentCategory departmentCategory) {
        try {
            int id = Integer.parseInt(pv);
            departmentCategory.setId(id);
            DepartmentCategory t = service.save(departmentCategory);
            if(t==null){
                return new ResponseEntity<>("Mã phòng ban đã tồn tại", HttpStatus.EXPECTATION_FAILED);
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
