package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_baohiem")
public class InsuranceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "ma_bh")
    private String maBH;

    @Column(name = "ten_bh")
    private String tenBH;

}
