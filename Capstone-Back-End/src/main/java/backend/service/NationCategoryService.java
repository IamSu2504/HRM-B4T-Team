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

    public NationCategory create(NationCategory nationCategory)
    {
        nationCategory.setId(repo.getLastID()+1);
        return repo.save(nationCategory);
    }

    public NationCategory update(NationCategory nationCategory)
    {
        return repo.save(nationCategory);
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }

}
