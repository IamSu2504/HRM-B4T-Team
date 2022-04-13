package backend.service;


import backend.entity.DepartmentCategory;
import backend.repository.DepartmentCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentCategoryService {
    @Autowired
    private DepartmentCategoryRepository repo;

    public List<DepartmentCategory> getAll(){
        return repo.findAll();
    }

    public DepartmentCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public DepartmentCategory save(DepartmentCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            DepartmentCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaPhongBan().equalsIgnoreCase(oldCategory.getMaPhongBan())){
                if(repo.getByMaPhongBan(newCategory.getMaPhongBan())==null){
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
            if(repo.getByMaPhongBan(newCategory.getMaPhongBan())==null){
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
