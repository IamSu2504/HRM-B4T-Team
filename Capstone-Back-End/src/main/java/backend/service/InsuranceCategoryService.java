package backend.service;

import backend.entity.InsuranceCategory;
import backend.repository.InsuranceCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceCategoryService {

    @Autowired
    private InsuranceCategoryRepository repo;

    public List<InsuranceCategory> getAll(){
        return repo.findAll();
    }

    public InsuranceCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public InsuranceCategory save(InsuranceCategory insuranceCategory)
    {
        if(repo.getByMaBH(insuranceCategory.getMaBH())==null){
            return repo.save(insuranceCategory);
        }
        else{
            return null;
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    }
}
