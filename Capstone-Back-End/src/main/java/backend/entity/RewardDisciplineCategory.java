package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_khenthuongkiluat")
public class RewardDisciplineCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "danh_muc")
    private String danhMuc;

    @Column(name = "tieu_de")
    private String tieuDe;
}
