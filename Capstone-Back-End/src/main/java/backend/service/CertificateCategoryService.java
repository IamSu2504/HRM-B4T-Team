package backend.service;

import backend.entity.CertificateCategory;
import backend.repository.CertificateCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CertificateCategoryService {
    @Autowired
    private CertificateCategoryRepository repository;

    public List<CertificateCategory> getAll(){
        return repository.findAll();
    }

    public CertificateCategory create(CertificateCategory certificateCategory){
        certificateCategory.setId(repository.getLastID()+1);
        return repository.save(certificateCategory);
    };

    public CertificateCategory update(CertificateCategory certificateCategory)
    {
        return repository.save(certificateCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
