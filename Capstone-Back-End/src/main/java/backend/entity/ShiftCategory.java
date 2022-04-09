package backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity
@Table(name = "phanloai_calam")
public class ShiftCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ten_ca")
    private String tenCa;

    @Column(name = "gio_bat_dau")
    @Temporal(TemporalType.TIME)
    private Date gioBatDau;

    @Column(name = "gio_ket_thuc")
    @Temporal(TemporalType.TIME)
    private Date gioKetThuc;

    public String getGioBatDau(){
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
        if(gioBatDau != null){
            return sdf.format(gioBatDau);
        }
        else {
            return null;
        }
    }
    public String getGioKetThuc(){
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
        if(gioKetThuc != null){
            return sdf.format(gioKetThuc);
        }
        else {
            return null;
        }
    }

}
