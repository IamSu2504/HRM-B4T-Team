package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_baohiem")
public class InsuranceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_bh")
    private String maBH;

    @Column(name = "ten_bh")
    private String tenBH;

    @Column(name = "phan_tram")
    private Double phanTram;

}
