package backend.controller;

import backend.entity.CreateUpdateHealthRequest;
import backend.entity.Health;
import backend.service.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/manager/health")
public class HealthController {

    @Autowired
    private HealthService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Health> listHealth = service.getAll();
            if(listHealth.isEmpty()){
                return new ResponseEntity<>("List of health is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listHealth, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Health h = service.getById(id);
            if(h==null){
                return new ResponseEntity<>("Health condition not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(h, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateHealthRequest request) {
        try {
            Health t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Health condition already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateHealthRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Health condition doesn't exist.", HttpStatus.NOT_FOUND);
            }
            Health t = service.save(request);
            if(t==null){
                return new ResponseEntity<>("Health condition already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
