package backend.service;

import backend.entity.SpecializeCategory;
import backend.repository.SpecializeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecializeCategoryService {

    @Autowired
    private SpecializeCategoryRepository repo;

    public List<SpecializeCategory> getAll(){
        return repo.findAll();
    }

    public SpecializeCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public SpecializeCategory save(SpecializeCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            SpecializeCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaChuyenMon().equalsIgnoreCase(oldCategory.getMaChuyenMon())){
                if(repo.getByMaChuyenMon(newCategory.getMaChuyenMon())==null){
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
            if(repo.getByMaChuyenMon(newCategory.getMaChuyenMon())==null){
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
}
