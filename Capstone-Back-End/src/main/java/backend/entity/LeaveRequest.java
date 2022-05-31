package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

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
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    @Column(name = "status")
    private String status;

    public Date getDate(){
        if (date != null) {
            date.setHours(8);
            return date;
        } else {
            return null;
        }
    }

}
