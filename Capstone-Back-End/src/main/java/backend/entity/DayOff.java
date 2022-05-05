package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "songhiconlai")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DayOff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "so_buoi_nghi")
    private Integer soBuoiNghi;
}
