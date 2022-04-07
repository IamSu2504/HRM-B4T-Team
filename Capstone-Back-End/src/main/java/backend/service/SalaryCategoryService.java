package backend.service;

import backend.entity.SalaryCategory;
import backend.entity.TaxCategory;
import backend.repository.SalaryCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryCategoryService {

    @Autowired
    private SalaryCategoryRepository repo;

    public List<SalaryCategory> getAll(){
        return repo.findAll();
    }

    public SalaryCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }


    public SalaryCategory save(SalaryCategory salaryCategory)
    {
        return repo.save(salaryCategory);
    }

    public void delete(int id){
        repo.deleteById(id);
    };
}
