package backend.service;

import backend.entity.CreateUpdateHealthRequest;
import backend.entity.Health;
import backend.repository.EmployeeRepository;
import backend.repository.HealthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class HealthService {

    @Autowired
    private HealthRepository repo;

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Health> getAll() {
        return repo.findAll();
    }

    public Health getById(int id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public Health save(CreateUpdateHealthRequest request) {
        Health newHealth = getNewHealth(request);
        // update
        if (newHealth.getId() != null) {
            Health oldHealth = repo.findById(newHealth.getId()).get();
            if ((newHealth.getMaNV()) == (oldHealth.getMaNV())) {
                if (repo.getByMaNV(newHealth.getMaNV().getId()) != null) {
                    return repo.save(newHealth);
                } else {
                    return null;
                }
            }
            return repo.save(newHealth);
        }
        // add
        else {
            if (repo.getByMaNV(newHealth.getMaNV().getId()) == null) {
                return repo.save(newHealth);
            } else {
                return null;
            }
        }
    }

    public Health getNewHealth(CreateUpdateHealthRequest request){
        try {
            Health h = new Health();
            h.setId(request.getId());
            h.setMaNV(employeeRepository.findById(request.getMaNV()).get());
            h.setNhomMau(request.getNhomMau());
            h.setChieuCao(request.getChieuCao());
            h.setCanNang(request.getCanNang());
            h.setTinhTrangSucKhoe(request.getTinhTrangSucKhoe());
            h.setBenhNen(request.getBenhNen());
            h.setLuuY(request.getLuuY());
            h.setKhuyetTat(request.getKhuyetTat());
            return h;
        } catch (Exception e){
            return null;
        }
    }
}
