package backend.service;

import backend.entity.InsuranceEmployee;
import backend.repository.InsuranceEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceEmployeeService {

    @Autowired
    private InsuranceEmployeeRepository repo;

    public List<InsuranceEmployee> getInsurance(String maNV){
        return repo.getByMaNV(maNV);
    }
}
