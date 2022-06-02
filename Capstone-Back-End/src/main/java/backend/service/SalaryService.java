package backend.service;

import backend.entity.Contract;
import backend.entity.CreateUpdateSalaryRequest;
import backend.entity.Salary;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class SalaryService {

    @Autowired
    private SalaryRepository salaryRepo;

    @Autowired
    private ContractRepository contractRepo;

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

    public Salary getByContractID(String contractID) {
        return salaryRepo.getByMaHD(contractID);
    }

    public String getSaveMessage(CreateUpdateSalaryRequest request) {
        Salary newSalary = getNewSalary(request);

        if (newSalary == null) {
            return "Lỗi lấy thông tin lương mới";
        }
        Contract c = newSalary.getHopDong();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        double minSalary = newSalary.getIdBacLuong().getKhoangLuongTu();
        double maxSalary = newSalary.getIdBacLuong().getKhoangLuongDen();

        if (newSalary.getLuongCoBan() < minSalary || newSalary.getLuongCoBan() > maxSalary) {
            return "Basic salary must be from " + minSalary + " to " + maxSalary;
        }
        if (newSalary.getNgayHieuLuc().compareTo(newSalary.getNgayKetThuc()) >= 0) {
            return "Effective date must be before expiration date";
        }

        String start = sdf.format(newSalary.getNgayHieuLuc());
        String end = sdf.format(newSalary.getNgayKetThuc());
        // update
        if (newSalary.getId() != null) {

            if (salaryRepo.getLuongStartInRange2(c.getMaHD(), start, end, newSalary.getId()) != null || salaryRepo.getLuongEndInRange2(c.getMaHD(), start, end, newSalary.getId()) != null) {
                return "Contract with ID " + c.getMaHD() + " has another salary effective from " + sdf2.format(newSalary.getNgayHieuLuc()) + " to " + sdf2.format(newSalary.getNgayKetThuc());
            }
            salaryRepo.save(newSalary);
            return null;
        }
        // add
        else {
            if (newSalary.getNgayHieuLuc().compareTo(c.getNgayHieuLuc()) != 0) {
                return "Ngày hiệu lực của lương bắt buộc là ngày hiệu lực của hợp đồng: " + sdf2.format(c.getNgayHieuLuc());
            }
            if (newSalary.getNgayKetThuc().compareTo(c.getNgayHetHan()) > 0) {
                return "Salary's expiration date must not be after contract's expiration date: " + sdf2.format(c.getNgayHetHan());
            }
            if (salaryRepo.getLuongStartInRange(c.getMaHD(), start, end) != null || salaryRepo.getLuongEndInRange(c.getMaHD(), start, end) != null) {
                return "Contract with ID " + c.getMaHD() + " has another salary effective from " + sdf2.format(newSalary.getNgayHieuLuc()) + " to " + sdf2.format(newSalary.getNgayKetThuc());
            }
            salaryRepo.save(newSalary);
            return null;
        }
    }

    public Salary getNewSalary(CreateUpdateSalaryRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            Salary s = new Salary();
            s.setId(request.getId());
            s.setHopDong(contractRepo.findById(request.getMaHD()).get());
            s.setIdBacLuong(salaryCategoryRepository.findById(request.getIdBacLuong()).get());
            s.setLuongCoBan(request.getLuongCoBan());
            s.setPhuCapKhac(request.getPhuCapKhac());
            if (request.getNgayHieuLuc() != null)
                s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            if (request.getNgayKetThuc() != null)
                s.setNgayKetThuc(sdf.parse(request.getNgayKetThuc()));
            return s;
        } catch (Exception e) {
            return null;
        }
    }
}
