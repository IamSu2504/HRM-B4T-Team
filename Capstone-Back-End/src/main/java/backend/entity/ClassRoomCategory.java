package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_phonghoc")
public class ClassRoomCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ma_phong_hoc")
    private String maPhongHoc;

    @Column(name = "ten_phong_hoc")
    private String tenPhongHoc;

}
