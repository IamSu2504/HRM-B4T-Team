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
public class CreateUpdateUserRequest {

    private String id;

    private Integer tinhChatHopDongID;

    private Integer tinhTrangHonNhanID;

    private Integer chucVuID;

    private Integer quocTichID;

    private String tenNv;

    private String ngaySinh;

    private boolean gioiTinh;

    private String soDienThoai;

    private String soDienThoai2;

    private String email;

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

    private String atmNganHang;

    private String soAtm;

    private boolean trangThaiLaoDong;

    private String ngayBatDauLam;

    private String ngayNghiViec;

    private String lyDoNghi;

    private String image;
}
