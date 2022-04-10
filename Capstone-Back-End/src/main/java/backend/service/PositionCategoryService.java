package backend.service;

import backend.entity.PositionCategory;
import backend.entity.RelativeCategory;
import backend.entity.TaxCategory;
import backend.repository.PositionCategoryRepository;
import backend.repository.TaxCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionCategoryService {

    @Autowired
    private PositionCategoryRepository repo;

    public List<PositionCategory> getAll() {
        return repo.findAll();
    }

    public PositionCategory getById(int id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public PositionCategory save(PositionCategory newCategory) {
        // update
        if (newCategory.getId() != null) {
            PositionCategory oldCategory = repo.findById(newCategory.getId()).get();
            if (!newCategory.getMaChucVu().equalsIgnoreCase(oldCategory.getMaChucVu())) {
                if (repo.getByMaChucVu(newCategory.getMaChucVu()) == null) {
                    return repo.save(newCategory);
                } else {
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else {
            if (repo.getByMaChucVu(newCategory.getMaChucVu()) == null) {
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
