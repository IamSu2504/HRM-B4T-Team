package backend.service;

import backend.entity.DayOffCategory;
import backend.entity.DegreeCategory;
import backend.repository.DegreeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DegreeCategoryService {
    @Autowired
    private DegreeCategoryRepository repo;

    public List<DegreeCategory> getAll(){
        return repo.findAll();
    }

    public DegreeCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public DegreeCategory save(DegreeCategory degreeCategory)
    {
        if(repo.getByLoaiBangCap(degreeCategory.getLoaiBangCap())==null){
            return repo.save(degreeCategory);
        }
        else{
            return null;
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    };
}
