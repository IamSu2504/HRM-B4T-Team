package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

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
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
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
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayCapCccd;

    @Column(name = "ngay_het_han_cccd")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHetHanCccd;

    @Column(name = "ho_chieu")
    private String hoChieu;

    @Column(name = "noi_cap_ho_chieu")
    private String noiCapHoChieu;

    @Column(name = "ngay_cap_ho_chieu")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayCapHoChieu;

    @Column(name = "ngay_het_han_ho_chieu")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
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

    @Column(name = "ngay_bat_dau_lam")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayBatDauLam;

    @Column(name = "ngay_nghi_viec")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayNghiViec;

    @Column(name = "ly_do_nghi")
    private String lyDoNghi;

    @Column(name = "image")
    private String image;

    @Transient
    private String trangThai;

    public String getTrangThai(){
        if(ngayNghiViec==null){
            return "Working";
        }
        else {
            Calendar c= Calendar.getInstance();
            c.setTime(ngayNghiViec);
            c.set(ngayNghiViec.getYear()+1900,ngayNghiViec.getMonth(),ngayNghiViec.getDate(),8,0,0);
            if(c.getTime().before(new Date())) {
                return "Leaved";
            }
            return "Working";
        }
    }

    public Date getNgaySinh(){
        if (ngaySinh != null) {
            ngaySinh.setHours(8);
        }
        return ngaySinh;
    }

    public Date getNgayCapCccd(){
        if (ngayCapCccd != null) {
            ngayCapCccd.setHours(8);
        }
        return ngayCapCccd;
    }

    public Date getNgayHetHanCccd(){
        if (ngayHetHanCccd != null) {
            ngayHetHanCccd.setHours(8);
        }
        return ngayHetHanCccd;
    }

    public Date getNgayCapHoChieu(){
        if (ngayCapHoChieu != null) {
            ngayCapHoChieu.setHours(8);
        }
        return ngayCapHoChieu;
    }

    public Date getNgayHetHanHoChieu(){
        if (ngayHetHanHoChieu != null) {
            ngayHetHanHoChieu.setHours(8);
        }
        return ngayHetHanHoChieu;
    }

    public Date getNgayBatDauLam(){
        if (ngayBatDauLam != null) {
            ngayBatDauLam.setHours(8);
        }
        return ngayBatDauLam;
    }

    public Date getNgayNghiViec(){
        if (ngayNghiViec != null) {
            ngayNghiViec.setHours(8);
        }
        return ngayNghiViec;
    }

}
