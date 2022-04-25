package backend.service;

import backend.entity.Contract;
import backend.entity.ContractCategory;
import backend.repository.ContractCategoryRepository;
import backend.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Contract save(Contract newContract) {
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
            //set loi la ko de trong ma HD
            return null;
        }
    }
}
