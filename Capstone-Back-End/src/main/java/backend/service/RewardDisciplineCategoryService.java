package backend.service;


import backend.entity.RewardDisciplineCategory;
import backend.entity.TaxCategory;
import backend.repository.RewardDisciplineCategoryRepository;
import backend.repository.TaxCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardDisciplineCategoryService {

    @Autowired
    private RewardDisciplineCategoryRepository repo;

    public List<RewardDisciplineCategory> getAll()
    {
        return repo.findAll();
    }

    public RewardDisciplineCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public RewardDisciplineCategory save(RewardDisciplineCategory rewardDisciplineCategory)
    {
        if(repo.getByDanhMuc(rewardDisciplineCategory.getDanhMuc())==null){
            return repo.save(rewardDisciplineCategory);
        }
        else{
            return null;
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }
}
