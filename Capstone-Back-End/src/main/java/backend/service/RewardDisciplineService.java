package backend.service;

import backend.entity.CreateUpdateRewardDisciplineRequest;
import backend.entity.RewardDiscipline;
import backend.entity.RewardDisciplineCategory;
import backend.repository.RewardDisciplineCategoryRepository;
import backend.repository.RewardDisciplineRepository;
import backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardDisciplineService {

    @Autowired
    private RewardDisciplineRepository rewardDisciplineRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RewardDisciplineCategoryRepository rewardDisciplineCategoryRepo;

    public List<RewardDiscipline> getAllReward() {
        return rewardDisciplineRepo.getAllReward();
    }

    public List<RewardDiscipline> getAllDiscipline() {
        return rewardDisciplineRepo.getAllDiscipline();
    }

    public RewardDiscipline getRewardById(int id) {
        return rewardDisciplineRepo.getRewardByID(id);
    }

    public RewardDiscipline getDisciplineById(int id) {
        return rewardDisciplineRepo.getDisciplineByID(id);
    }

    public String getSaveMessage(CreateUpdateRewardDisciplineRequest request) {

        if (!userRepo.findById(request.getMaNv()).isPresent()) {
            return "Mã nhân viên không tồn tại";
        }

        if (rewardDisciplineRepo.getDublicate(request.getMaNv(), request.getPhanLoaiID()) != null) {
            return "Thông tin khen thưởng/kỉ luật đã tồn tại";
        }

        RewardDiscipline rd = new RewardDiscipline();
        rd.setId(request.getId());
        rd.setLyDo(request.getLyDo());
        rd.setPhanLoai(rewardDisciplineCategoryRepo.findById(request.getPhanLoaiID()).get());
        rd.setUser(userRepo.findById(request.getMaNv()).get());

        rewardDisciplineRepo.save(rd);
        return null;
    }

}