package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "hopdong")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {

    @Id
    @Column(name = "ma_hop_dong")
    private String id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_loai_hop_dong")
    private ContractCategory loaiHopDong;

    @Column(name = "ngay_hieu_luc")
    @Temporal(TemporalType.DATE)
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    @Temporal(TemporalType.DATE)
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    public String getNgayHieuLuc(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(ngayHieuLuc != null){
            return sdf.format(ngayHieuLuc);
        } else {
            return null;
        }
    }

    public String getNgayHetHan(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(ngayHetHan != null){
            return sdf.format(ngayHetHan);
        } else {
            return null;
        }
    }
}