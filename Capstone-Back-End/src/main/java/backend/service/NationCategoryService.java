package backend.service;

import backend.entity.NationCategory;
import backend.entity.TaxCategory;
import backend.repository.NationCategoryRepository;
import backend.repository.TaxCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NationCategoryService {

    @Autowired
    private NationCategoryRepository repo;

    public List<NationCategory> getAll()
    {
        return repo.findAll();
    }

    public NationCategory save(NationCategory nationCategory)
    {
        if(!repo.findById(nationCategory.getId()).isPresent()){
            return repo.save(nationCategory);
        }
        else{
            return null;
        }
    }

    public void delete(String id)
    {
        repo.deleteById(id);
    }

}
