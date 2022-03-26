package backend.service;


import backend.entity.HolidayCategory;
import backend.repository.HolidayCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HolidayCategoryService {
    @Autowired
    private HolidayCategoryRepository repository;

    public List<HolidayCategory> getAll(){
        return repository.findAll();
    }

    public HolidayCategory create(HolidayCategory holidayCategory){
        holidayCategory.setId(repository.getLastID()+1);
        return repository.save(holidayCategory);
    }

    public HolidayCategory update(HolidayCategory holidayCategory){
        return repository.save(holidayCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    }
}
