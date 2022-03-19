package backend.service;


import backend.entity.DepartmentCategory;
import backend.repository.DepartmentCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentCategoryService {
    @Autowired
    private DepartmentCategoryRepository repository;

    public List<DepartmentCategory> getAll(){
        return repository.findAll();
    }

    public DepartmentCategory create(DepartmentCategory departmentCategory){
        departmentCategory.setId(repository.getLastID()+1);
        return repository.save(departmentCategory);
    };

    public DepartmentCategory update(DepartmentCategory departmentCategory)
    {
        return repository.save(departmentCategory);
    }

    public void delete(int id){
        repository.deleteById(id);
    };
}
