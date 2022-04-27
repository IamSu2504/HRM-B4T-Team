package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "khenthuongkiluat")
public class RewardDiscipline {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_phan_loai")
    private RewardDisciplineCategory phanLoai;

    @Column(name = "ly_do")
    private String lyDo;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee user;
}
