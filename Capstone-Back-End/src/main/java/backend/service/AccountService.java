package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    public Account getLoginAccount(LoginRequest loginRequest) {
        String usernameInput = loginRequest.getUsername();
        String EncryptedPasswordInput = getEncryptedString(loginRequest.getPassword());
        return accountRepo.getLoginAccount(usernameInput, EncryptedPasswordInput);
    }

    public Account getById(int id) {
        if (accountRepo.findById(id).isPresent())
            return accountRepo.findById(id).get();
        else
            return null;
    }

    public boolean checkUsernameExisted(String username) {
        if (accountRepo.getByUsername(username) == null) {
            return false;
        }
        return true;
    }

    public Account changePassword(int id, String newPassword) {
        if(!accountRepo.findById(id).isPresent()){
            return null;
        }
        Account a = accountRepo.findById(id).get();
        a.setPassword(getEncryptedString(newPassword));
        return accountRepo.save(a);
    }

    public String getSaveMessage(CreateUpdateAccountRequest request) {
        Account newAccount = new Account();
        newAccount.setId(request.getId());
        newAccount.setUsername(request.getUsername());
        newAccount.setPassword(getEncryptedString(request.getPassword()));
        newAccount.setMaNv(request.getMaNv().toUpperCase());
        newAccount.setRole(roleRepo.findById(request.getRoleID()).get());

        // Add
        if (request.getId() == null) {
            if (accountRepo.getByUsername(request.getUsername()) != null) {
                return "Tên đăng nhập đã được sử dụng";
            } else if (accountRepo.getByMaNv(request.getMaNv().toUpperCase()) != null) {
                return "Mã nhân viên đã được sử dụng";
            } else if (userRepo.findById(request.getMaNv().toUpperCase()) == null) {
                return "Chưa có người dùng được tạo với mã nhân viên này";
            } else {
                accountRepo.save(newAccount);
                return null;
            }
        }
        // Edit
        else {
            Account oldAccount = accountRepo.findById(request.getId()).get();
            if (!oldAccount.getUsername().equalsIgnoreCase(newAccount.getUsername()) && accountRepo.getByUsername(request.getUsername()) != null) {
                return "Tên đăng nhập đã được sử dụng";
            } else if (!oldAccount.getMaNv().equalsIgnoreCase(newAccount.getMaNv()) && accountRepo.getByMaNv(request.getMaNv().toUpperCase()) != null) {
                return "Mã nhân viên đã được sử dụng";
            } else if (!userRepo.findById(request.getMaNv().toUpperCase()).isPresent()) {
                return "Chưa có người dùng được tạo với mã nhân viên này";
            } else {
                accountRepo.save(newAccount);
                return null;
            }
        }

    }

    public List<Account> getAll() {
        return accountRepo.findAll();
    }

    public void delete(int id) {
        accountRepo.deleteById(id);
    }

    public Account getByMaNv(String maNv) {
        return accountRepo.getByMaNv(maNv);
    }

    public Account getForgotAccount(String encryptedID) {
        int lastID = accountRepo.getLastID();
        for (int i = 1; i < lastID; i++) {
            if (getEncryptedString(i + "").equals(encryptedID)) {
                return accountRepo.findById(i).get();
            }
        }
        return null;
    }

    public String getEncryptedString(String pass) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(pass.getBytes());
            byte[] digest = md.digest();
            String result = DatatypeConverter.printHexBinary(digest).toUpperCase();
            return result;
        } catch (Exception e) {
            return null;
        }
    }
}

