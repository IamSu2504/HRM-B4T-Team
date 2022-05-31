package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
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
}
