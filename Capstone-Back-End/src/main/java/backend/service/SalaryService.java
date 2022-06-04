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

    public List<Salary> getByContractID(String contractID) {
        return salaryRepo.getByMaHD(contractID);
    }

    public String getSaveMessage(CreateUpdateSalaryRequest request) {
        Salary newSalary = getNewSalary(request);

        if (newSalary == null) {
            return "Error getting new salary's data";
        }
        Contract c = newSalary.getHopDong();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        double minSalary = newSalary.getIdBacLuong().getKhoangLuongTu();
        double maxSalary = newSalary.getIdBacLuong().getKhoangLuongDen();

        if (newSalary.getLuongCoBan() < minSalary || newSalary.getLuongCoBan() > maxSalary) {
            return "Basic salary must be from " + minSalary + " to " + maxSalary;
        }
        if (newSalary.getNgayKetThuc()!=null) {
            if(compareDate(newSalary.getNgayHieuLuc(),newSalary.getNgayKetThuc())>=0) {
                return "Effective date must be before expiration date";
            }
        }
        // add
        Salary lastSalary = salaryRepo.getLast(newSalary.getHopDong().getMaNV(), newSalary.getHopDong().getMaHD());
        // infinite contract
        if (c.getNgayHetHan() == null) {
            if (newSalary.getNgayKetThuc() != null) {
                return "New salary must not have expiration date";
            }
        } else {
            if (compareDate(newSalary.getNgayKetThuc(), c.getNgayHetHan()) != 0) {
                return "New salary's expiration date must be contract's expiration date: " + sdf2.format(c.getNgayHetHan());
            }
            if (compareDate(newSalary.getNgayHieuLuc(), c.getNgayHetHan()) >= 0) {
                return "New salary's effective date must be contract's expiration date: " + sdf2.format(c.getNgayHetHan());
            }
            if (compareDate(newSalary.getNgayHieuLuc(), c.getNgayHieuLuc()) <0) {
                return "New salary's effective date must not be before contract's effective date: " + sdf2.format(c.getNgayHieuLuc());
            }
        }
        // salaries before existed
        if (lastSalary != null) {
            if (newSalary.getNgayHieuLuc().getDate() != 1) {
                return "New salary's effective date must be the first of a month.";
            }
            // delete salaries after
            List<Salary> salariesAfterCurrent = salaryRepo.getSalariesAfter(c.getMaNV(), c.getMaHD(), sdf.format(newSalary.getNgayHieuLuc()));
            if (!salariesAfterCurrent.isEmpty()) {
                for (Salary s : salariesAfterCurrent) {
                    salaryRepo.deleteById(s.getId());
                }
            }
            // update salary before
            lastSalary.setNgayKetThuc(getDateBefore(newSalary.getNgayHieuLuc()));
            salaryRepo.save(lastSalary);
        }
        else{
            if (compareDate(newSalary.getNgayHieuLuc(), c.getNgayHieuLuc()) != 0) {
                return "New salary's effective date must be contract's effective date: " + sdf2.format(c.getNgayHieuLuc());
            }
        }
        salaryRepo.save(newSalary);
        return null;
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
            if (request.getNgayKetThuc() != null && !request.getNgayKetThuc().equals(""))
                s.setNgayKetThuc(sdf.parse(request.getNgayKetThuc()));
            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public int compareDate(Date d1, Date d2) {
        Calendar c = Calendar.getInstance();
        c.set(d1.getYear(), d1.getMonth(), d1.getDate());
        d1 = c.getTime();
        c.set(d2.getYear(), d2.getMonth(), d2.getDate());
        d2 = c.getTime();
        return d1.compareTo(d2);
    }

    public Date getDateBefore(Date d) {
        Calendar c = Calendar.getInstance();
        c.set(d.getYear()+1900, d.getMonth(), d.getDate(), 0, 0, 0);
        c.add(Calendar.DAY_OF_MONTH, -1);
        return c.getTime();
    }
}
