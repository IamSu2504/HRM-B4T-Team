package backend.entity;

import backend.util.DecimalJsonSerializer;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
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
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Transient
    private Boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "giam_tru_gia_canh")
    @JsonSerialize(using = DecimalJsonSerializer.class)
    private Double giamTruGiaCanh;

    public Boolean getTrangThai(){
        if(ngayHetHan !=null){
            if(ngayHetHan.before(new Date())){
                return false;
            }
            else{
                return true;
            }
        }
        return true;
    }
}
