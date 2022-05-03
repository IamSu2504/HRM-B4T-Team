package backend.service;

import backend.entity.CreateUpdateSalaryRequest;
import backend.entity.Salary;
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
    private PositionCategoryRepository positionRepo;

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

    public String getSaveMessage(CreateUpdateSalaryRequest request) {
        Salary newSalary = getNewSalary(request);

        // update
        if (newSalary.getId() != null) {
            Salary oldSalary = salaryRepo.findById(newSalary.getId()).get();
            if ((newSalary.getMaHD()) == (oldSalary.getMaHD())) {
                if (salaryRepo.getByMaHD(newSalary.getMaHD().getId()) != null) {
                    salaryRepo.save(newSalary);
                    return null;
                } else {
                    return "Mã hợp đồng không tồn tại";
                }
            }
            double tongLuong = newSalary.getLuongCoBan() + newSalary.getPhuCapKhac();
            newSalary.setTongLuong(tongLuong);
            salaryRepo.save(newSalary);
            return null;
        }
        // add
        else {
            if (salaryRepo.getByMaHD(newSalary.getMaHD().getId()) == null) {
                double tongLuong = newSalary.getLuongCoBan() + newSalary.getPhuCapKhac();
                newSalary.setTongLuong(tongLuong);
                salaryRepo.save(newSalary);
                return null;
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
            if(request.getNgayHieuLuc() != null)
            s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            if(request.getNgayKetThuc() != null)
            s.setNgayKetThuc(sdf.parse(request.getNgayKetThuc()));
            return s;
        } catch (Exception e){
            return null;
        }
    }
}
