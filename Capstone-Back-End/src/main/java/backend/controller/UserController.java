package backend.controller;

import backend.entity.User;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
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
    public ResponseEntity<?> create(@RequestBody User user) {
        try {
            String mess = service.getCreateUserMessage(user);
            if(mess==null){
                return new ResponseEntity<>("User created successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody User user) {
        try {
            user.setId(id);
            String mess = service.getUpdateUserMessage(user);
            if(mess==null){
                return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        }catch(Exception e){
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}/image")
    public ResponseEntity changeProfileImage(@RequestParam("file") MultipartFile file,@PathVariable String id) {
        try {
            User user = service.getById(id);
            if(user==null){
                return new ResponseEntity<>("Người dùng không tồn tại",HttpStatus.EXPECTATION_FAILED);
            }

            String fileName = user.getId()+".jpg";

            //creating a new file in some local directory
            File fileToSave = new File("C:\\Users\\Admin\\Desktop\\Back-End\\Capstone-Back-End\\avatar\\" + fileName);
            //copy file content from received file to new local file
            file.transferTo(fileToSave);

            user.setImage(fileName);
            String updateMess = service.getUpdateUserMessage(user);

            return new ResponseEntity<>("Thay đổi avatar thành công",HttpStatus.OK);
        } catch (IOException ioe) {
            //if something went bad, we need to inform client about it
            return new ResponseEntity<>("Lỗi nội bộ",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<?> getProfileImage(@PathVariable String id) throws IOException {
        try {
            User user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Người dùng không tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            BufferedImage bImage = ImageIO.read(new File("C:\\Users\\Admin\\Desktop\\Back-End\\Capstone-Back-End\\avatar\\" + user.getImage()));
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ImageIO.write(bImage, "jpg", bos);
            byte[] data = bos.toByteArray();
            byte[] base64encodedData = Base64.getEncoder().encode(data);
            return new ResponseEntity<>(base64encodedData, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
