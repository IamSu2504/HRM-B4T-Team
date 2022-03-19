package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_thue")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TaxCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_phan_loai")
    private String maPhanLoai;

    @Column(name = "ten_loai_thue")
    private String tenLoaiThue;
}
