package backend.service;

import backend.entity.TimeKeepingEmployee;
import backend.repository.TimeKeepingEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeKeepingEmployeeService {
    @Autowired
    private TimeKeepingEmployeeRepository repo;

    public List<TimeKeepingEmployee> getAll()
    {
        return repo.findAll();
    }

    public TimeKeepingEmployee getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }
}
