package backend.service;

import backend.entity.HolidayCategory;
import backend.repository.HolidayCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HolidayCategoryService {
    @Autowired
    private HolidayCategoryRepository repo;

    public List<HolidayCategory> getAll(){
        return repo.findAll();
    }

    public HolidayCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public HolidayCategory save(HolidayCategory holidayCategory)
    {
        if(repo.getByTenNgayLe(holidayCategory.getTenNgayLe())==null){
            return repo.save(holidayCategory);
        }
        else{
            return null;
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    }
}
