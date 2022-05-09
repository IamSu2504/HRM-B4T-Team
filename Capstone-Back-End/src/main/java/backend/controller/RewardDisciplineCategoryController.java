package backend.controller;

import backend.entity.RewardDisciplineCategory;
import backend.service.RewardDisciplineCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category")
public class RewardDisciplineCategoryController {

    @Autowired
    private RewardDisciplineCategoryService service;

    @GetMapping(value = "rewardDiscipline")
    public ResponseEntity<?> getAll() {
        try {
            List<RewardDisciplineCategory> list = service.getAll();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/reward")
    public ResponseEntity<?> getAllReward() {
        try {
            List<RewardDisciplineCategory> list = service.getAllReward();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/discipline")
    public ResponseEntity<?> getAllDiscipline() {
        try {
            List<RewardDisciplineCategory> list = service.getAllDiscipline();
            if(list.isEmpty()){
                return new ResponseEntity<>("Danh sách danh mục trống", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/rewardDiscipline/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            RewardDisciplineCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Không tìm thấy danh mục", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/rewardDiscipline")
    public ResponseEntity<?> create(@RequestBody RewardDisciplineCategory rewardDisciplineCategory) {
        try {
            RewardDisciplineCategory c = service.save(rewardDisciplineCategory);
            if(c==null){
                return new ResponseEntity<>("Danh mục khen thưởng/kỉ luật đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Thêm thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/rewardDiscipline/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody RewardDisciplineCategory rewardDisciplineCategory) {
        try {
            int id = Integer.parseInt(pv);
            rewardDisciplineCategory.setId(id);
            RewardDisciplineCategory c = service.save(rewardDisciplineCategory);
            if(c==null){
                return new ResponseEntity<>("Danh mục khen thưởng/kỉ luật đã tồn tại", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/rewardDiscipline/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            service.delete(id);
            return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
