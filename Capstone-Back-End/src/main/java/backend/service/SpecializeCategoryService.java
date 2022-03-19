package backend.service;

import backend.entity.SpecializeCategory;
import backend.repository.SpecializeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecializeCategoryService {

    @Autowired
    private SpecializeCategoryRepository repository;

    public List<SpecializeCategory> getAll(){
        return repository.findAll();
    }

    public SpecializeCategory create(SpecializeCategory specializeCategory){
        specializeCategory.setId(repository.getLastID()+1);
        return repository.save(specializeCategory);
    };

    public SpecializeCategory update(SpecializeCategory specializeCategory)
    {
        return repository.save(specializeCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
