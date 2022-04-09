package backend.service;


import backend.entity.RelativeCategory;
import backend.entity.TaxCategory;
import backend.repository.RelativeCategoryRepository;
import backend.repository.TaxCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelativeCategoryService {

    @Autowired
    private RelativeCategoryRepository repo;

    public List<RelativeCategory> getAll()
    {
        return repo.findAll();
    }

    public RelativeCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public RelativeCategory save(RelativeCategory relativeCategory)
    {
        if(repo.getByQuanHe(relativeCategory.getQuanHe())==null){
            return repo.save(relativeCategory);
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
