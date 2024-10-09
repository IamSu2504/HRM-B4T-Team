package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "thue")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Tax {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_loai_thue")
    private TaxCategory idLoaiThue;

    @Column(name = "ma_so_thue")
    private String maSoThue;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee maNV;
}
