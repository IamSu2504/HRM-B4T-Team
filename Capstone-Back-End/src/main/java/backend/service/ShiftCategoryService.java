package backend.service;


import backend.entity.CreateUpdateShiftCategoryRequest;
import backend.entity.ShiftCategory;
import backend.entity.TaxCategory;
import backend.repository.ShiftCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class ShiftCategoryService {

    @Autowired
    private ShiftCategoryRepository repo;

    public List<ShiftCategory> getAll(){
        return repo.findAll();
    }

    public ShiftCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public ShiftCategory save(CreateUpdateShiftCategoryRequest request)
    {
        try {
            if (repo.getByTenCaLam(request.getTenCa()) == null) {
                SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
                ShiftCategory c = new ShiftCategory();
                if(request.getId()!=0){
                    c.setId(request.getId());
                }
                c.setTenCa(request.getTenCa());
                c.setGioBatDau(sdf.parse(request.getGioBatDau()));
                c.setGioKetThuc(sdf.parse(request.getGioKetThuc()));
                return repo.save(c);
            } else {
                return null;
            }
        }catch (Exception e){
            return null;
        }
    }

    public void delete(int id){
        repo.deleteById(id);
    };
}
