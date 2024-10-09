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

    public CertificateCategory save(CertificateCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            CertificateCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaChungChi().equalsIgnoreCase(oldCategory.getMaChungChi())){
                if(repo.getByMaChungChi(newCategory.getMaChungChi())==null){
                    return repo.save(newCategory);
                }
                else{
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else{
            if(repo.getByMaChungChi(newCategory.getMaChungChi())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }

    public void delete(int id){
        repo.deleteById(id);
    };

    public List<CertificateCategory> getSearched(String text){
        return repo.getSearched(text);
    }
}
