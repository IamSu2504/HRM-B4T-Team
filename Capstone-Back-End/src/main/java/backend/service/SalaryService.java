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
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        double minSalary = newSalary.getIdBacLuong().getKhoangLuongTu();
        double maxSalary = newSalary.getIdBacLuong().getKhoangLuongDen();

        if (newSalary.getLuongCoBan() < minSalary || newSalary.getLuongCoBan() > maxSalary) {
            return "Lương cơ bản bắt buộc trong khoảng " + minSalary + " đến " + maxSalary;
        }

        // update
        if (newSalary.getId() != null) {
            Salary oldSalary = salaryRepo.findById(newSalary.getId()).get();
            newSalary.setNgayHieuLuc(oldSalary.getNgayHieuLuc());
            newSalary.setNgayKetThuc(oldSalary.getNgayKetThuc());
            salaryRepo.save(newSalary);
            return null;
//            if ((newSalary.getHopDong()) == (oldSalary.getHopDong())) {
//                if (salaryRepo.getByMaHD(newSalary.getHopDong().getMaHD()) != null) {
//                    salaryRepo.save(newSalary);
//                    return null;
//                } else {
//                    return "Mã hợp đồng không tồn tại";
//                }
//            }
//            double tongLuong = newSalary.getLuongCoBan() + newSalary.getPhuCapKhac();
//            newSalary.setTongLuong(tongLuong);
//            salaryRepo.save(newSalary);
//            return null;
        }

        // add
        else {
            Date maxDateHieuLuc = salaryRepo.getDateLuongTruoc(newSalary.getHopDong().getMaHD());
            Salary previousSalary;
            if (maxDateHieuLuc != null) {
                previousSalary = salaryRepo.getLuongTruoc(newSalary.getHopDong().getMaHD(), sdf.format(maxDateHieuLuc));
            } else {
                previousSalary = null;
            }

            // no salary saved before
            if (previousSalary == null) {
                if (newSalary.getNgayHieuLuc().compareTo(c.getNgayHieuLuc()) != 0) {
                    return "Ngày hiệu lực bắt buộc là ngày hiệu lực của hợp đồng: " + sdf.format(c.getNgayHieuLuc());
                }
                newSalary.setNgayKetThuc(c.getNgayHetHan());
                salaryRepo.save(newSalary);
                return null;
            } else {
                if (newSalary.getNgayHieuLuc().getDay() != 1) {
                    return "Ngày hiệu lực của lương mới bắt buộc là ngày đầu tháng: " + sdf.format(c.getNgayHieuLuc());
                }
                if (newSalary.getNgayHieuLuc().compareTo(previousSalary.getNgayHieuLuc()) <= 0 || newSalary.getNgayHieuLuc().compareTo(previousSalary.getNgayKetThuc()) > 0) {
                    Calendar calendar = Calendar.getInstance();
                    calendar.setTime(previousSalary.getNgayHieuLuc());
                    calendar.add(Calendar.DATE, 1);
                    String start = sdf.format(calendar.getTime());
                    return "Ngày hiệu lực của lương mới bắt buộc là ngày đầu tháng trong khoảng thời gian từ " + start + " đến " + sdf.format(previousSalary.getNgayHieuLuc());
                }

                // update previous salary
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(newSalary.getNgayHieuLuc());
                calendar.add(Calendar.DATE, -1);
                previousSalary.setNgayKetThuc(calendar.getTime());
                if (salaryRepo.save(previousSalary) == null) {
                    return "Lỗi nội bộ";
                }

                // update new salary
                newSalary.setNgayKetThuc(c.getNgayHetHan());
                if (salaryRepo.save(newSalary) == null) {
                    return "Lỗi nội bộ";
                }
                return null;
            }
        }
    }

    public Salary getNewSalary(CreateUpdateSalaryRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

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
