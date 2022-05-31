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
@Table(name = "dangkicalam")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "id_calam")
    private ShiftCategory shiftCategory;

    @OneToOne
    @JoinColumn(name = "id_phong")
    private RoomCategory room;

    @Column(name = "ngay")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    public Date getDate() {
        if (date != null) {
            date.setHours(8);
            return date;
        } else {
            return null;
        }
    }

}
