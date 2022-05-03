package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "luongnhanvien")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
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

    @Column(name = "tong_luong")
    private Double tongLuong;

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

    @Column(name = "trang_thai")
    private boolean trangThai;

}
