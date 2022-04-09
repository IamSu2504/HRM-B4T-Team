package backend.service;

import backend.entity.ContractNatureCategory;
import backend.repository.ContractNatureCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContractNatureCategoryService {

    @Autowired
    private ContractNatureCategoryRepository repo;

    public List<ContractNatureCategory> getAll()
    {
        return repo.findAll();
    }

    public ContractNatureCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public ContractNatureCategory save(ContractNatureCategory contractNatureCategory)
    {
        if(repo.getByTinhChatHopDong(contractNatureCategory.getTinhChatHopDong())==null){
            return repo.save(contractNatureCategory);
        }
        else{
            return null;
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }

}
