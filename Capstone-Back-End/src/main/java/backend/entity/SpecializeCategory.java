package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_chuyenmon")
public class SpecializeCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_chuyen_mon")
    private String maChuyenMon;

    @Column(name = "chuyen_mon")
    private String chuyenMon;

}
