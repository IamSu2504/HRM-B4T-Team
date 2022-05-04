package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name = "hopdong")
public class Contract {
    @Id
    @Column(name = "ma_hop_dong")
    private String maHD;

    @ManyToOne
    @JoinColumn(name = "id_loai_hop_dong")
    private ContractCategory loaiHopDong;

    @Column(name = "ngay_hieu_luc")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    public Date getNgayHieuLuc(){
        Calendar c = Calendar.getInstance();
        c.setTime(ngayHieuLuc);
        c.add(Calendar.DAY_OF_MONTH, 1);
        return c.getTime();
    }

    public Date getNgayHetHan(){
        Calendar c = Calendar.getInstance();
        c.setTime(ngayHetHan);
        c.add(Calendar.DAY_OF_MONTH, 1);
        return c.getTime();
    }

}
