package backend.service;

import backend.entity.Salary;
import backend.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryService {
    @Autowired
    private SalaryRepository repo;

    public List<Salary> getAll(){
        return repo.findAll();
    }

    public Salary getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public Salary save(Salary newSalary)
    {
        // update
        if(newSalary.getId()!=null){
            Salary oldSalary = repo.findById(newSalary.getId()).get();
            if((newSalary.getMaHD()) == (oldSalary.getMaHD())){
                if(repo.getByMaHD(newSalary.getMaHD().getId())==null){
                    return repo.save(newSalary);
                }
                else{
                    return null;
                }
            }
            return repo.save(newSalary);
        }
        // add
        else{
            if(repo.getByMaHD(newSalary.getMaHD().getId())==null){
                return repo.save(newSalary);
            }
            else{
                return null;
            }
        }
    }
}
