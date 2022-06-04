package backend.service;

import backend.entity.CreateUpdateUserRequest;
import backend.entity.Employee;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private MarriageCategoryRepository marriageRepo;

    @Autowired
    private ContractNatureCategoryRepository contractRepo;

    @Autowired
    private NationCategoryRepository nationRepo;

    public List<Employee> getAll() {
        return employeeRepo.findAll();
    }

    public String getNewID() {
        String lastID = employeeRepo.getLastID();
        String newID = "NV";
        for (int i = 1; i <= 4 - String.valueOf(Integer.parseInt(lastID.substring(2, lastID.length())) + 1).length(); i++) {
            newID += '0';
        }
        newID += String.valueOf(Integer.parseInt(lastID.substring(2, lastID.length())) + 1);
        return newID;
    }

    public List<Employee> getSearched(String text) {
        return employeeRepo.getSearched(text);
    }

    public Employee getById(String id) {
        if (employeeRepo.findById(id.toUpperCase()).isPresent())
            return employeeRepo.findById(id.toUpperCase()).get();
        else
            return null;
    }

    public String getUpdateUserMessage(CreateUpdateUserRequest request) {
        if (!employeeRepo.findById(request.getId().toUpperCase()).isPresent()) {
            return "Employee not existed";
        }

        Employee oldUser = employeeRepo.findById(request.getId().toUpperCase()).get();
        Employee newUser = getNewUser(request);

        if (oldUser.getNgayNghiViec() != null && newUser.getNgayNghiViec() != null && oldUser.getNgayNghiViec().before(new Date())) {
            return "Employee with ID " + oldUser.getId() + " leaved. Update fail";
        }

        if (newUser.getSoDienThoai() != null) {
            try {
                String sdt = newUser.getSoDienThoai();
                Integer.parseInt(sdt);
                if (sdt.length() != 10) {
                    return "Phone number must be a number with 10 characters";
                }
            } catch (Exception e) {
                return "Phone number must be a number with 10 characters";
            }
        }
        if (newUser.getSoDienThoai2() != null) {
            try {
                String sdt = newUser.getSoDienThoai2();
                Integer.parseInt(sdt);
                if (sdt.length() != 10) {
                    return "Phone number 2 must be a number with 10 characters";
                }
            } catch (Exception e) {
                return "Phone number 2 must be a number with 10 characters";
            }
        }
        if (newUser.getHoChieu() != null) {
            String hc = newUser.getHoChieu();
            if (hc.length() != 8) {
                return "Passport must have 8 characters";
            }
            char[] chars = hc.toCharArray();
            for (int i = 0; i < chars.length; i++) {
                char c = chars[i];
                if (i == 0) {
                    if (!Character.isAlphabetic(c)) {
                        return "Passport must have the first character as alphabet";
                    }
                } else {
                    if (!Character.isDigit(c)) {
                        return "Passport must have characters after the first one as digit";
                    }
                }
            }
        }

        if (newUser == null)
            return "Error retriving employee data";
        if (!oldUser.getId().equalsIgnoreCase(newUser.getId()) && employeeRepo.findById(newUser.getId()).isPresent()) {
            return "Employee ID existed";
        } else if (!oldUser.getSoDienThoai().equalsIgnoreCase(newUser.getSoDienThoai()) && employeeRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Phone number existed";
        } else if (!oldUser.getEmail().equalsIgnoreCase(newUser.getEmail()) && employeeRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email existed";
        } else if (!oldUser.getSoAtm().equalsIgnoreCase(newUser.getSoAtm()) && employeeRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "ATM number existed";
        } else if (!oldUser.getCccd().equalsIgnoreCase(newUser.getCccd()) && employeeRepo.getByCccd(newUser.getCccd()) != null) {
            return "Citizen ID existed";
        } else if (newUser.getHoChieu() != null && (oldUser.getHoChieu() != null && !oldUser.getHoChieu().equalsIgnoreCase(newUser.getHoChieu())) && employeeRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Passport number existed";
        }

        newUser.setImage(oldUser.getImage());
        employeeRepo.save(newUser);
        return null;
    }

    public String getCreateUserMessage(CreateUpdateUserRequest request) {

        Employee newUser = getNewUser(request);
        newUser.setNgayNghiViec(null);
        newUser.setLyDoNghi(null);
        newUser.setId(newUser.getId().toUpperCase());

        if (employeeRepo.findById(newUser.getId()).isPresent()) {
            return "Employee ID existed";
        } else if (employeeRepo.getBySdt(newUser.getSoDienThoai()) != null) {
            return "Phone number existed";
        } else if (employeeRepo.getByEmail(newUser.getEmail()) != null) {
            return "Email existed";
        } else if (employeeRepo.getBySoAtm(newUser.getSoAtm()) != null) {
            return "ATM number existed";
        } else if (newUser.getCccd() != null && employeeRepo.getByCccd(newUser.getCccd()) != null) {
            return "Citizen ID existed";
        } else if (newUser.getHoChieu() != null && employeeRepo.getByHoChieu(newUser.getHoChieu()) != null) {
            return "Passport number existed";
        }

        newUser.setImage("default.jpg");
        employeeRepo.save(newUser);
        return null;
    }

    public Employee getNewUser(CreateUpdateUserRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Employee newUser = new Employee();
            String upperCaseID = request.getId().toUpperCase();

            if (request.getQuocTichID() != 0)
                newUser.setQuocTich(nationRepo.findById(request.getQuocTichID()).get());
            if (request.getTinhChatHopDongID() != 0)
                newUser.setTinhChatHopDong(contractRepo.findById(request.getTinhChatHopDongID()).get());
            if (request.getTinhTrangHonNhanID() != 0)
                newUser.setTinhTrangHonNhan(marriageRepo.findById(request.getTinhTrangHonNhanID()).get());

            newUser.setId(upperCaseID);
            newUser.setTenNv(request.getTenNv());
            newUser.setGioiTinh(request.isGioiTinh());
            newUser.setSoDienThoai(request.getSoDienThoai());
            if (request.getSoDienThoai2() != null && !request.getSoDienThoai2().equals(""))
                newUser.setSoDienThoai2(request.getSoDienThoai2());
            newUser.setEmail(request.getEmail());
            if (request.getCccd() != null && !request.getCccd().equals(""))
                newUser.setCccd(request.getCccd());
            newUser.setQueQuan(request.getQueQuan());
            newUser.setDiaChiThuongTru(request.getDiaChiThuongTru());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setAtmNganHang(request.getAtmNganHang());
            newUser.setSoAtm(request.getSoAtm());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setGioiTinh(request.isGioiTinh());
            newUser.setEmail(request.getEmail());
            if (request.getHoChieu() != null && !request.getHoChieu().equals(""))
                newUser.setHoChieu(request.getHoChieu());
            if (request.getNoiCapHoChieu() != null && !request.getNoiCapHoChieu().equals(""))
                newUser.setNoiCapHoChieu(request.getNoiCapHoChieu());
            newUser.setLyDoNghi(request.getLyDoNghi());
            if (request.getNoiCapCccd() != null && !request.getNoiCapCccd().equals(""))
                newUser.setNoiCapCccd(request.getNoiCapCccd());
            newUser.setDiaChiTamTru(request.getDiaChiTamTru());
            newUser.setNoiSinh(request.getNoiSinh());

            if (request.getNgayBatDauLam() != null && !request.getNgayBatDauLam().equals(""))
                newUser.setNgayBatDauLam(sdf.parse(request.getNgayBatDauLam()));
            if (request.getNgaySinh() != null && !request.getNgaySinh().equals(""))
                newUser.setNgaySinh(sdf.parse(request.getNgaySinh()));
            if (request.getNgayCapCccd() != null && !request.getNgayCapCccd().equals(""))
                newUser.setNgayCapCccd(sdf.parse(request.getNgayCapCccd()));
            if (request.getNgayHetHanCccd() != null && !request.getNgayHetHanCccd().equals(""))
                newUser.setNgayHetHanCccd(sdf.parse(request.getNgayHetHanCccd()));
            if (request.getNgayCapHoChieu() != null && !request.getNgayCapHoChieu().equals(""))
                newUser.setNgayCapHoChieu(sdf.parse(request.getNgayCapHoChieu()));
            if (request.getNgayHetHanHoChieu() != null && !request.getNgayHetHanHoChieu().equals(""))
                newUser.setNgayHetHanHoChieu(sdf.parse(request.getNgayHetHanHoChieu()));
            if (request.getNgayNghiViec() != null && !request.getNgayNghiViec().equals(""))
                newUser.setNgayNghiViec(sdf.parse(request.getNgayNghiViec()));
            return newUser;

        } catch (Exception e) {
            return null;
        }
    }

    public Employee getByEmail(String mail) {
        return employeeRepo.getByEmail(mail);
    }

    public Employee normalSave(Employee e) {
        return employeeRepo.save(e);
    }

}

