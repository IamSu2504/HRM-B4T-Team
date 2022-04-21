package backend.service;

import backend.entity.Insurance;
import backend.repository.InsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceRepository repo;

    public List<Insurance> getAll(){
        return repo.findAll();
    }

    public Insurance getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public Insurance save(Insurance newInsurance)
    {
        // update
        if(newInsurance.getId()!=null){
            Insurance oldInsurance = repo.findById(newInsurance.getId()).get();
            if(!newInsurance.getMaSoBH().equalsIgnoreCase(oldInsurance.getMaSoBH())){
                if(repo.getByMaSoBH(newInsurance.getMaSoBH())==null){
                    return repo.save(newInsurance);
                }
                else{
                    return null;
                }
            }
            return repo.save(newInsurance);
        }
        // add
        else{
            if(repo.getByMaSoBH(newInsurance.getMaSoBH())==null){
                return repo.save(newInsurance);
            }
            else{
                return null;
            }
        }
    }
}
