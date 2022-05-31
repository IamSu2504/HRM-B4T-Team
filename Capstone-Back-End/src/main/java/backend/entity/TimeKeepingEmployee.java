package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@Entity
@Table(name = "logtime")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TimeKeepingEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "datetime")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateTime;

    @Column(name = "status")
    private String status;

    private Date getDateTime() {
        if (dateTime != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(sdf.format(dateTime));
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }
}
