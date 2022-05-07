package backend.controller;

import backend.entity.Role;
import backend.entity.TaxCategory;
import backend.service.RoleService;
import backend.service.TaxCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/role")
public class RoleController {

    @Autowired
    private RoleService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Role> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Chưa có quyền tài khoản được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
