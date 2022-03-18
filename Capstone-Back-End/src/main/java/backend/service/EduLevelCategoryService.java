package backend.service;

import backend.entity.EduLevelCategory;
import backend.repository.EduLevelCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EduLevelCategoryService {

    @Autowired
    private EduLevelCategoryRepository repo;

    public List<EduLevelCategory> getAll()
    {
        return repo.findAll();
    }

    public EduLevelCategory create(EduLevelCategory eduLevelCategory)
    {
        eduLevelCategory.setId(repo.getLastID()+1);
        return repo.save(eduLevelCategory);
    }

    public EduLevelCategory update(EduLevelCategory eduLevelCategory)
    {
        eduLevelCategory.setId(repo.getLastID()+1);
        return repo.save(eduLevelCategory);
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }

}
