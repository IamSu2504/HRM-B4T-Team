package backend.service;


import backend.entity.ClassRoomCategory;
import backend.repository.ClassRoomCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassRoomCategoryService {
    @Autowired
    private ClassRoomCategoryRepository repository;

    public List<ClassRoomCategory> getAll(){
        return repository.findAll();
    }

    public ClassRoomCategory create(ClassRoomCategory classRoomCategory){
        classRoomCategory.setId(repository.getLastID()+1);
        return repository.save(classRoomCategory);
    };

    public ClassRoomCategory update(ClassRoomCategory classRoomCategory)
    {
        return repository.save(classRoomCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
