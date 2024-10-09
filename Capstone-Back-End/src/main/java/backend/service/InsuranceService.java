package backend.service;

import backend.entity.CertificateManager;
import backend.entity.CreateUpdateInsuranceRequest;
import backend.entity.Insurance;
import backend.entity.InsuranceCategory;
import backend.repository.InsuranceCategoryRepository;
import backend.repository.InsuranceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceRepository repo;

    @Autowired
    private InsuranceCategoryRepository insuranceCategoryRepository;

    public List<Insurance> getAll(){
        return repo.findAll();
    }

    public List<Insurance> getByMaNV(String maNV){
        return repo.getByMaNV(maNV);
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

    public Insurance save(CreateUpdateInsuranceRequest request)
    {
        Insurance newInsurance = getNewInsurance(request);
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

    public Insurance getNewInsurance(CreateUpdateInsuranceRequest request){
        try {
            Insurance i = new Insurance();
            i.setId(request.getId());
            i.setIdLoaiBH(insuranceCategoryRepository.findById(request.getIdLoaiBH()).get());
            i.setMaSoBH(request.getMaSoBH());
            i.setMaNV(request.getMaNV());

            return i;
        } catch (Exception e){
            return null;
        }
    }

    public Insurance getByLoai(String maBH,String maNV){
        return repo.getByLoai(maBH,maNV);
    }
}
