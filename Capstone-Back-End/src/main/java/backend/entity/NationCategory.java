package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_quoctich")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NationCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "quoc_tich")
    private String quocTich;

}
