package backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "phanloai_ngaynghile")
public class HolidayCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ngay")
    private Date ngay;

    @Column(name = "ten_ngay_le")
    private String tenNgayLe;
}
