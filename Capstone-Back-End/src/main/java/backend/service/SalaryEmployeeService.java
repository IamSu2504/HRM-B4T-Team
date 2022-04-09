package backend.service;

import backend.entity.SalaryEmployee;
import backend.repository.SalaryEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalaryEmployeeService {
    @Autowired
    private SalaryEmployeeRepository repo;

    public SalaryEmployee getSalary(String maHD){
        return repo.getByMaHD(maHD);
    }
}
