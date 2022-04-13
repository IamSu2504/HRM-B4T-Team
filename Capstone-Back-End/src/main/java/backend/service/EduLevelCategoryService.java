package backend.service;

import backend.entity.EduLevelCategory;
import backend.repository.EduLevelCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EduLevelCategoryService {

    @Autowired
    private EduLevelCategoryRepository repo;

    public List<EduLevelCategory> getAll()
    {
        return repo.findAll();
    }

    public EduLevelCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public EduLevelCategory save(EduLevelCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            EduLevelCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getTrinhDo().equalsIgnoreCase(oldCategory.getTrinhDo())){
                if(repo.getByTrinhDo(newCategory.getTrinhDo())==null){
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
            if(repo.getByTrinhDo(newCategory.getTrinhDo())==null){
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
