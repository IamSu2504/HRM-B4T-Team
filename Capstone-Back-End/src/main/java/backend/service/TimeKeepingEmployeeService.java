package backend.service;

import backend.entity.TimeKeepingEmployee;
import backend.repository.TimeKeepingEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TimeKeepingEmployeeService {

    @Autowired
    private TimeKeepingEmployeeRepository repository;

    public TimeKeepingEmployee viewTimeKeeping(String maNV){
        return repository.getByMaNV(maNV);
    }
}
