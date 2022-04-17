package backend.controller;

import backend.entity.CreateUpdateUserRequest;
import backend.entity.User;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<User> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("No User was created", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String id) {
        try {
            User u = service.getById(id);
            if(u==null){
                return new ResponseEntity<>("User isn't existed", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateUserRequest request) {
        try {
            String mess = service.getCreateUserMessage(request);
            if(mess==null){
                return new ResponseEntity<>("User created successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody CreateUpdateUserRequest request) {
        try {
            request.setId(id);
            String mess = service.getUpdateUserMessage(request);
            if(mess==null){
                return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
