package backend.entity;

import lombok.Data;

import javax.persistence.*;
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
    private Date gioBatDau;

    @Column(name = "gio_ket_thuc")
    private Date gioKetThuc;
}
