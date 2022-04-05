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

    public TaxCategory save(TaxCategory taxCategory)
    {
        if(repo.getByMaPhanLoai(taxCategory.getMaPhanLoai())==null){
            return repo.save(taxCategory);
        }
        else{
            return null;
        }
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }
}
