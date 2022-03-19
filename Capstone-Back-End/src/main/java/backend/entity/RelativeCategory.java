package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_nguoithan")
public class RelativeCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "quan_he")
    private String quanHe;
}
