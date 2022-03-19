package backend.service;

import backend.entity.PositionCategory;
import backend.repository.PositionCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionCategoryService {

    @Autowired
    private PositionCategoryRepository repository;

    public List<PositionCategory> getAll(){
        return repository.findAll();
    }

    public PositionCategory create(PositionCategory positionCategory){
        positionCategory.setId(repository.getLastID()+1);
        return repository.save(positionCategory);
    }

    public PositionCategory update(PositionCategory positionCategory){
        return repository.save(positionCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    }
}
