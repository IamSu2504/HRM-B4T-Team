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
    @Temporal(TemporalType.DATE)
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
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayCapCccd;

    @Column(name = "ngay_het_han_cccd")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHetHanCccd;

    @Column(name = "ho_chieu")
    private String hoChieu;

    @Column(name = "noi_cap_ho_chieu")
    private String noiCapHoChieu;

    @Column(name = "ngay_cap_ho_chieu")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayCapHoChieu;

    @Column(name = "ngay_het_han_ho_chieu")
    @Temporal(TemporalType.DATE)
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
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayBatDauLam;

    @Column(name = "ngay_nghi_viec")
    @Temporal(TemporalType.DATE)
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
            return "Đang làm việc";
        }
        else {
            if(ngayNghiViec.before(new Date())) {
                return "Đã nghỉ việc";
            }
            return "Đang làm việc";
        }
    }

    public Date getNgaySinh(){
        if (ngaySinh != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngaySinh.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayCapCccd(){
        if (ngayCapCccd != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayCapCccd.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayHetHanCccd(){
        if (ngayHetHanCccd != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayHetHanCccd.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayCapHoChieu(){
        if (ngayCapHoChieu != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayCapHoChieu.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayHetHanHoChieu(){
        if (ngayHetHanHoChieu != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayHetHanHoChieu.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayBatDauLam(){
        if (ngayBatDauLam != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayBatDauLam.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayNghiViec(){
        if (ngayNghiViec != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(ngayNghiViec.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

}
