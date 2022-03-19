package backend.service;

import backend.entity.InsuranceCategory;
import backend.repository.InsuranceCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceCategoryService {

    @Autowired
    private InsuranceCategoryRepository repository;

    public List<InsuranceCategory> getAll(){
        return repository.findAll();
    }

    public InsuranceCategory create(InsuranceCategory insuranceCategory){
        insuranceCategory.setId(repository.getLastID()+1);
        return repository.save(insuranceCategory);
    }

    public InsuranceCategory update(InsuranceCategory insuranceCategory){
        return repository.save(insuranceCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    }
}
