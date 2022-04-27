package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "dangkinghi")
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee user;

    @ManyToOne
    @JoinColumn(name = "id_loai_nghi")
    private DayOffCategory idNghi;

    @Column(name = "ly_do")
    private String lyDo;

    @Column(name = "nguoi_duyet")
    private String nguoiDuyet;

    @ManyToOne
    @JoinColumn(name = "id_ca")
    private ShiftCategory shiftCategory;

    @Column(name = "ngay")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date date;

    @Column(name = "status")
    private String status;


}
