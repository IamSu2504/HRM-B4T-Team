package backend.service;

import backend.entity.CreateUpdateSalaryCategoryRequest;
import backend.entity.SalaryCategory;
import backend.entity.SalaryGroupCategory;
import backend.repository.SalaryCategoryRepository;
import backend.repository.SalaryGroupCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryCategoryService {

    @Autowired
    private SalaryCategoryRepository salaryCategoryRepo;

    @Autowired
    private SalaryGroupCategoryRepository salaryGroupCategoryRepo;

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
        newCategory.setNhomLuong(salaryGroupCategoryRepo.findById(request.getNhomLuongID()).get());
        newCategory.setMaBacLuong(request.getMaBacLuong());
        newCategory.setTenBacLuong(request.getTenBacLuong());
        newCategory.setKhoangLuongDen(request.getKhoangLuongDen());
        newCategory.setKhoangLuongTu(request.getKhoangLuongTu());

        // update
        if (request.getId() != null) {
            SalaryCategory oldCategory = salaryCategoryRepo.findById(newCategory.getId()).get();
            if (!newCategory.getMaBacLuong().equalsIgnoreCase(oldCategory.getMaBacLuong())) {
                if (salaryCategoryRepo.getByMaBacLuong(newCategory.getMaBacLuong()) != null) {
                    return "Mã bậc lương đã tồn tại";
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
                return "Mã bậc lương đã tồn tại";
            } else {
                salaryCategoryRepo.save(newCategory);
                return null;
            }
        }
    }


    public void delete(int id) {
        salaryCategoryRepo.deleteById(id);
    }

    ;
}
