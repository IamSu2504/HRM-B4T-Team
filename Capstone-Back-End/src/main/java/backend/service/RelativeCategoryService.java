package backend.service;


import backend.entity.RelativeCategory;
import backend.repository.RelativeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelativeCategoryService {
    @Autowired
    private RelativeCategoryRepository repository;

    public List<RelativeCategory> getAll(){
        return repository.findAll();
    }

    public RelativeCategory create(RelativeCategory relativeCategory){
        relativeCategory.setId(repository.getLastID()+1);
        return repository.save(relativeCategory);
    };

    public RelativeCategory update(RelativeCategory relativeCategory)
    {
        return repository.save(relativeCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
