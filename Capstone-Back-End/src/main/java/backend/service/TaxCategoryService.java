package backend.service;

import backend.entity.TaxCategory;
import backend.repository.TaxCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TaxCategoryService {

    @Autowired
    private TaxCategoryRepository repo;

    public List<TaxCategory> getAll()
    {
        return repo.findAll();
    }

    public TaxCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public TaxCategory save(TaxCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            TaxCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaPhanLoai().equalsIgnoreCase(oldCategory.getMaPhanLoai())){
                if(repo.getByMaPhanLoai(newCategory.getMaPhanLoai())==null){
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
            if(repo.getByMaPhanLoai(newCategory.getMaPhanLoai())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }
}
