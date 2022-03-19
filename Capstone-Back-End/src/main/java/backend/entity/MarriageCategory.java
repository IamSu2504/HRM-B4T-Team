package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_tinhtranghonnhan")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MarriageCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "tinh_trang")
    private String tinhTrang;
}
