package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_chuc_vu")
    private PositionCategory chucVu;

    @Column(name = "ngay_hieu_luc")
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

}
