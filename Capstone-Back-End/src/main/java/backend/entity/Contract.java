package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "hopdong")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Contract {

    @Id
    @Column(name = "ma_hop_dong")
    private String id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_loai_hop_dong", referencedColumnName = "id")
    private ContractCategory loaiHopDong;

    @Column(name = "ten_nv")
    private String tenNv;



}
