package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_trinhdohocvan")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EduLevelCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "trinh_do")
    private String trinhDo;
}
