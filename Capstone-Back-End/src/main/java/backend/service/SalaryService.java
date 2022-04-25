package backend.service;

import backend.entity.CreateUpdateSalaryRequest;
import backend.entity.Salary;
import backend.entity.SalaryCategory;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class SalaryService {
    @Autowired
    private SalaryRepository salaryRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ContractEmployeeRepository contractEmployeeRepository;

    @Autowired
    private SalaryCategoryRepository salaryCategoryRepository;

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

    public Salary save(CreateUpdateSalaryRequest request) {
        Salary newSalary = getNewSalary(request);

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

    public Salary getNewSalary(CreateUpdateSalaryRequest request){
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            Salary s = new Salary();
            s.setId(request.getId());
            s.setMaHD(contractEmployeeRepository.findById(request.getMaHD()).get());
            s.setIdBacLuong(salaryCategoryRepository.findById(request.getIdBacLuong()).get());
            s.setLuongCoBan(request.getLuongCoBan());
            s.setPhuCapKhac(request.getPhuCapKhac());
            s.setTongLuong(request.getTongLuong());
            s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            s.setNgayKetThuc(sdf.parse(request.getNgayKetThuc()));
            if (request.getTrangThai() != null)
                s.setTrangThai(request.getTrangThai());
            return s;
        } catch (Exception e){
            return null;
        }
    }
}
