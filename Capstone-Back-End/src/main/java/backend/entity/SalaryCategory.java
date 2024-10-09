package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_bacluong")
public class SalaryCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_bac_luong")
    private String maBacLuong;

    @Column(name = "ten_bac_luong")
    private String tenBacLuong;

    @Column(name = "khoang_luong_tu")
    private double khoangLuongTu;

    @Column(name = "khoang_luong_den")
    private double khoangLuongDen;

}
