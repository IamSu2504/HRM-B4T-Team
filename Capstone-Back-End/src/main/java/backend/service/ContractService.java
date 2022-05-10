package backend.service;

import backend.entity.*;
import backend.repository.ContractCategoryRepository;
import backend.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ContractService {

    @Autowired
    private ContractRepository repo;

    @Autowired
    private ContractCategoryRepository contractCategoryRepository;

    public List<Contract> getAll() {
        return repo.findAll();
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

        if(newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc())<=0){
            return "End date must be after start date";
        }

        // add
        if(!repo.findById(newContract.getMaHD()).isPresent()){
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(newContract.getNgayHetHan());
            Contract c;
            if(repo.getContractInRange(newContract.getNgayHieuLuc(),newContract.getNgayHetHan(),newContract.getMaNV())!=null){
                c = repo.getContractInRange(newContract.getNgayHieuLuc(),newContract.getNgayHetHan(),newContract.getMaNV());
                return "Employee with ID " + newContract.getMaNV() + " had a contract available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }
//            if(repo.getContractStartInRange(start,end,newContract.getMaNV())!=null){
//                c = repo.getContractStartInRange(start,end,newContract.getMaNV());
//                return "Employee with ID " + newContract.getMaNV() + " had a contract available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Add fail";
//            }
//            if(repo.getContractEndInRange(start,end,newContract.getMaNV())!=null){
//                c = repo.getContractEndInRange(start,end,newContract.getMaNV());
//                return "Employee with ID " + newContract.getMaNV() + " had a contract available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Add fail";
//            }
            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        }
        else{
            return "Contract ID existed";
        }
    }

    public String getUpdateMessage(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        if(newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc())<=0){
            return "End date must be after start date";
        }

        // update
        if(repo.findById(newContract.getMaHD()).isPresent()){
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(newContract.getNgayHetHan());
            Contract c;

            if(repo.getContractStartInRange2(start,end,newContract.getMaNV(),newContract.getMaHD())!=null){
                c = repo.getContractStartInRange2(start,end,newContract.getMaNV(),newContract.getMaHD());
                return "Employee with ID " + newContract.getMaNV() + " had a contract available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }
            if(repo.getContractEndInRange2(start,end,newContract.getMaNV(),newContract.getMaHD())!=null || repo.getContractEndInRange2(start,end, newContract.getMaNV(),newContract.getMaHD())!=null){
                c = repo.getContractEndInRange2(start,end,newContract.getMaNV(),newContract.getMaHD());
                return "Employee with ID " + newContract.getMaNV() + " had a contract available from " + sdf2.format(c.getNgayHieuLuc()) + " to " + sdf2.format(c.getNgayHetHan()) + ". Contracts cannot have same dates";
            }
            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        }
        return "Contract not existed, update fail";
    }

    public Contract getNewContract(CreateUpdateContractRequest request){
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            Contract s = new Contract();
            s.setMaHD(request.getMaHD());
            s.setLoaiHopDong(contractCategoryRepository.findById(request.getLoaiHopDong()).get());
            s.setGhiChu(request.getGhiChu());
            s.setMaNV(request.getMaNV());
            if(request.getNgayHieuLuc() != null)
                s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            if(request.getNgayHetHan() != null)
                s.setNgayHetHan(sdf.parse(request.getNgayHetHan()));
            s.setTrangThai(request.getTrangThai());
            return s;
        } catch (Exception e){
            return null;
        }
    }

}
