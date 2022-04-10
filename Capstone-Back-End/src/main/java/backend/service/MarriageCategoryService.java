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

    public MarriageCategory save(MarriageCategory newCategory)
    {
        // update
        if (newCategory.getId() != null) {
            MarriageCategory oldCategory = repo.findById(newCategory.getId()).get();
            if (!newCategory.getTinhTrang().equalsIgnoreCase(oldCategory.getTinhTrang())) {
                if (repo.getByTinhTrang(newCategory.getTinhTrang()) == null) {
                    return repo.save(newCategory);
                } else {
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else {
            if (repo.getByTinhTrang(newCategory.getTinhTrang()) == null) {
                return repo.save(newCategory);
            } else {
                return null;
            }
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }
}
