package backend.service;

import backend.entity.CertificateCategory;
import backend.repository.CertificateCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CertificateCategoryService {
    @Autowired
    private CertificateCategoryRepository repo;

    public List<CertificateCategory> getAll(){
        return repo.findAll();
    }

    public CertificateCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public CertificateCategory save(CertificateCategory certificateCategory)
    {
        if(repo.getByMaChungChi(certificateCategory.getMaChungChi())==null){
            return repo.save(certificateCategory);
        }
        else{
            return null;
        }
    }

    public void delete(int id){
        repo.deleteById(id);
    };
}
