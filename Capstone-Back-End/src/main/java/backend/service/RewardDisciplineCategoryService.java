package backend.service;


import backend.entity.RewardDisciplineCategory;
import backend.repository.RewardDisciplineCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardDisciplineCategoryService {
    @Autowired
    private RewardDisciplineCategoryRepository repository;

    public List<RewardDisciplineCategory> getAll(){
        return repository.findAll();
    }

    public RewardDisciplineCategory create(RewardDisciplineCategory rewardDisciplineCategory){
        rewardDisciplineCategory.setId(repository.getLastID()+1);
        return repository.save(rewardDisciplineCategory);
    }

    public RewardDisciplineCategory update(RewardDisciplineCategory rewardDisciplineCategory){
        return repository.save(rewardDisciplineCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    }
}
