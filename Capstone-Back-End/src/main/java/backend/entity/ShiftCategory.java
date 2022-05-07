package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@Data
@Entity
@Table(name = "phanloai_calam")
public class ShiftCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ten_ca")
    private String tenCa;

    @Column(name = "gio_bat_dau")
    @Temporal(TemporalType.TIME)
    @JsonFormat(pattern="HH:mm")
    private Date gioBatDau;

    @Column(name = "gio_ket_thuc")
    @Temporal(TemporalType.TIME)
    @JsonFormat(pattern="HH:mm")
    private Date gioKetThuc;

    public Date getGioBatDau(){
        if (gioBatDau != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(gioBatDau.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

    public Date getGioKetThuc(){
        if (gioKetThuc != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(gioKetThuc.toString());
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }

}
