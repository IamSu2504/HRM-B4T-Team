package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.Year;
import java.util.Date;

@Entity
@Table(name = "trinhdovanhoa")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EduLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_chuyen_mon")
    private SpecializeCategory idChuyenMon;

    @ManyToOne
    @JoinColumn(name = "id_trinh_do_hoc_van")
    private EduLevelCategory idTrinhDo;

    @ManyToOne
    @JoinColumn(name = "id_bang_cap")
    private DegreeCategory idBangCap;

    @Column(name = "ten_truong")
    private String tenTruong;

    @Column(name = "tu_thoi_gian")
    private Integer thoiGianTu;

    @Column(name = "den_thoi_gian")
    private Integer thoiGianDen;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee maNV;

}
