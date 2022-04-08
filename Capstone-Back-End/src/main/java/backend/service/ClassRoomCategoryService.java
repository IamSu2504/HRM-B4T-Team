package backend.service;


import backend.entity.ClassRoomCategory;
import backend.repository.ClassRoomCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassRoomCategoryService {
    @Autowired
    private ClassRoomCategoryRepository repo;

    public List<ClassRoomCategory> getAll(){
        return repo.findAll();
    }

    public ClassRoomCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public ClassRoomCategory save(ClassRoomCategory classRoomCategory)
    {
        if(repo.getByMaPhongHoc(classRoomCategory.getMaPhongHoc())==null){
            return repo.save(classRoomCategory);
        }
        else{
            return null;
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    };
}
