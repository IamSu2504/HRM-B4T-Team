package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_bacluong")
public class SalaryCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "id_nhom_luong")
    private SalaryGroupCategory nhomLuong;

    @Column(name = "ma_bac_luong")
    private String maBacLuong;

    @Column(name = "ten_bac_luong")
    private String tenBacLuong;

    @Column(name = "khoang_luong_tu")
    private double khoangLuongTu;

    @Column(name = "khoang_luong_den")
    private double khoangLuongDen;

}
