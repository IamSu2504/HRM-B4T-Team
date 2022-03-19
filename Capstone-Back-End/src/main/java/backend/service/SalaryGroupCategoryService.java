package backend.service;


import backend.entity.SalaryGroupCategory;
import backend.repository.SalaryGroupCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryGroupCategoryService {
    @Autowired
    private SalaryGroupCategoryRepository repository;

    public List<SalaryGroupCategory> getAll(){
        return repository.findAll();
    }

    public SalaryGroupCategory create(SalaryGroupCategory salaryGroupCategory){
        salaryGroupCategory.setId(repository.getLastID()+1);
        return repository.save(salaryGroupCategory);
    };

    public SalaryGroupCategory update(SalaryGroupCategory salaryGroupCategory)
    {
        return repository.save(salaryGroupCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
