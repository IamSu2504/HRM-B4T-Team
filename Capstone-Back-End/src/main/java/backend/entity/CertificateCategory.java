package backend.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "phanloai_chungchitienganh")
public class CertificateCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "loai_chung_chi")
    private String loaiChungChi;

}
