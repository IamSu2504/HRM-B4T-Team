package backend.service;

import backend.entity.CreateUpdateEduLevelRequest;
import backend.entity.EduLevel;
import backend.entity.Employee;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class EduLevelService {

    @Autowired
    private EduLevelRepository repository;

    @Autowired
    private SpecializeCategoryRepository specializeCategoryRepository;

    @Autowired
    private EduLevelCategoryRepository eduLevelCategoryRepository;

    @Autowired
    private DegreeCategoryRepository degreeCategoryRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EduLevel> getAll(){
        return repository.findAll();
    }

    public List<EduLevel> getByMaNV(String maNV){
        return repository.getByMaNV(maNV);
    }

    public EduLevel getById(int id){
        if(repository.findById(id).isPresent()){
            return repository.findById(id).get();
        }
        else{
            return null;
        }
    }

    public EduLevel save(CreateUpdateEduLevelRequest request)
    {
        EduLevel newEduLevel = getNewEduLevel(request);
        // update
        if (newEduLevel.getId() != null) {
            EduLevel oldEduLevel = repository.findById(newEduLevel.getId()).get();
            if ((newEduLevel.getMaNV()) == (oldEduLevel.getMaNV())) {
                if (repository.getByMaNV(newEduLevel.getMaNV().getId()) != null) {
                    return repository.save(newEduLevel);
                } else {
                    return null;
                }
            }
            return repository.save(newEduLevel);
        }
        // add
        else {
            Employee nhanVien = employeeRepository.findById(newEduLevel.getMaNV().getId()).get();
            if (nhanVien.getId() != null) {
                return repository.save(newEduLevel);
            } else {
                return null;
            }
        }
    }

    public EduLevel getNewEduLevel(CreateUpdateEduLevelRequest request){
        try {
            EduLevel i = new EduLevel();
            i.setId(request.getId());
            i.setIdChuyenMon(specializeCategoryRepository.findById(request.getIdChuyenMon()).get());
            i.setIdTrinhDo(eduLevelCategoryRepository.findById(request.getIdTrinhDo()).get());
            i.setIdBangCap(degreeCategoryRepository.findById(request.getIdBangCap()).get());
            i.setTenTruong(request.getTenTruong());
            i.setThoiGianTu(request.getThoiGianTu());
            i.setThoiGianDen(request.getThoiGianDen());
            i.setMaNV(employeeRepository.findById(request.getMaNV()).get());
            return i;
        } catch (Exception e){
            return null;
        }
    }
}
