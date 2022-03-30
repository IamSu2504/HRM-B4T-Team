package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;

@Getter
@AllArgsConstructor
public class CreateAccountData {

    private String username;
    private String password;
    private int roleId;
    private String id;
    private String tenNv;
    private String quocTich;
    private Date ngaySinh;
    private boolean gioiTinh;
    private String phone;
    private String phone2;
    private String email;
    private String facebook;
    private String skype;
    private String cccd;
    private String noiCapCccd;
    private Date ngayCapCccd;
    private Date ngayHetHanCccd;
    private String hoChieu;
    private String noiCapHoChieu;
    private Date ngayCapHoChieu;
    private Date ngayHetHanHoChieu;
    private String noiSinh;
    private String queQuan;
    private String diaChiThuongTru;
    private String diaChiTamTru;
    private String chucVuHienTai;
    private String atmNganHang;
    private String soAtm;
    private boolean trangThaiLaoDong;
    private Date ngayNghiViec;
    private String lyDoNghi;
    private String image;

}
