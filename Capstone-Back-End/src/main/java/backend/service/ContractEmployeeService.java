package backend.service;

import backend.entity.ContractEmployee;
import backend.repository.ContractEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractEmployeeService {

    @Autowired
    private ContractEmployeeRepository repository;

    public List<ContractEmployee> getContract(String maNV){
        return repository.getByMaNV(maNV);
    }
}