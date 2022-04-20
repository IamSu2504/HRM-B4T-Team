package backend.controller;

import backend.entity.RewardDiscipline;
import backend.service.RewardDisciplineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/rewardDiscipline")
public class RewardDisciplineController {

    @Autowired
    private RewardDisciplineService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<RewardDiscipline> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách khen thưởng/kỉ luật trống", HttpStatus.NOT_FOUND);
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
            RewardDiscipline rd = service.getById(id);
            if(rd==null){
                return new ResponseEntity<>("Thông tin khen thưởng/kỉ luật không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(rd, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody RewardDiscipline rewardDiscipline) {
        try {
            String mess = service.getSaveMessage(rewardDiscipline);
            if(mess==null){
                return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody RewardDiscipline rewardDiscipline) {
        try {
            int id = Integer.parseInt(pv);
            rewardDiscipline.setId(id);
            String mess = service.getSaveMessage(rewardDiscipline);
            if(mess==null){
                return new ResponseEntity<>("Cập nhật thành công", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
