package backend.service;

import backend.entity.RewardDiscipline;
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

    public List<RewardDiscipline> getAll() {
        return rewardDisciplineRepo.getAll();
    }

    public RewardDiscipline getById(int id) {
        return rewardDisciplineRepo.getById(id);
    }

    public String getSaveMessage(RewardDiscipline rewardDiscipline) {

        if (!userRepo.findById(rewardDiscipline.getMaNv()).isPresent()) {
            return "Mã nhân viên không tồn tại";
        }

        if (rewardDisciplineRepo.getDublicate(rewardDiscipline.getMaNv(), rewardDiscipline.getPhanLoai().getId()) != null) {
            return "Thông tin khen thưởng/kỉ luật đã tồn tại";
        }

        rewardDisciplineRepo.save(rewardDiscipline);
        return null;

    }

}