package backend.service;

import backend.entity.MarriageCategory;
import backend.entity.NationCategory;
import backend.repository.MarriageCategoryRepository;
import backend.repository.NationCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarriageCategoryService {

    @Autowired
    private MarriageCategoryRepository repo;

    public List<MarriageCategory> getAll()
    {
        return repo.findAll();
    }

    public MarriageCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public MarriageCategory save(MarriageCategory marriageCategory)
    {
        if(repo.getByTinhTrang(marriageCategory.getTinhTrang())==null){
            return repo.save(marriageCategory);
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
