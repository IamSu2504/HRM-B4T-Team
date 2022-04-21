package backend.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "baohiem")
public class Insurance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_loai_bao_hiem")
    private InsuranceCategory idLoaiBH;

    @Column(name = "ma_so_bh")
    private String maSoBH;

    @Column(name = "tien_bao_hiem")
    private double tienBH;

    @Column(name = "ma_nv")
    private String maNV;
}
