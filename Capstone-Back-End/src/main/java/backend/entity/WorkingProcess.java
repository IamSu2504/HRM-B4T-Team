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
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ngayVao;

    @Column(name = "ngay_ra")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date ngayRa;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    public Date getNgayVao() {
        if (ngayVao != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(sdf.format(ngayVao));
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getNgayRa() {
        if (ngayRa != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(sdf.format(ngayRa));
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }
}
