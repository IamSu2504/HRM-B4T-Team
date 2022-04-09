package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "luongnhanvien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryEmployee {

    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ma_hop_dong")
    private Contract maHopDong;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_bac_luong")
    private SalaryCategory idBacLuong;

    @Column(name = "luong_co_ban")
    private Double luongCoBan;

    @Column(name = "phu_cap_khac")
    private Double phuCapKhac;

    @Column(name = "tong_luong")
    private Double tongLuong;

    @Column(name = "ngay_hieu_luc")
    @Temporal(TemporalType.DATE)
    private Date ngayHieuLuc;

    @Column(name = "ngay_ket_thuc")
    @Temporal(TemporalType.DATE)
    private Date ngayKetThuc;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "trang_thai")
    private boolean trangThai;

    public String getNgayHieuLuc(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(ngayHieuLuc != null){
            return sdf.format(ngayHieuLuc);
        } else {
            return null;
        }
    }

    public String getNgayKetThuc(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(ngayKetThuc != null){
            return sdf.format(ngayKetThuc);
        } else {
            return null;
        }
    }
}
