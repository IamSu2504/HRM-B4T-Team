package backend.service;

import backend.entity.ViewDayOffEmployee;
import backend.repository.ViewDayOffEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ViewDayOffEmployeeService {

    @Autowired
    private ViewDayOffEmployeeRepository repository;

    public ViewDayOffEmployee viewDayOff(String maNV){
        return repository.getByMaNV(maNV);
    }
}
