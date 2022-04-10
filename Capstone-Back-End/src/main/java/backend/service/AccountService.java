package backend.service;

import backend.entity.Account;
import backend.entity.CreateUpdateAccountRequest;
import backend.entity.LoginRequest;
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
    private RoleRepository roleRepo;

    public Account getLoginAccount(LoginRequest loginRequest) {
        String usernameInput = loginRequest.getUsername();
        String EncryptedPasswordInput = getEncryptedPassword(loginRequest.getPassword());
        return accountRepo.getLoginAccount(usernameInput, EncryptedPasswordInput);
    }

    public Account getById(int id) {
        return accountRepo.findById(id).get();
    }

    public boolean checkUsernameExisted(String username){
        if(accountRepo.getByUsername(username)==null){
            return false;
        }
        return true;
    }

    public String getSaveMessage(CreateUpdateAccountRequest request) {
        if (accountRepo.getByUsername(request.getUsername()) != null) {
            return "Tên đăng nhập đã tồn tại";
        }
        else if (accountRepo.getByMaNv(request.getMaNv()) != null) {
            return "Mã nhân viên đã tồn tại";
        }
        else {
            Account newAccount = new Account();
            newAccount.setId(request.getId());
            newAccount.setUsername(request.getUsername());
            newAccount.setPassword(request.getPassword());
            newAccount.setMaNv(request.getMaNv());
            newAccount.setRole(roleRepo.findById(request.getRoleID()).get());
            accountRepo.save(newAccount);
            return null;
        }
    }

    public List<Account> getAll() {
        return accountRepo.findAll();
    }

    public void delete(int id){
        accountRepo.deleteById(id);
    }

    public String getEncryptedPassword(String pass) {
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

