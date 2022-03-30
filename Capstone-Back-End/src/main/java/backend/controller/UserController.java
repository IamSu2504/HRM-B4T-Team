package backend.controller;

import backend.entity.CreateUserRequest;
import backend.entity.LoginRequest;
import backend.entity.User;
import backend.repository.UserRepository;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository repo;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = userService.getLoginUser(request);
            if(user!=null)
            {
                return new ResponseEntity<>(userService.getLoginUser(request), HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>("Sai tên đăng nhập hoặc mật khẩu", HttpStatus.NOT_FOUND);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<User> listUser = userService.getAll();
            return new ResponseEntity<>(listUser, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


//    @PostMapping(value = "/create")
//    public ResponseEntity<?> createAccount(CreateUserRequest request) {
//        try {
//            if(accountService.getLoginUser(data)!=null)
//            {
//                return new ResponseEntity<>(accountService.getLoginUser(data), HttpStatus.OK);
//            }
//            else{
//                return new ResponseEntity<>("Sai tên đăng nhập hoặc mật khẩu", HttpStatus.INTERNAL_SERVER_ERROR);
//            }
//
//        }catch(Exception e){
//            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }





}
