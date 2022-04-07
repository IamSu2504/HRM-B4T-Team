package backend.controller;

import backend.entity.CreateUserRequest;
import backend.entity.LoginRequest;
import backend.entity.SalaryCategory;
import backend.entity.User;
import backend.service.SalaryCategoryService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/category/salary")
public class SalaryCategoryController {

    @Autowired
    private SalaryCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<SalaryCategory> list = service.getAll();
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PostMapping(value = "/create")
//    public ResponseEntity<?> create(@RequestBody CreateUserRequest request) {
//        try {
//            String message = service.getCreateUserMessage(request);
//            if(message == null)
//            {
//                return new ResponseEntity("Tạo tài khoản thành công", HttpStatus.OK);
//            }
//            else{
//                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
//            }
//        }catch(Exception e){
//            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }





}
