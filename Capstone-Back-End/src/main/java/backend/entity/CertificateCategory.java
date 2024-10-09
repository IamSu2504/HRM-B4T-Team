package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "phanloai_chungchitienganh")
public class CertificateCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_chung_chi")
    private String maChungChi;

    @Column(name = "loai_chung_chi")
    private String loaiChungChi;



}
