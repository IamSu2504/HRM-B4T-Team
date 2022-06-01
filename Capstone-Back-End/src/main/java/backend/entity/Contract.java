package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

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
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHieuLuc;

    @Column(name = "ngay_het_han")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayHetHan;

    @Column(name = "ghi_chu")
    private String ghiChu;

    @Transient
    private Boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "giam_tru_gia_canh")
    private Double giamTruGiaCanh;

    public Date getNgayHieuLuc(){
            if (ngayHieuLuc != null) {
                ngayHieuLuc.setHours(8);
                return ngayHieuLuc;
            } else {
                return null;
            }
    }

    public Date getNgayHetHan(){
        if (ngayHetHan != null) {
            ngayHetHan.setHours(8);
            return ngayHetHan;
        } else {
            return null;
        }
    }

    public Boolean getTrangThai(){
        if (ngayHetHan != null) {
            ngayHetHan.setHours(8);
        } else {
            return true;
        }
        if(ngayHetHan !=null){
            Date toDay = new Date();
            if(ngayHetHan.after(new Date())){
                return false;
            }
            else{
                return true;
            }
        }
        return true;
    }

}
