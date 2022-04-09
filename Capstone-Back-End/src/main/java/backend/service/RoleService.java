package backend.service;

import backend.entity.Role;
import backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepo;

    public List<Role> getAll(){
        return roleRepo.findAll();
    }

}

