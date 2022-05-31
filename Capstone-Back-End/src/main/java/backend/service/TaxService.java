package backend.service;

import backend.entity.CreateUpdateInsuranceRequest;
import backend.entity.CreateUpdateTaxRequest;
import backend.entity.Tax;
import backend.repository.EmployeeRepository;
import backend.repository.TaxCategoryRepository;
import backend.repository.TaxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxService {

    @Autowired
    private TaxRepository repo;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TaxCategoryRepository repository;

    public List<Tax> getAll(){
        return repo.findAll();
    }

    public Tax getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public Tax save(CreateUpdateTaxRequest request)
    {
        Tax newTax = getNewTax(request);
        // update
        if(newTax.getId()!=null){
            Tax oldTax = repo.findById(newTax.getId()).get();
            if(!newTax.getMaSoThue().equalsIgnoreCase(oldTax.getMaSoThue())){
                if(repo.getByMaSoThue(newTax.getMaSoThue())==null){
                    if(newTax.getMaSoThue().matches("[0-9]{10}\\-[0-9]{3}$")){
                        return repo.save(newTax);
                    }
                    return null;
                }
                else{
                    return null;
                }
            }
            return repo.save(newTax);
        }
        // add
        else{
            if(repo.getByMaSoThue(newTax.getMaSoThue())==null){
                if((newTax.getMaSoThue().matches("[0-9]{10}\\-[0-9]{3}$"))) {

                }
                return repo.save(newTax);
            }
            else{
                return null;
            }
        }
    }

    public Tax getNewTax(CreateUpdateTaxRequest request){
        try {
            Tax i = new Tax();
            i.setId(request.getId());
            i.setIdLoaiThue(repository.findById(request.getIdLoaiThue()).get());
            i.setMaSoThue(request.getMaSoThue());
            i.setMaNV(employeeRepository.findById(request.getMaNV()).get());

            return i;
        } catch (Exception e){
            return null;
        }
    }
}
