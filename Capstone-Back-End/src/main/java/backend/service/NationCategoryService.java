package backend.service;

import backend.entity.NationCategory;
import backend.entity.PositionCategory;
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

    public List<NationCategory> getAll() {
        return repo.findAll();
    }

    public NationCategory getById(int id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public NationCategory save(NationCategory newCategory) {
        // update
        if (newCategory.getId() != null) {
            NationCategory oldCategory = repo.findById(newCategory.getId()).get();
            if (!newCategory.getQuocTich().equalsIgnoreCase(oldCategory.getQuocTich())) {
                if (repo.getByQuocTich(newCategory.getQuocTich()) == null) {
                    return repo.save(newCategory);
                } else {
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else {
            if (repo.getByQuocTich(newCategory.getQuocTich()) == null) {
                return repo.save(newCategory);
            } else {
                return null;
            }
        }
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
