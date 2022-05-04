package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

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
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayVao;

    @Column(name = "ngay_ra")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngayRa;

    @Column(name = "trang_thai")
    private boolean trangThai;

    @Column(name = "ma_nv")
    private String maNV;

    public Date getNgayVao(){
        Calendar c = Calendar.getInstance();
        c.setTime(ngayVao);
        c.add(Calendar.DAY_OF_MONTH, 1);
        return c.getTime();
    }

    public Date getNgayRa(){
        Calendar c = Calendar.getInstance();
        c.setTime(ngayRa);
        c.add(Calendar.DAY_OF_MONTH, 1);
        return c.getTime();
    }
}
