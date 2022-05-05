package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

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
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayHieuLuc;

    @Column(name = "ngay_ket_thuc")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayKetThuc;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Transient
    private double tongLuong;

    public double getTongLuong(){
        return luongCoBan + phuCapKhac;
    }



//    public Date getNgayHieuLuc(){
//        if(ngayHieuLuc==null){
//            return null;
//        }
//        Calendar c = Calendar.getInstance();
//        c.setTime(ngayHieuLuc);
//        c.add(Calendar.DAY_OF_MONTH, 1);
//        return c.getTime();
//    }
//
//    public Date getNgayKetThuc(){
//        if(ngayKetThuc==null){
//            return null;
//        }
//        Calendar c = Calendar.getInstance();
//        c.setTime(ngayKetThuc);
//        c.add(Calendar.DAY_OF_MONTH, 1);
//        return c.getTime();
//    }

}
