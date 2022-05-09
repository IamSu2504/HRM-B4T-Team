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
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.OK);
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
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
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
                return new ResponseEntity<>("Danh mục đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
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
                return new ResponseEntity<>("Tính chất hợp đồng đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        try {
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
