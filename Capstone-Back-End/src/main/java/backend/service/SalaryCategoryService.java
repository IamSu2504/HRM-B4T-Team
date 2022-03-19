package backend.service;

import backend.entity.SalaryCategory;
import backend.repository.SalaryCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryCategoryService {

    @Autowired
    private SalaryCategoryRepository repository;

    public List<SalaryCategory> getAll(){
        return repository.findAll();
    }

    public SalaryCategory create(SalaryCategory salaryCategory){
        salaryCategory.setId(repository.getLastID()+1);
        return repository.save(salaryCategory);
    };

    public SalaryCategory update(SalaryCategory salaryCategory)
    {
        return repository.save(salaryCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
