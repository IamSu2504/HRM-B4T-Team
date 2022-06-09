package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

@Entity
@Table(name = "quatrinhcongtac")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkingProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_phong_ban")
    private DepartmentCategory idPhongBan;

    @ManyToOne
    @JoinColumn(name = "id_chuc_vu")
    private PositionCategory idChucVu;

    @Column(name = "ngay_vao")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ngayVao;

    @Column(name = "ngay_ra")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ngayRa;

    @Column(name = "ma_nv")
    private String maNV;

    @Transient
    private String trangThai;

    public String getTrangThai(){
        if(ngayRa==null){
            return "Active";
        }
        else {
            if(ngayRa.before(new Date())) {
                return "Non-active";
            }
            return "Active";
        }
    }
}
