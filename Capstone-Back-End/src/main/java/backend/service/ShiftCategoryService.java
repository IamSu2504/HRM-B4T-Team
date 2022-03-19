package backend.service;


import backend.entity.ShiftCategory;
import backend.repository.ShiftCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftCategoryService {
    @Autowired
    private ShiftCategoryRepository repository;

    public List<ShiftCategory> getAll(){
        return repository.findAll();
    }

    public ShiftCategory create(ShiftCategory shiftCategory){
        shiftCategory.setId(repository.getLastID()+1);
        return repository.save(shiftCategory);
    };

    public ShiftCategory update(ShiftCategory shiftCategory)
    {
        return repository.save(shiftCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
