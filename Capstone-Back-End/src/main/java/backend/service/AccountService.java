package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepo;

    @Autowired
    private EmployeeRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    public Account getLoginAccount(LoginRequest loginRequest) {
        String usernameInput = loginRequest.getUsername();
        String EncryptedPasswordInput = getEncryptedString(loginRequest.getPassword());
        return accountRepo.getLoginAccount(usernameInput, EncryptedPasswordInput);
    }

    public List<String> getNotCreatedEmpIDs() {
        return accountRepo.getNotCreatedEmpID();
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
                return "Username existed";
            } else if (accountRepo.getByMaNv(request.getMaNv().toUpperCase()) != null) {
                return "Employee ID existed";
            } else if (userRepo.findById(request.getMaNv().toUpperCase()) == null) {
                return "No employee created with this email";
            } else {
                accountRepo.save(newAccount);
                return null;
            }
        }
        // Edit
        else {
            Account oldAccount = accountRepo.findById(request.getId()).get();
            if (!oldAccount.getUsername().equalsIgnoreCase(newAccount.getUsername()) && accountRepo.getByUsername(request.getUsername()) != null) {
                return "Username existed";
            } else if (!oldAccount.getMaNv().equalsIgnoreCase(newAccount.getMaNv()) && accountRepo.getByMaNv(request.getMaNv().toUpperCase()) != null) {
                return "Employee ID existed";
            } else if (!userRepo.findById(request.getMaNv().toUpperCase()).isPresent()) {
                return "No employee created with this email";
            } else {
                accountRepo.save(newAccount);
                return null;
            }
        }

    }

    public List<Account> getAll() {
        return accountRepo.getAll();
    }

    public void delete(int id) {
        accountRepo.deleteById(id);
    }

    public Account getByMaNv(String maNv) {
        return accountRepo.getByMaNv(maNv);
    }

    public Account getForgotAccount(String encryptedStr) {
        int lastAccountID = accountRepo.getLastID();
        String dateFormat = new SimpleDateFormat("dd/MM/yyyy HH").format(new Date());
        for (int i = 1; i < lastAccountID; i++) {
            if (getEncryptedString(i + dateFormat).equals(encryptedStr)) {
                if(accountRepo.findById(i).isPresent()){
                    return accountRepo.findById(i).get();
                }
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

