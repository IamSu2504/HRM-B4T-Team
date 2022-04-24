package backend.controller;

import backend.entity.CreateUpdateUserRequest;
import backend.entity.User;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<User> list = service.getAll();
            if (list.isEmpty()) {
                return new ResponseEntity<>("Chưa có người dùng được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String id) {
        try {
            User u = service.getById(id);
            if (u == null) {
                return new ResponseEntity<>("Người dùng không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateUserRequest request) {
        try {
            String mess = service.getCreateUserMessage(request);
            if (mess == null) {
                return new ResponseEntity<>("Tạo thành công", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody CreateUpdateUserRequest request) {
        try {
            request.setId(id);
            String mess = service.getUpdateUserMessage(request);
            if (mess == null) {
                return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}/image")
    public ResponseEntity changeProfileImage(@RequestParam("file") MultipartFile file, @PathVariable String id) {
        try {
            User user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Người dùng không tồn tại", HttpStatus.EXPECTATION_FAILED);
            }

            String fileName = user.getId() + ".jpg";
            String fileDirectory = new File("./src/main/resources/avatar").getCanonicalPath() + "\\" + fileName;
            //creating a new file in some local directory
            File fileToSave = new File(fileDirectory);
            //copy file content from received file to new local file
            file.transferTo(fileToSave);

            // update image
            user.setImage(fileName);
            String updateMess = service.getUpdateUserMessage(user);
            if (updateMess == null)
                return new ResponseEntity<>(HttpStatus.OK);
            else
                return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IOException ioe) {
            //if something went bad, we need to inform client about it
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<?> getProfileImage(@PathVariable String id){
        try {
            User user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Người dùng không tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            String path = new File("./src/main/resources/avatar").getCanonicalPath() + "\\" + user.getImage();
            File imageFile = new File(path);
            BufferedImage bImage = ImageIO.read(imageFile);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ImageIO.write(bImage, "jpg", bos);
            byte[] data = bos.toByteArray();

            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(data);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
