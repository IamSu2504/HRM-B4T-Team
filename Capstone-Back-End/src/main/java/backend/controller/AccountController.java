package backend.controller;

import backend.entity.Account;
import backend.entity.CreateUpdateAccountRequest;
import backend.entity.LoginRequest;
import backend.entity.Employee;
import backend.service.AccountService;
import backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.util.List;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

@RestController
@RequestMapping(value = "/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private EmployeeService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            if (!accountService.checkUsernameExisted(request.getUsername())) {
                return new ResponseEntity<>("Username not existed", HttpStatus.NOT_FOUND);
            }
            Account account = accountService.getLoginAccount(request);
            if (account != null) {
                return new ResponseEntity<>(account, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Wrong username or password", HttpStatus.EXPECTATION_FAILED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Account> list = accountService.getAll();
            if (list.isEmpty()) {
                return new ResponseEntity<>("No account was created", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/empID-create")
    public ResponseEntity<?> getNotCreatedEmpIDs() {
        try {
            List<String> list = accountService.getNotCreatedEmpIDs();
            if (list.isEmpty()) {
                return new ResponseEntity<>("No employee needs to create account at the present", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Account a = accountService.getById(id);
            if (a == null) {
                return new ResponseEntity<>("Account not existed", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateAccountRequest request) {
        try {
            String message = accountService.getSaveMessage(request);
            if (message == null) {
                return new ResponseEntity("Create account successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateAccountRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            String message = accountService.getSaveMessage(request);
            if (message == null) {
                return new ResponseEntity("Update account successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}/changePassword")
    public ResponseEntity<?> changePassword(@PathVariable("id") String pv, @RequestBody String pass) {
        try {
            int id = Integer.parseInt(pv);
            Account a = accountService.changePassword(id, pass);
            if (a != null) {
                return new ResponseEntity("Change password successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Change password failed", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/forgot")
    public ResponseEntity<?> forgotPassword(@RequestBody String[] toEmail) {
        try {
            Employee u = userService.getByEmail(toEmail[0]);
            if (u == null) {
                return new ResponseEntity<>("Email not existed in the system", HttpStatus.NOT_FOUND);
            }
            if(accountService.getByMaNv(u.getId())==null){
                return new ResponseEntity<>("No account created with this email", HttpStatus.NOT_FOUND);
            }
            Account forgotAccount = accountService.getByMaNv(u.getId());
            final String fromEmail = "tinlnhe130825@fpt.edu.vn";
            final String fromEmailPassword = "ztewp626";
//          final String fromEmail = "speaklxss2001@gmail.com";
//          final String fromEmailPassword = "Speakless2000";
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH");
            String encryptedStr = accountService.getEncryptedString(forgotAccount.getId()+sdf.format(new Date()));
            final String url = "http://localhost:3000/account/" + encryptedStr + "/forgot";
            final String subject = "Forgot password";
            final String body = "Click this link to change password: " + url + "";

            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
            props.put("mail.smtp.port", "587"); //TLS Port
            props.put("mail.smtp.auth", "true"); //enable authentication
            props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS

            // authenticate email
            Authenticator auth = new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, fromEmailPassword);
                }
            };

            Session session = Session.getInstance(props, auth);
            MimeMessage msg = new MimeMessage(session);

            //set message headers
            msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
            msg.addHeader("format", "flowed");
            msg.addHeader("Content-Transfer-Encoding", "8bit");
            msg.setFrom(new InternetAddress(fromEmail, "Admin"));
            msg.setReplyTo(InternetAddress.parse(fromEmail, false));
            msg.setSubject(subject, "UTF-8");
            msg.setText(body, "UTF-8");
            msg.setSentDate(new Date());
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail[0], false));
            Transport.send(msg);
            String successMess = "Please check email " + toEmail[0] + " to change password";
            return new ResponseEntity<>(successMess, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}/forgot")
    public ResponseEntity<?> getForgotAccount(@PathVariable("id") String encryptedStr) {
        try {
            Account forgotAccount = accountService.getForgotAccount(encryptedStr);
            if (forgotAccount == null) {
                return new ResponseEntity("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
            } else {
                return new ResponseEntity<>(forgotAccount, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
