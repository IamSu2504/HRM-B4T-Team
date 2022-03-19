package backend.service;

import backend.entity.EduLevelCategory;
import backend.entity.MarriageCategory;
import backend.repository.EduLevelCategoryRepository;
import backend.repository.MarriageCategoryRepository;
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

    public MarriageCategory create(MarriageCategory marriageCategory)
    {
        marriageCategory.setId(repo.getLastID()+1);
        return repo.save(marriageCategory);
    }

    public MarriageCategory update(MarriageCategory marriageCategory)
    {
        return repo.save(marriageCategory);
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }

}
