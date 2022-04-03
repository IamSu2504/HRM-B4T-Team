package backend.controller;

import backend.entity.ContractNatureCategory;
import backend.entity.MarriageCategory;
import backend.service.ContractNatureCategoryService;
import backend.service.MarriageCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody ContractNatureCategory contractNatureCategory) {
        try {
            ContractNatureCategory c = service.save(contractNatureCategory);
            if(c == null){
                return new ResponseEntity<>("Danh mục đã tồn tại", HttpStatus.OK);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "")
    public ResponseEntity<?> update(@RequestBody ContractNatureCategory contractNatureCategory) {
        try {
            ContractNatureCategory c = service.save(contractNatureCategory);
            if(c == null){
                return new ResponseEntity<>("Danh mục đã tồn tại", HttpStatus.OK);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bột", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="")
    public ResponseEntity<?> delete(@RequestBody int id) {
        try {
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
