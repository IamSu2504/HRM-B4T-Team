package backend.service;


import backend.entity.RewardDisciplineCategory;
import backend.entity.TaxCategory;
import backend.repository.RewardDisciplineCategoryRepository;
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

    public List<RewardDisciplineCategory> getAllReward()
    {
        return repo.getAllReward();
    }

    public List<RewardDisciplineCategory> getAllDiscipline()
    {
        return repo.getAllDiscipline();
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

    public RewardDisciplineCategory save(RewardDisciplineCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            RewardDisciplineCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getDanhMuc().equalsIgnoreCase(oldCategory.getDanhMuc())){
                if(repo.getByDanhMuc(newCategory.getDanhMuc())==null){
                    return repo.save(newCategory);
                }
                else{
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else{
            if(repo.getByDanhMuc(newCategory.getDanhMuc())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }
}
