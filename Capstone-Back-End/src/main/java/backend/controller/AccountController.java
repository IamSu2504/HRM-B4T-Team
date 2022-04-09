package backend.controller;

import backend.entity.Account;
import backend.entity.CreateUpdateAccountRequest;
import backend.entity.LoginRequest;
import backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/account")
public class AccountController {

    @Autowired
    private AccountService service;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            if(!service.checkUsernameExisted(request.getUsername())){
                return new ResponseEntity<>("Tên đăng nhập không tồn tại", HttpStatus.NOT_FOUND);
            }
            Account account = service.getLoginAccount(request);
            if(account!=null)
            {
                return new ResponseEntity<>(account, HttpStatus.OK);
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
            List<Account> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Chưa có tài khoản được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Account a = service.getById(id);
            if(a==null){
                return new ResponseEntity<>("Tài khoản không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(a, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateAccountRequest request) {
        try {
            String message = service.getSaveMessage(request);
            if(message == null)
            {
                return new ResponseEntity("Tạo tài khoản thành công", HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateAccountRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            String message = service.getSaveMessage(request);
            if(message == null)
            {
                return new ResponseEntity("Cập nhật tài khoản thành công", HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
