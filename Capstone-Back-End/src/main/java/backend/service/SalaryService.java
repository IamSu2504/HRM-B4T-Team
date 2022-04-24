package backend.service;

import backend.entity.Salary;
import backend.repository.SalaryRepository;
import backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryService {
    @Autowired
    private SalaryRepository salaryRepo;

    @Autowired
    private UserRepository userRepo;

    public List<Salary> getAll() {
        return salaryRepo.findAll();
    }

    public Salary getById(int id) {
        if (salaryRepo.findById(id).isPresent()) {
            return salaryRepo.findById(id).get();
        } else {
            return null;
        }
    }

    public Salary save(Salary newSalary) {
        // update
        if (newSalary.getId() != null) {
            Salary oldSalary = salaryRepo.findById(newSalary.getId()).get();
            if ((newSalary.getMaHD()) == (oldSalary.getMaHD())) {
                if (salaryRepo.getByMaHD(newSalary.getMaHD().getId()) == null) {
                    return salaryRepo.save(newSalary);
                } else {
                    return null;
                }
            }
            double tongLuong = newSalary.getLuongCoBan() + newSalary.getPhuCapKhac() + userRepo.findById(newSalary.getMaHD().getMaNV()).get().getChucVu().getPhuCap();
            newSalary.setTongLuong(tongLuong);
            return salaryRepo.save(newSalary);
        }
        // add
        else {
            if (salaryRepo.getByMaHD(newSalary.getMaHD().getId()) == null) {
                double tongLuong = newSalary.getLuongCoBan() + newSalary.getPhuCapKhac() + userRepo.findById(newSalary.getMaHD().getMaNV()).get().getChucVu().getPhuCap();
                newSalary.setTongLuong(tongLuong);
                return salaryRepo.save(newSalary);
            } else {
                return null;
            }
        }
    }
}
