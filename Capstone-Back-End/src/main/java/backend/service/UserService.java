package backend.service;

import backend.entity.CreateUpdateUserRequest;
import backend.entity.User;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private MarriageCategoryRepository marriageRepo;

    @Autowired
    private ContractNatureCategoryRepository contractRepo;

    @Autowired
    private PositionCategoryRepository positionRepo;

    @Autowired
    private NationCategoryRepository nationRepo;

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User getById(String id) {
        if (userRepo.findById(id.toUpperCase()).isPresent())
            return userRepo.findById(id.toUpperCase()).get();
        else
            return null;
    }

    public String getUpdateUserMessage(CreateUpdateUserRequest request) {
        if(!userRepo.findById(request.getId().toUpperCase()).isPresent()){
            return "User isn't existed";
        }
        User oldUser = userRepo.findById(request.getId().toUpperCase()).get();
        User newUser = getNewUser(request);

        if (newUser == null)
            return "Wrong date format (dd/MM/yyyy)";
        if (!oldUser.getId().equalsIgnoreCase(newUser.getId()) && userRepo.findById(newUser.getId()).isPresent()) {
            return "User ID existed";
        } else if (!oldUser.getSoDienThoai().equalsIgnoreCase(newUser.getSoDienThoai()) && userRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Phone number existed";
        } else if (!oldUser.getEmail().equalsIgnoreCase(newUser.getEmail()) && userRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email existed";
        } else if (!oldUser.getSoAtm().equalsIgnoreCase(newUser.getSoAtm()) && userRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "ATM number existed";
        } else if (!oldUser.getCccd().equalsIgnoreCase(newUser.getCccd()) && userRepo.getByCccd(newUser.getCccd()) != null) {
            return "Citizen ID Number existed";
        } else if (!oldUser.getHoChieu().equalsIgnoreCase(newUser.getHoChieu()) && newUser.getHoChieu() != null && userRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Passport number existed";
        }
        userRepo.save(newUser);
        return null;

    }

    public String getCreateUserMessage(CreateUpdateUserRequest request) {

        User newUser = getNewUser(request);
        if (userRepo.findById(newUser.getId()).isPresent()) {
            return "User ID existed";
        } else if (userRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Phone number existed";
        } else if (userRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email existed";
        } else if (userRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "ATM number existed";
        } else if (newUser.getCccd() != null && userRepo.getByCccd(newUser.getCccd()) != null) {
            return "Citizen ID Number existed";
        } else if (newUser.getHoChieu() != null && userRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Passport number existed";
        }
        userRepo.save(newUser);
        return null;

    }

    public User getNewUser(CreateUpdateUserRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            User newUser = new User();
            String upperCaseID = request.getId().toUpperCase();

            if (request.getQuocTichID() != 0)
                newUser.setQuocTich(nationRepo.getById(request.getQuocTichID()));
            if (request.getChucVuID() != 0)
                newUser.setChucVu(positionRepo.getById(request.getChucVuID()));
            if (request.getTinhChatHopDongID() != 0)
                newUser.setTinhChatHopDong(contractRepo.getById(request.getTinhChatHopDongID()));
            if (request.getTinhTrangHonNhanID() != 0)
                newUser.setTinhTrangHonNhan(marriageRepo.getById(request.getTinhTrangHonNhanID()));

            newUser.setId(upperCaseID);
            newUser.setTenNv(request.getTenNv());
            newUser.setGioiTinh(request.isGioiTinh());
            newUser.setSoDienThoai(request.getSoDienThoai());
            newUser.setEmail(request.getEmail());
            newUser.setCccd(request.getCccd());
            newUser.setQueQuan(request.getQueQuan());
            newUser.setDiaChiThuongTru(request.getDiaChiThuongTru());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setAtmNganHang(request.getAtmNganHang());
            newUser.setSoAtm(request.getSoAtm());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setEmail(request.getEmail());
            newUser.setGioiTinh(request.isGioiTinh());
            newUser.setEmail(request.getEmail());
            newUser.setImage(request.getImage());
            newUser.setHoChieu(request.getHoChieu());
            newUser.setLyDoNghi(request.getLyDoNghi());
            newUser.setNoiCapCccd(request.getNoiCapCccd());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setNoiSinh(request.getNoiSinh());

            if (request.getNgayBatDauLam() != null)
                newUser.setNgayBatDauLam(sdf.parse(request.getNgayBatDauLam()));
            if (request.getNgaySinh() != null)
                newUser.setNgaySinh(sdf.parse(request.getNgaySinh()));
            if (request.getNgayCapCccd() != null)
                newUser.setNgayCapCccd(sdf.parse(request.getNgayCapCccd()));
            if (request.getNgayHetHanCccd() != null)
                newUser.setNgayHetHanCccd(sdf.parse(request.getNgayHetHanCccd()));
            if (request.getNgayCapHoChieu() != null)
                newUser.setNgayCapHoChieu(sdf.parse(request.getNgayCapHoChieu()));
            if (request.getNgayHetHanHoChieu() != null)
                newUser.setNgayHetHanHoChieu(sdf.parse(request.getNgayHetHanHoChieu()));
            if (request.getNgayNghiViec() != null)
                newUser.setNgayNghiViec(sdf.parse(request.getNgayNghiViec()));
            return newUser;
        } catch (Exception e) {
            return null;
        }
    }

    public User getByEmail(String mail) {
        return userRepo.getByEmail(mail);
    }
}

