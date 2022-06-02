package backend.controller;

import backend.entity.CreateUpdateEduLevelRequest;
import backend.entity.EduLevel;
import backend.service.EduLevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/eduLevel")
public class EduLevelController {

    @Autowired
    private EduLevelService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<EduLevel> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("List of Educational Level is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getByMaNV(@PathVariable("id") String maNV) {
        try {
            return new ResponseEntity<>(service.getByMaNV(maNV), HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/id/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            EduLevel c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Educational Level not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateEduLevelRequest request) {
        try {
            EduLevel t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Educational Level already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateEduLevelRequest request) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Educational Level does not exist.", HttpStatus.NOT_FOUND);
            }
            request.setId(id);
            EduLevel t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Educational Level already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
