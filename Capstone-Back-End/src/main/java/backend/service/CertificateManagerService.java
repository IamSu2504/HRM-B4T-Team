package backend.service;

import backend.entity.CertificateManager;
import backend.entity.CreateUpdateCertificateRequest;
import backend.entity.Employee;
import backend.entity.Health;
import backend.repository.CertificateCategoryRepository;
import backend.repository.CertificateManagerRepository;
import backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class CertificateManagerService {

    @Autowired
    private CertificateManagerRepository repo;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    CertificateCategoryRepository certificateCategoryRepository;

    public List<CertificateManager> getAll(){
        return repo.findAll();
    }

    public List<CertificateManager> getByMaNV(String maNV){
            return repo.getByMaNV(maNV);
    }

    public CertificateManager getById(int id){
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public CertificateManager save(CreateUpdateCertificateRequest request)
    {
        CertificateManager newCertificate = getNewCertificate(request);
        // update
        if (newCertificate.getId() != null) {
            CertificateManager oldCertificate = repo.findById(newCertificate.getId()).get();
            if ((newCertificate.getMaNV()) == (oldCertificate.getMaNV())) {
                if (repo.getByMaNV(newCertificate.getMaNV().getId()) != null) {
                    return repo.save(newCertificate);
                } else {
                    return null;
                }
            }
            return repo.save(newCertificate);
        }
        // add
        else {
            Employee nhanVien = employeeRepository.findById(newCertificate.getMaNV().getId()).get();
            if (nhanVien.getId() != null) {
                return repo.save(newCertificate);
            } else {
                return null;
            }
        }
    }

    public CertificateManager getNewCertificate(CreateUpdateCertificateRequest request){
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            CertificateManager i = new CertificateManager();
            i.setId(request.getId());
            i.setCertificateID(certificateCategoryRepository.findById(request.getCertificateID()).get());
            if((request.getNgayCap() != null))
            i.setNgayCap(sdf.parse(request.getNgayCap()));
            i.setNoiCap(request.getNoiCap());
            i.setMaNV(employeeRepository.findById(request.getMaNV()).get());
            i.setDiemSo(request.getDiemSo());

            return i;
        } catch (Exception e){
            return null;
        }
    }

}
