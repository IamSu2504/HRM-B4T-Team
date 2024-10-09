package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_hopdong")
public class ContractCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "ma_loai_hop_dong")
    private String maLoaiHopDong;

    @Column(name = "ten_loai_hop_dong")
    private String tenLoaiHopDong;
}
