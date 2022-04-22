package backend.service;

import backend.entity.User;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User getById(String id) {
        if (userRepo.findById(id.toUpperCase()).isPresent())
            return userRepo.findById(id.toUpperCase()).get();
        else
            return null;
    }

    public String getUpdateUserMessage(User newUser) {
        if(!userRepo.findById(newUser.getId().toUpperCase()).isPresent()){
            return "Người dùng không tồn tại";
        }
        User oldUser = userRepo.findById(newUser.getId().toUpperCase()).get();

        if (!oldUser.getId().equalsIgnoreCase(newUser.getId()) && userRepo.findById(newUser.getId()).isPresent()) {
            return "Mã nhân viên đã tồn tại";
        } else if (!oldUser.getSoDienThoai().equalsIgnoreCase(newUser.getSoDienThoai()) && userRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Số điện thoại đã tồn tại";
        } else if (!oldUser.getEmail().equalsIgnoreCase(newUser.getEmail()) && userRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email đã tồn tại";
        } else if (!oldUser.getSoAtm().equalsIgnoreCase(newUser.getSoAtm()) && userRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "Số ATM đã tồn tại";
        } else if (!oldUser.getCccd().equalsIgnoreCase(newUser.getCccd()) && userRepo.getByCccd(newUser.getCccd()) != null) {
            return "Số căn cước công dân đã tồn tại";
        } else if (!oldUser.getHoChieu().equalsIgnoreCase(newUser.getHoChieu()) && newUser.getHoChieu() != null && userRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Số hộ chiếu đã tồn tại";
        }
        newUser.setImage(oldUser.getImage());
        userRepo.save(newUser);
        return null;

    }

    public String getCreateUserMessage(User newUser) {

        if (userRepo.findById(newUser.getId()).isPresent()) {
            return "Mã nhân viên đã tồn tại";
        } else if (userRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Số điện thoại đã tồn tại";
        } else if (userRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email đã tồn tại";
        } else if (userRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "Số ATM đã tồn tại";
        } else if (newUser.getCccd() != null && userRepo.getByCccd(newUser.getCccd()) != null) {
            return "Số căn cước công dân đã tồn tại";
        } else if (newUser.getHoChieu() != null && userRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Số hộ chiếu đã tồn tại";
        }
        newUser.setImage("default.jpg");
        userRepo.save(newUser);
        return null;

    }

    public User getByEmail(String mail) {
        return userRepo.getByEmail(mail);
    }

}

