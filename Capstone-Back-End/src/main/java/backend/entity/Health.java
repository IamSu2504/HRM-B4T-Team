package backend.entity;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tinhtrangsuckhoe")
public class Health {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nhom_mau")
    private String nhomMau;

    @Column(name = "chieu_cao")
    private Double chieuCao;

    @Column(name = "can_nang")
    private Double canNang;

    @Column(name = "tinh_trang_suc_khoe")
    private String tinhTrangSucKhoe;

    @Column(name = "benh_nen")
    private String benhNen;

    @Column(name = "khuyet_tat")
    private Boolean khuyetTat;

    @Column(name = "luu_y")
    private String luuY;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee maNV;

}
