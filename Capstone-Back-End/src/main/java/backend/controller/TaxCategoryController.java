package backend.controller;

import backend.entity.TaxCategory;
import backend.service.TaxCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/category/tax")
public class TaxCategoryController {

    @Autowired
    private TaxCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<TaxCategory> listTaxCategory = service.getAll();
            if(listTaxCategory.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listTaxCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") int id) {
        try {
            TaxCategory t = service.getById(id);
            if(t==null){
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(t, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody TaxCategory taxCategory) {
        try {
            TaxCategory t = service.save(taxCategory);
            if(t==null){
                return new ResponseEntity<>("Mã phân loại thuế đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody TaxCategory taxCategory) {
        try {
            taxCategory.setId(id);
            TaxCategory t = service.save(taxCategory);
            if(t==null){
                return new ResponseEntity<>("Mã phân loại thuế đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        try {
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
