package backend.service;

import backend.entity.*;
import backend.repository.ContractCategoryRepository;
import backend.repository.ContractRepository;
import backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class ContractService {

    @Autowired
    private ContractRepository repo;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private ContractCategoryRepository contractCategoryRepository;

    public List<Contract> getAll() {
        return repo.findAll();
    }

    public String getLastID() {
        String lastID = repo.getLastID();
        String newID = "HD";
        for (int i = 1; i <= 4 - String.valueOf(Integer.parseInt(lastID.substring(2, lastID.length())) + 1).length(); i++) {
            newID += '0';
        }
        newID += String.valueOf(Integer.parseInt(lastID.substring(2, lastID.length())) + 1);
        return newID;
    }

    public List<Contract> getAllByEmp(String empID) {
        return repo.getAllByEmp(empID);
    }

    public Contract getById(String id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public String getCreateMessage(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        if (newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc()) <= 0) {
            return "End date must be after start date";
        }
        Employee e = empRepo.findById(newContract.getMaNV()).get();
        // add
        if (!repo.findById(newContract.getMaHD()).isPresent()) {
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(new Date(8099, 1, 1));
            if (newContract.getNgayHetHan() != null) {
                end = sdf.format(newContract.getNgayHetHan());
            }

            Contract c;
            c = repo.getLast(e.getId());
            if (c != null) {
                if (c.getNgayHetHan() == null) {
                    return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had an in-term contract(" + c.getMaHD() + ") end in " + sdf2.format(c.getNgayHetHan()) + ". Add failed";
                } else {
                    if (getNoTimeDate(c.getNgayHetHan()).compareTo(getNoTimeDate(new Date())) >= 0) {
                        return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had an in-term contract(" + c.getMaHD() + ") end in " + sdf2.format(c.getNgayHetHan()) + ". Add failed";
                    }
                }
            }

            if (repo.getContractStartInRange(start, end, newContract.getMaNV()) != null) {
                c = repo.getContractStartInRange(start, end, newContract.getMaNV());
                    return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had a contract(" + c.getMaHD() + ") available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }
            if (repo.getContractEndInRange(start, end, newContract.getMaNV()) != null) {
                c = repo.getContractEndInRange(start, end, newContract.getMaNV());
                    return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had a contract(" + c.getMaHD() + ") available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }

            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        } else {
            return "Contract ID existed";
        }
    }

    public String getUpdateMessage(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        if (newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc()) <= 0) {
            return "End date must be after start date";
        }
        Employee e = empRepo.findById(newContract.getMaNV()).get();

        // update
        if (repo.findById(newContract.getMaHD()).isPresent()) {
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(new Date(8099, 1, 1));
            if (newContract.getNgayHetHan() != null) {
                end = sdf.format(newContract.getNgayHetHan());
            }
            Contract c;

            if (repo.getContractStartInRange2(start, end, newContract.getMaNV(), newContract.getMaHD()) != null) {
                c = repo.getContractStartInRange2(start, end, newContract.getMaNV(), newContract.getMaHD());
                return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had a contract(" + c.getMaHD() + ") available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }
            if (repo.getContractEndInRange2(start, end, newContract.getMaNV(), newContract.getMaHD()) != null) {
                c = repo.getContractEndInRange2(start, end, newContract.getMaNV(), newContract.getMaHD());
                return "Employee " + e.getTenNv() + "(" + newContract.getMaNV() + ") had a contract(" + c.getMaHD() + ") available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }

            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        }
        return "Contract not existed, update fail";
    }

    public Contract getNewContract(CreateUpdateContractRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            Contract s = new Contract();
            s.setMaHD(request.getMaHD());
            s.setLoaiHopDong(contractCategoryRepository.findById(request.getLoaiHopDong()).get());
            s.setGhiChu(request.getGhiChu());
            s.setMaNV(request.getMaNV());
            if (request.getNgayHieuLuc() != null)
                s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            if (request.getNgayHetHan() != null && !request.getNgayHetHan().equals(""))
                s.setNgayHetHan(sdf.parse(request.getNgayHetHan()));
            s.setTrangThai(request.getTrangThai());
            s.setGiamTruGiaCanh(request.getGiamTruGiaCanh());
            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public Date getNoTimeDate(Date d) {
        try {
            Calendar c = Calendar.getInstance();
            c.set(d.getYear(), d.getMonth(), d.getDate(), 0, 0, 0);
            return c.getTime();
        } catch (Exception e) {
            return null;
        }
    }

    public Date getDayBefore(Date d) {
        try {
            Calendar c = Calendar.getInstance();
            c.setTime(d);
            c.add(Calendar.DAY_OF_MONTH, -1);
            return c.getTime();
        } catch (Exception e) {
            return null;
        }
    }
}
