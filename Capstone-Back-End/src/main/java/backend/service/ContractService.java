package backend.service;

import backend.entity.Contract;
import backend.entity.ContractCategory;
import backend.entity.CreateUpdateContractRequest;
import backend.entity.CreateUpdateSalaryRequest;
import backend.repository.ContractCategoryRepository;
import backend.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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

    public Contract getById(String id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public Contract save(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        if (newContract.getMaHD() != null) {
            List<Contract> listContracts = repo.findAll();
            List<String> maHDs = new ArrayList<>();

            for (Contract contract : listContracts) {
                if (contract.getMaHD() != null) {
                    maHDs.add(contract.getMaHD());
                }
            }
            if (maHDs.contains(newContract.getMaHD())) {
                return repo.save(newContract);
            }
            else {
                ContractCategory contractCategory = contractCategoryRepository.findById(newContract.getLoaiHopDong().getId()).get();
                if(contractCategory.getId() != null) {
                    return repo.save(newContract);
                } else {
                    return null;
                }
            }
        }
        else {
            //set loi ko de trong ma HD
            return null;
        }
    }

    public Contract getNewContract(CreateUpdateContractRequest request){
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

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
