package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {

    private String id;

    private String username;

    private String password;

    private String tenNv;

    private String quocTich;

    private String ngaySinh;

    private boolean gioiTinh;

    private String soDienThoai;

    private String soDienThoai2;

    private String email;

    private String facebook;

    private String skype;

    private String cccd;

    private String noiCapCccd;

    private String ngayCapCccd;

    private String ngayHetHanCccd;

    private String hoChieu;

    private String noiCapHoChieu;

    private String ngayCapHoChieu;

    private String ngayHetHanHoChieu;

    private String noiSinh;

    private String queQuan;

    private String diaChiThuongTru;

    private String diaChiTamTru;

    private String chucVuHienTai;

    private String atmNganHang;

    private String soAtm;

    private boolean trangThaiLaoDong;

    private String ngayNghiViec;

    private String lyDoNghi;

    private String image;

    private int tinhChatHopdongId;

    private int tinhTrangHonNhanId;

}
