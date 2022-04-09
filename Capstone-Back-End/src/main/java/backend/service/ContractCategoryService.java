package backend.service;

import backend.entity.ContractCategory;
import backend.repository.ContractCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractCategoryService {
    @Autowired
    private ContractCategoryRepository repo;

    public List<ContractCategory> getAll(){
        return repo.findAll();
    }

    public ContractCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public ContractCategory save(ContractCategory contractCategory)
    {
        if(repo.getByMaLoaiHopDong(contractCategory.getMaLoaiHopDong())==null){
            return repo.save(contractCategory);
        }
        else{
            return null;
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    };
}
