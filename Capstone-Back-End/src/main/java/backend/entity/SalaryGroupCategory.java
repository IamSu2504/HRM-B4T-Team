package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_nhomluong")
public class SalaryGroupCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_nhom_luong")
    private String maNhomLuong;

    @Column(name = "ten_nhom_luong")
    private String tenNhomLuong;
}
