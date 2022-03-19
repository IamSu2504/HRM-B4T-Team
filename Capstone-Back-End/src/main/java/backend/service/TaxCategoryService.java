package backend.service;

import backend.entity.MarriageCategory;
import backend.entity.TaxCategory;
import backend.repository.MarriageCategoryRepository;
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

    public TaxCategory create(TaxCategory taxCategory)
    {
        taxCategory.setId(repo.getLastID()+1);
        return repo.save(taxCategory);
    }

    public TaxCategory update(TaxCategory taxCategory)
    {
        return repo.save(taxCategory);
    }

    public void delete(int id)
    {
        repo.deleteById(id);
    }

}
