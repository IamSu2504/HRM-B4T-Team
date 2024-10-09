package backend.service;

import backend.entity.CreateUpdateSalaryCategoryRequest;
import backend.entity.SalaryCategory;
import backend.repository.SalaryCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryCategoryService {

    @Autowired
    private SalaryCategoryRepository salaryCategoryRepo;

    public List<SalaryCategory> getAll() {
        return salaryCategoryRepo.findAll();
    }

    public SalaryCategory getById(int id) {
        if (salaryCategoryRepo.findById(id).isPresent()) {
            return salaryCategoryRepo.findById(id).get();
        } else {
            return null;
        }
    }

    public String getSaveMessage(CreateUpdateSalaryCategoryRequest request) {

        SalaryCategory newCategory = new SalaryCategory();
        newCategory.setId(request.getId());
        newCategory.setMaBacLuong(request.getMaBacLuong());
        newCategory.setTenBacLuong(request.getTenBacLuong());
        newCategory.setKhoangLuongDen(request.getKhoangLuongDen());
        newCategory.setKhoangLuongTu(request.getKhoangLuongTu());

        if(newCategory.getKhoangLuongDen() <= newCategory.getKhoangLuongTu()){
            return "Minimum salary must be smaller than maximum salary";
        }

        // update
        if (request.getId() != null) {

            SalaryCategory oldCategory = salaryCategoryRepo.findById(newCategory.getId()).get();
            if (!newCategory.getMaBacLuong().equalsIgnoreCase(oldCategory.getMaBacLuong())) {
                if (salaryCategoryRepo.getByMaBacLuong(newCategory.getMaBacLuong()) != null) {
                    return "Wage ID existed";
                } else {
                    salaryCategoryRepo.save(newCategory);
                    return null;
                }
            }
            salaryCategoryRepo.save(newCategory);
            return null;
        }
        // add
        else {
            if (salaryCategoryRepo.getByMaBacLuong(newCategory.getMaBacLuong()) != null) {
                return "Wage ID existed";
            } else {
                salaryCategoryRepo.save(newCategory);
                return null;
            }
        }
    }

    public void delete(int id) {
        salaryCategoryRepo.deleteById(id);
    }
}
