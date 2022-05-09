package backend.controller;

import backend.entity.CreateUpdateRewardDisciplineRequest;
import backend.entity.RewardDiscipline;
import backend.service.RewardDisciplineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "")
public class RewardDisciplineController {

    @Autowired
    private RewardDisciplineService service;

    @GetMapping(value = "/reward")
    public ResponseEntity<?> getAllReward() {
        try {
            List<RewardDiscipline> list = service.getAllReward();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách khen thưởng trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "reward/{id}")
    public ResponseEntity<?> getRewardById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            RewardDiscipline rd = service.getRewardById(id);
            if(rd==null){
                return new ResponseEntity<>("Thông tin khen thưởng không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(rd, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/discipline")
    public ResponseEntity<?> getAllDiscipline() {
        try {
            List<RewardDiscipline> list = service.getAllDiscipline();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách kỉ luật trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "discipline/{id}")
    public ResponseEntity<?> getDisciplineById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            RewardDiscipline rd = service.getDisciplineById(id);
            if(rd==null){
                return new ResponseEntity<>("Thông tin kỉ luật không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(rd, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/rewardDiscipline")
    public ResponseEntity<?> create(@RequestBody CreateUpdateRewardDisciplineRequest request) {
        try {
            String mess = service.getSaveMessage(request);
            if(mess==null){
                return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/rewardDiscipline/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateRewardDisciplineRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            String mess = service.getSaveMessage(request);
            if(mess==null){
                return new ResponseEntity<>("Update successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>(mess, HttpStatus.EXPECTATION_FAILED);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
