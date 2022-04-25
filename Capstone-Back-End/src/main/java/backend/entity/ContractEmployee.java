package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class ContractEmployee {

    @Id
    @Column(name = "ma_hop_dong")
    private String id;

    @ManyToOne
    @JoinColumn(name = "id_loai_hop_dong")
    private ContractCategory loaiHopDong;

    @Column(name = "ngay_hieu_luc")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;


}