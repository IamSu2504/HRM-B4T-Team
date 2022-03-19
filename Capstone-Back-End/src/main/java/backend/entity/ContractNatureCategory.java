package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_tinhchathopdong")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContractNatureCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "tinh_chat_hop_dong")
    private String tinhChatHopDong;
}
