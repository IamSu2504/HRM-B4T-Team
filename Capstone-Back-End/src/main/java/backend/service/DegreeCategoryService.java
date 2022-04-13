package backend.service;

import backend.entity.DegreeCategory;
import backend.repository.DegreeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DegreeCategoryService {
    @Autowired
    private DegreeCategoryRepository repo;

    public List<DegreeCategory> getAll(){
        return repo.findAll();
    }

    public DegreeCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public DegreeCategory save(DegreeCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            DegreeCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getLoaiBangCap().equalsIgnoreCase(oldCategory.getLoaiBangCap())){
                if(repo.getByLoaiBangCap(newCategory.getLoaiBangCap())==null){
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
            if(repo.getByLoaiBangCap(newCategory.getLoaiBangCap())==null){
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
