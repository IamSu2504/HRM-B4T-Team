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
@Table(name = "luongnhanvien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ma_hop_dong")
    private Contract hopDong;

    @ManyToOne
    @JoinColumn(name = "id_bac_luong")
    private SalaryCategory idBacLuong;

    @Column(name = "luong_co_ban")
    private Double luongCoBan;

    @Column(name = "phu_cap_khac")
    private Double phuCapKhac;

    @Column(name = "ngay_hieu_luc")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHieuLuc;

    @Column(name = "ngay_ket_thuc")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayKetThuc;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Transient
    private double tongLuong;

    public double getTongLuong(){
        return luongCoBan + phuCapKhac;
    }

    public Date getNgayHieuLuc(){
            if (ngayHieuLuc != null) {
                ngayHieuLuc.setHours(8);
                return ngayHieuLuc;
            } else {
                return null;
            }
    }

    public Date getNgayKetThuc(){
        if (ngayKetThuc != null) {
            ngayKetThuc.setHours(8);
            return ngayKetThuc;
        } else {
            return null;
        }
    }

}
