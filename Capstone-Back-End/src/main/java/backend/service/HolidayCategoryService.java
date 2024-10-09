package backend.service;

import backend.entity.HolidayCategory;
import backend.repository.HolidayCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HolidayCategoryService {
    @Autowired
    private HolidayCategoryRepository repo;

    public List<HolidayCategory> getAll(){
        return repo.findAll();
    }

    public HolidayCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public HolidayCategory save(HolidayCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            HolidayCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getTenNgayLe().equalsIgnoreCase(oldCategory.getTenNgayLe())){
                if(repo.getByTenNgayLe(newCategory.getTenNgayLe())==null){
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
            if(repo.getByTenNgayLe(newCategory.getTenNgayLe())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    }
}
