package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_khenthuongkiluat")
public class RewardDisciplineCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "danh_muc")
    private String danhMuc;

    @Column(name = "loai_danh_muc")
    private boolean loaiDanhMuc;
}
