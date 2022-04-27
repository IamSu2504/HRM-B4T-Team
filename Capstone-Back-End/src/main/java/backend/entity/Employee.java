package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "nhanvien")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @Column(name = "ma_nv")
    private String id;

    @ManyToOne
    @JoinColumn(name = "id_tinh_chat_hop_dong")
    private ContractNatureCategory tinhChatHopDong;

    @ManyToOne
    @JoinColumn(name = "id_tinh_trang_hon_nhan")
    private MarriageCategory tinhTrangHonNhan;

    @ManyToOne
    @JoinColumn(name = "ma_quoc_tich")
    private NationCategory quocTich;

    @Column(name = "ten_nv")
    private String tenNv;

    @Column(name = "ngay_sinh")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngaySinh;

    @Column(name = "gioi_tinh")
    private boolean gioiTinh;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    @Column(name = "so_dien_thoai_2")
    private String soDienThoai2;

    @Column(name = "email")
    private String email;

    @Column(name = "cccd")
    private String cccd;

    @Column(name = "noi_cap_cccd")
    private String noiCapCccd;

    @Column(name = "ngay_cap_cccd")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayCapCccd;

    @Column(name = "ngay_het_han_cccd")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayHetHanCccd;

    @Column(name = "ho_chieu")
    private String hoChieu;

    @Column(name = "noi_cap_ho_chieu")
    private String noiCapHoChieu;

    @Column(name = "ngay_cap_ho_chieu")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayCapHoChieu;

    @Column(name = "ngay_het_han_ho_chieu")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayHetHanHoChieu;

    @Column(name = "noi_sinh")
    private String noiSinh;

    @Column(name = "que_quan")
    private String queQuan;

    @Column(name = "dia_chi_thuong_tru")
    private String diaChiThuongTru;

    @Column(name = "dia_chi_tam_tru")
    private String diaChiTamTru;

    @Column(name = "atm_ngan_hang")
    private String atmNganHang;

    @Column(name = "so_atm")
    private String soAtm;

    @Column(name = "trang_thai_lao_dong")
    private boolean trangThaiLaoDong;

    @Column(name = "ngay_bat_dau_lam")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayBatDauLam;

    @Column(name = "ngay_nghi_viec")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayNghiViec;

    @Column(name = "ly_do_nghi")
    private String lyDoNghi;

    @Column(name = "image")
    private String image;

}
