package backend.service;

import backend.entity.DegreeCategory;
import backend.repository.DegreeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DegreeCategoryService {
    @Autowired
    private DegreeCategoryRepository repository;

    public List<DegreeCategory> getAll(){
        return repository.findAll();
    }

    public DegreeCategory create(DegreeCategory degreeCategory){
        degreeCategory.setId(repository.getLastID()+1);
        return repository.save(degreeCategory);
    };

    public DegreeCategory update(DegreeCategory degreeCategory)
    {
        return repository.save(degreeCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
