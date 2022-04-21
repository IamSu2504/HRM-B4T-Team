package backend.service;

import backend.entity.Contract;
import backend.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService {

    @Autowired
    private ContractRepository repository;

    public List<Contract> getContract(String maNV){
        return repository.getByMaNV(maNV);
    }
}