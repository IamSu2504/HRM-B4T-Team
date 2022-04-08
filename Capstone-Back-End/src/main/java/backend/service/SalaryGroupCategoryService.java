package backend.service;

import backend.entity.SalaryGroupCategory;
import backend.entity.ShiftCategory;
import backend.repository.SalaryGroupCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryGroupCategoryService {
    @Autowired
    private SalaryGroupCategoryRepository repo;

    public List<SalaryGroupCategory> getAll(){
        return repo.findAll();
    }

    public SalaryGroupCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public SalaryGroupCategory save(SalaryGroupCategory salaryGroupCategory)
    {
        if(repo.getByMaNhomLuong(salaryGroupCategory.getMaNhomLuong())==null){
            return repo.save(salaryGroupCategory);
        }
        else{
            return null;
        }
    }

    public void delete(int id){
        repo.deleteById(id);
    };
}
