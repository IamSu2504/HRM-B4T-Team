package backend.service;

import backend.entity.ContractCategory;
import backend.repository.ContractCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractCategoryService {
    @Autowired
    private ContractCategoryRepository repository;

    public List<ContractCategory> getAll(){
        return repository.findAll();
    }

    public ContractCategory create(ContractCategory contractCategory){
        contractCategory.setId(repository.getLastID()+1);
        return repository.save(contractCategory);
    };

    public ContractCategory update(ContractCategory contractCategory)
    {
        return repository.save(contractCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
