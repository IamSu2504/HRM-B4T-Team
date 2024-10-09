package backend.service;


import backend.entity.RoomCategory;
import backend.repository.RoomCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomCategoryService {
    @Autowired
    private RoomCategoryRepository repo;

    public List<RoomCategory> getAll(){
        return repo.findAll();
    }

    public RoomCategory getById(int id)
    {
        if(repo.findById(id).isPresent()){
            return repo.findById(id).get();
        }
        else{
            return null;
        }
    }

    public RoomCategory save(RoomCategory newCategory)
    {
        // update
        if(newCategory.getId()!=null){
            RoomCategory oldCategory = repo.findById(newCategory.getId()).get();
            if(!newCategory.getMaPhongHoc().equalsIgnoreCase(oldCategory.getMaPhongHoc())){
                if(repo.getByMaPhongHoc(newCategory.getMaPhongHoc())==null){
                    return repo.save(newCategory);
                }
                else{
                    return null;
                }
            }
            return repo.save(newCategory);
        }
        // add
        else{
            if(repo.getByMaPhongHoc(newCategory.getMaPhongHoc())==null){
                return repo.save(newCategory);
            }
            else{
                return null;
            }
        }
    }
    public void delete(int id){
        repo.deleteById(id);
    };
}
