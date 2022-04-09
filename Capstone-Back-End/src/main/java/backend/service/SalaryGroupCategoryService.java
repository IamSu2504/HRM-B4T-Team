package backend.service;

import backend.entity.SalaryGroupCategory;
import backend.entity.ShiftCategory;
import backend.entity.TaxCategory;
import backend.repository.SalaryGroupCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryGroupCategoryService {
    @Autowired
    private SalaryGroupCategoryRepository repo;

    public List<SalaryGroupCategory> getAll(){
        return repo.findAll();
    }

    public SalaryGroupCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public SalaryGroupCategory save(SalaryGroupCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            SalaryGroupCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaNhomLuong().equalsIgnoreCase(oldCategory.getMaNhomLuong())){
                if(repo.getByMaNhomLuong(newCategory.getMaNhomLuong())==null){
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
            if(repo.getByMaNhomLuong(newCategory.getMaNhomLuong())==null){
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
