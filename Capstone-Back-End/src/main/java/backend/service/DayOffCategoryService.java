package backend.service;

import backend.entity.DayOffCategory;
import backend.repository.DayOffCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayOffCategoryService {
    @Autowired
    private DayOffCategoryRepository repo;

    public List<DayOffCategory> getAll(){
        return repo.findAll();
    }

    public DayOffCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public DayOffCategory save(DayOffCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            DayOffCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getLoaiNghi().equalsIgnoreCase(oldCategory.getLoaiNghi())){
                if(repo.getByLoaiNghi(newCategory.getLoaiNghi())==null){
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
            if(repo.getByLoaiNghi(newCategory.getLoaiNghi())==null){
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
