package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

@Data
@Entity
@Table(name = "phanloai_ngaynghile")
public class HolidayCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ngay")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date ngay;

    @Column(name = "ten_ngay_le")
    private String tenNgayLe;

    public Date getNgay(){
        if (ngay != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(sdf.format(ngay));
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

}
