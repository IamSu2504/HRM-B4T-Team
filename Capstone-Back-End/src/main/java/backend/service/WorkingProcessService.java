package backend.service;

import backend.entity.CreateUpdateWorkingProcess;
import backend.entity.DepartmentCategory;
import backend.entity.WorkingProcess;
import backend.repository.DepartmentCategoryRepository;
import backend.repository.PositionCategoryRepository;
import backend.repository.WorkingProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class WorkingProcessService {

    @Autowired
    private WorkingProcessRepository repo;

    @Autowired
    private DepartmentCategoryRepository departmentCategoryRepository;

    @Autowired
    private PositionCategoryRepository positionCategoryRepository;

    public List<WorkingProcess> getAll() {
        return repo.findAll();
    }

    public WorkingProcess getById(int id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public List<WorkingProcess> getByMaNV(String maNV) {
        return repo.getByMaNV(maNV);
    }

    public String getSaveMessage(CreateUpdateWorkingProcess request) {
        WorkingProcess newWorkingProcess = getNewWorkingProcess(request);
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd");
        Date start;
        Date end;
        Calendar c = Calendar.getInstance();
        c.setTime(newWorkingProcess.getNgayVao());
        c.set(Calendar.HOUR,0);
        c.set(Calendar.MINUTE,0);
        c.set(Calendar.SECOND,0);
        start = c.getTime();

        if(newWorkingProcess.getNgayRa()==null){
            c.set(8099,1,1,0,0,0);
            end = c.getTime();
        }
        else{
            c.setTime(newWorkingProcess.getNgayRa());
            c.set(Calendar.HOUR,0);
            c.set(Calendar.MINUTE,0);
            c.set(Calendar.SECOND,0);
            end = c.getTime();
        }
        if (compareDate(start, end) >= 0) {
            return "Start date must be before end date";
        }
        // update
        if (newWorkingProcess.getId() != null) {
            List<WorkingProcess> wps = repo.getByEmpInRange(newWorkingProcess.getMaNV(), start, end);
            if (!wps.isEmpty()) {
               for(WorkingProcess w : wps){
                   if(w.getId()!=newWorkingProcess.getId()){
                       return "This employee had another working process from " + sdf.format(w.getNgayVao()) + " to " + sdf.format(w.getNgayRa()) + ". Working processes can't have dublicate dates";
                   }
               }
            }
            repo.save(newWorkingProcess);
            return null;
        }
        // add
        else {
            WorkingProcess w = repo.getLastByEmp(newWorkingProcess.getMaNV());
            if (w != null) {
                if (w.getNgayRa() == null) {
                    return "This employee is having an indefinite-term working process. Add failed";
                }
            }
            List<WorkingProcess> wps = repo.getByEmpInRange(newWorkingProcess.getMaNV(), start, end);
            if (!wps.isEmpty()) {
                for(WorkingProcess wp : wps){
                    if(wp.getId()!=newWorkingProcess.getId()){
                        return "This employee had another working process from " + sdf.format(wp.getNgayVao()) + " to " + sdf.format(wp.getNgayRa()) + ". Working processes can't have dublicate dates";
                    }
                }
            }
            repo.save(newWorkingProcess);
            return null;
        }
    }

    public WorkingProcess getNewWorkingProcess(CreateUpdateWorkingProcess request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            WorkingProcess s = new WorkingProcess();
            s.setId(request.getId());
            s.setIdPhongBan(departmentCategoryRepository.findById(request.getIdPhongBan()).get());
            s.setIdChucVu(positionCategoryRepository.findById(request.getIdChucVu()).get());
            if (request.getNgayVao() != null) {
                s.setNgayVao(sdf.parse(request.getNgayVao()));
            }
            if (request.getNgayRa() != null && !request.getNgayRa().equals("")) {
                s.setNgayRa(sdf.parse(request.getNgayRa()));
            }
            s.setMaNV(request.getMaNV());

            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public int compareDate(Date d1, Date d2) {
        Calendar c = Calendar.getInstance();
        c.set(d1.getYear(), d1.getMonth(), d1.getDate());
        d1 = c.getTime();
        c.set(d2.getYear(), d2.getMonth(), d2.getDate());
        d2 = c.getTime();
        return d1.compareTo(d2);
    }
}
