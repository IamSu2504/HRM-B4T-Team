package backend.service;

import backend.entity.DayOffCategory;
import backend.repository.DayOffCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayOffCategoryService {
    @Autowired
    private DayOffCategoryRepository repository;

    public List<DayOffCategory> getAll(){
        return repository.findAll();
    }

    public DayOffCategory create(DayOffCategory dayOffCategory){
        dayOffCategory.setId(repository.getLastID()+1);
        return repository.save(dayOffCategory);
    };

    public DayOffCategory update(DayOffCategory dayOffCategory)
    {
        return repository.save(dayOffCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
