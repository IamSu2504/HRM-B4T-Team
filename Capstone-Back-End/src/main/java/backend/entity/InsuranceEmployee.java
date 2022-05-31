package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "baohiem")
public class InsuranceEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_loai_bao_hiem")
    private InsuranceCategory idLoaiBH;

    @Column(name = "ma_so_bh")
    private String maSoBH;

    @Column(name = "tien_bao_hiem")
    private Double tienBH;

    @Column(name = "ma_nv")
    private String maNV;
}
