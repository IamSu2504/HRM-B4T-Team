package backend.controller;

import backend.entity.CreateUpdateWorkingProcess;
import backend.entity.WorkingProcess;
import backend.service.WorkingProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/workingProcess")
public class WorkingProcessController {

    @Autowired
    private WorkingProcessService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<WorkingProcess> listWP = service.getAll();
            if(listWP.isEmpty()){
                return new ResponseEntity<>("Working process is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listWP, HttpStatus.OK);
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
            WorkingProcess c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Working process not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateWorkingProcess request) {
        try {
            String mess = service.getSaveMessage(request);
            if(mess==null){
                return new ResponseEntity<>("Add successful",HttpStatus.OK);
            }
            return new ResponseEntity<>(mess,HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateWorkingProcess request) {
        try {
            int id = Integer.parseInt(pv);
            if (service.getById(id) == null) {
                return new ResponseEntity<>("Working process doesn't exist.", HttpStatus.NOT_FOUND);
            }
            request.setId(id);
            String mess = service.getSaveMessage(request);
            if(mess==null){
                return new ResponseEntity<>("Update successfully",HttpStatus.OK);
            }
            return new ResponseEntity<>(mess,HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
