package backend.service;

import backend.entity.CreateUserRequest;
import backend.entity.LoginRequest;
import backend.entity.User;
import backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User getLoginUser(LoginRequest loginRequest){
        String usernameInput = loginRequest.getUsername();
        String EncryptedPasswordInput = getEncryptedPassword(loginRequest.getPassword());
        return repo.getLoginUser(usernameInput,EncryptedPasswordInput);
    }

//    public boolean createUser(CreateUserRequest request){
//        try {
//            if(repo.getById(request.getId())==null){
//                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
//                User u = new User();
//                u.setId(request.getId());
//                u.setNgaySinh(sdf.parse(request.getNgaySinh()));
//                u.setCccd(request.getCccd());
//                u.setAtmNganHang(request.getAtmNganHang());
//                u.setChucVuHienTai(request.getChucVuHienTai());
//                u.setDiaChiTamTru(request.getDiaChiTamTru());
//                u.setEmail(request.getEmail());
//                u.setFacebook(request.getFacebook());
//                u.setGioiTinh(request.isGioiTinh());
//                u.setImage(request.getImage());
//                u.setHoChieu(request.getHoChieu());
//                u.setLyDoNghi(request.getLyDoNghi());
//
//                u.setNgayCapCccd(sdf.parse(request.getNgayCapCccd()));
//                u.setNgayHetHanCccd(sdf.parse(request.getNgayHetHanCccd()));
//                u.setNgayCapHoChieu(sdf.parse(request.getNgayCapHoChieu()));
//                u.setNgayHetHanHoChieu(sdf.parse(request.getNgayHetHanHoChieu()));
//
//
//                return true;
//            }
//            else{
//                return false;
//            }
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//    }

    public List<User> getAll(){
        return repo.findAll();
    }

    public String getEncryptedPassword(String pass){
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(pass.getBytes());
            byte[] digest = md.digest();
            String result = DatatypeConverter
                    .printHexBinary(digest).toUpperCase();
            return result;
        }catch(Exception e){
            return null;
        }
    }

}
