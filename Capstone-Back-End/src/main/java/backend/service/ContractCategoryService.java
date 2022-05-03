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

    public ContractCategory save(ContractCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            ContractCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaLoaiHopDong().equalsIgnoreCase(oldCategory.getMaLoaiHopDong())){
                if(repo.getByMaLoaiHopDong(newCategory.getMaLoaiHopDong())==null){
                    return repo.save(newCategory);
                }
                else{
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else{
            if(repo.getByMaLoaiHopDong(newCategory.getMaLoaiHopDong())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    };

    public List<ContractCategory> getSearched(String text){
        return repo.getSearched(text);
    }
}
