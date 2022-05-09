package backend.controller;

import backend.entity.CreateUpdateShiftCategoryRequest;
import backend.entity.ShiftCategory;
import backend.service.ShiftCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category/shift")
public class ShiftCategoryController {

    @Autowired
    private ShiftCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<ShiftCategory> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
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
            ShiftCategory c = service.getById(id);

            if(c==null){
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateShiftCategoryRequest request) {
        try {
            ShiftCategory c = service.save(request);

            if(c==null){
                return new ResponseEntity<>("Tên ca làm đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateShiftCategoryRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            ShiftCategory c = service.save(request);

            if(c==null){
                return new ResponseEntity<>("Tên ca làm đã tồn tại", HttpStatus.EXPECTATION_FAILED);
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
