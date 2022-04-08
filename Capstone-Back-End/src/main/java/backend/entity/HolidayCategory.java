package backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity
@Table(name = "phanloai_ngaynghile")
public class HolidayCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ngay")
    @Temporal(TemporalType.DATE)
    private Date ngay;

    @Column(name = "ten_ngay_le")
    private String tenNgayLe;

    private String getNgayNghiLe(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(sdf != null){
            return sdf.format(ngay);
        } else {
            return null;
        }
    }
}
