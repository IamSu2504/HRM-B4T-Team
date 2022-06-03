package backend.controller;

import backend.entity.CreateUpdateUserRequest;
import backend.entity.Employee;
import backend.service.EmployeeService;
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
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Employee> list = service.getAll();
            if (list.isEmpty()) {
                return new ResponseEntity<>("There're no employees yet.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/search/{text}")
    public ResponseEntity<?> getSearched(@PathVariable("text") String text) {
        try {
            List<Employee> list = service.getSearched(text.trim());
            if (list.isEmpty()) {
                return new ResponseEntity<>("No search result", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/newID")
    public ResponseEntity<?> getNewID() {
        try {
            return new ResponseEntity<>(service.getNewID(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String id) {
        try {
            Employee u = service.getById(id);
            if (u == null) {
                return new ResponseEntity<>("Employee not existed", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateUserRequest request) {
        try {
            String mess = service.getCreateUserMessage(request);
            if (mess == null) {
                return new ResponseEntity<>("Add employee successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody CreateUpdateUserRequest request) {
        try {
            request.setId(id);
            String mess = service.getUpdateUserMessage(request);
            if (mess == null) {
                return new ResponseEntity<>("Update employee successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}/image")
    public ResponseEntity changeProfileImage(@RequestParam("file") MultipartFile file, @PathVariable String id) {
        try {
            Employee user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Employee not existed", HttpStatus.EXPECTATION_FAILED);
            }

            String fileName = user.getId() + ".jpg";
            String fileDirectory = new File("./src/main/resources/avatar").getCanonicalPath() + "\\" + fileName;
            //creating a new file in some local directory
            File fileToSave = new File(fileDirectory);
            //copy file content from received file to new local file
            file.transferTo(fileToSave);

            // update image
            user.setImage(fileName);
            service.normalSave(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception ioe) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<?> getProfileImage(@PathVariable("id") String id){
        try {
            Employee user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Employee not existed", HttpStatus.EXPECTATION_FAILED);
            }
            String path = new File("./src/main/resources/avatar").getCanonicalPath() + "\\" + user.getImage();
            File imageFile = new File(path);
            BufferedImage bImage = ImageIO.read(imageFile);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ImageIO.write(bImage, "jpg", bos);
            byte[] data = bos.toByteArray();

            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(data);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/image/base64")
    public ResponseEntity<?> getProfileImageBased64(@PathVariable("id") String id){
        try {
            Employee user = service.getById(id);
            if (user == null) {
                return new ResponseEntity<>("Employee not existed", HttpStatus.EXPECTATION_FAILED);
            }
            String path = new File("./src/main/resources/avatar").getCanonicalPath() + "\\" + user.getImage();
            File imageFile = new File(path);
            BufferedImage bImage = ImageIO.read(imageFile);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            ImageIO.write(bImage, "jpg", bos);
            byte[] data = bos.toByteArray();
            byte[] base64encodedData = Base64.getEncoder().encode(data);

            return ResponseEntity.ok().body(base64encodedData);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
