package backend.controller;

import backend.entity.Account;
import backend.entity.CreateUpdateAccountRequest;
import backend.entity.LoginRequest;
import backend.entity.User;
import backend.service.AccountService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            if (!accountService.checkUsernameExisted(request.getUsername())) {
                return new ResponseEntity<>("Tên đăng nhập không tồn tại", HttpStatus.NOT_FOUND);
            }
            Account account = accountService.getLoginAccount(request);
            if (account != null) {
                return new ResponseEntity<>(account, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Sai tên đăng nhập hoặc mật khẩu", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<Account> list = accountService.getAll();
            if (list.isEmpty()) {
                return new ResponseEntity<>("Chưa có tài khoản được tạo", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            Account a = accountService.getById(id);
            if (a == null) {
                return new ResponseEntity<>("Tài khoản không tồn tại", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CreateUpdateAccountRequest request) {
        try {
            String message = accountService.getSaveMessage(request);
            if (message == null) {
                return new ResponseEntity("Tạo tài khoản thành công", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CreateUpdateAccountRequest request) {
        try {
            int id = Integer.parseInt(pv);
            request.setId(id);
            String message = accountService.getSaveMessage(request);
            if (message == null) {
                return new ResponseEntity("Cập nhật tài khoản thành công", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}/changePassword")
    public ResponseEntity<?> changePassword(@PathVariable("id") String pv, @RequestBody String pass) {
        try {
            int id = Integer.parseInt(pv);
            Account a = accountService.changePassword(id, pass);
            if (a != null) {
                return new ResponseEntity("Đổi mật khẩu thành công", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Đổi mật khẩu không thành công", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/forgot")
    public ResponseEntity<?> forgotPassword(@RequestBody String toEmail) {
        try {
            User u = userService.getByEmail(toEmail);
            if(u==null){
                return new ResponseEntity<>("Email này chưa được đăng kí", HttpStatus.NOT_FOUND);
            }
            Account forgotAccount = accountService.getByMaNv(u.getId());
            final String fromEmail = "speaklxss2001@gmail.com";
            final String fromEmailPassword = "Speakless2000";
            String encryptedAccountID = accountService.getEncryptedString(forgotAccount.getId()+"");
            final String url = "http://localhost:3000/account/"+encryptedAccountID+"/forgot";
            final String subject = "Yêu cầu đổi mật khẩu";
            final String body = "Nhấn vào đường dẫn sau để đổi mật khẩu: " + url;

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
            msg.setFrom(new InternetAddress(fromEmail,"Admin"));
            msg.setReplyTo(InternetAddress.parse(fromEmail, false));
            msg.setSubject(subject, "UTF-8");
            msg.setText(body, "UTF-8");
            msg.setSentDate(new Date());
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail, false));
            Transport.send(msg);

            String successMess = "Yêu cầu đổi mật khẩu đã được gửi. Vui lòng kiểm tra email " + toEmail;
            return new ResponseEntity<>(successMess, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}/forgot")
    public ResponseEntity<?> getForgotAccountID(@PathVariable("id") String encryptedID) {
        try {
            int forgotAccountID = accountService.getForgotAccountID(encryptedID);
            if (forgotAccountID==0) {
                return new ResponseEntity("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
            } else {
                return new ResponseEntity<>(forgotAccountID, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Lỗi nội bộ", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
