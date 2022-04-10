package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_phongban")
public class DepartmentCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_phong_ban")
    private String maPhongBan;

    @Column(name = "ten_phong_ban")
    private String tenPhongBan;

}
