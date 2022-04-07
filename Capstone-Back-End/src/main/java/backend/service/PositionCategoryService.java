package backend.service;

import backend.entity.PositionCategory;
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

    public String getSaveMessage(PositionCategory positionCategory) {
        if (repo.getByMaChucVu(positionCategory.getMaChucVu()) != null) {
            return "Mã chức vụ đã tồn tại";
        } else if (repo.getByTenChucVu(positionCategory.getTenChucVu()) != null) {
            return "Tên chức vụ đã tồn tại";
        } else {
            repo.save(positionCategory);
            return null;
        }
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
