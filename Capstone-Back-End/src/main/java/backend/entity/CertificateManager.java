package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name = "chungchitienganh")
public class CertificateManager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_phan_loai_chung_chi")
    private CertificateCategory certificateID;

    @Column(name = "ngay_cap")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayCap;

    @Column(name = "noi_cap")
    private String noiCap;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee maNV;

    @Column(name = "diem_so")
    private Double diemSo;

    public Date getNgayCap(){
        if(ngayCap!=null){
            ngayCap.setHours(8);
            return ngayCap;
        }
        else
            return null;
    }
}
