package backend.service;

import backend.entity.CreateUpdateShiftRequest;
import backend.entity.CreateUpdateWorkingProcess;
import backend.entity.DepartmentCategory;
import backend.entity.WorkingProcess;
import backend.repository.DepartmentCategoryRepository;
import backend.repository.WorkingProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class WorkingProcessService {

    @Autowired
    private WorkingProcessRepository repo;

    @Autowired
    private DepartmentCategoryRepository departmentCategoryRepository;

    public List<WorkingProcess> getAll(){
        return repo.findAll();
    }

    public WorkingProcess getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public WorkingProcess save(CreateUpdateWorkingProcess request)
    {
        WorkingProcess newWorkingProcess = getNewWorkingProcess(request);
        // update
        if(newWorkingProcess.getId()!=null){
            WorkingProcess oldWorkingProcess = repo.findById(newWorkingProcess.getId()).get();
            if((newWorkingProcess.getIdPhongBan().getId()) == (oldWorkingProcess.getIdPhongBan().getId())){
                if(repo.getByIdPhongBan(newWorkingProcess.getIdPhongBan().getId())==null){
                    return repo.save(newWorkingProcess);
                }
                else{
                    return null;
                }
            }
            return repo.save(newWorkingProcess);
        }
        // add
        else{
            DepartmentCategory departmentCategory = departmentCategoryRepository.findById(newWorkingProcess.getIdPhongBan().getId()).get();
            if(departmentCategory.getId() != null){
                return repo.save(newWorkingProcess);
            }
            else{
                return null;
            }
        }
    }

    public WorkingProcess getNewWorkingProcess(CreateUpdateWorkingProcess request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            WorkingProcess s = new WorkingProcess();
            s.setId(request.getId());
            s.setIdPhongBan(departmentCategoryRepository.findById(request.getIdPhongBan()).get());
            if(request.getNgayVao()!=null)
            s.setNgayVao(sdf.parse(request.getNgayVao()));
            if(request.getNgayRa()!=null)
            s.setNgayRa(sdf.parse(request.getNgayRa()));
            s.setMaNV(request.getMaNV());
            s.setTrangThai(request.getTrangThai());

            return s;
        } catch (Exception e) {
            return null;
        }
    }
}
