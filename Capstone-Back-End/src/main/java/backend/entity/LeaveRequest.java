package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.util.Calendar;
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
    private ShiftCategory shiftID;

    @Column(name = "ngay")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    @Column(name = "status")
    private String status;

    public Date getDate(){
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DAY_OF_MONTH, 1);
        return c.getTime();
    }


}
