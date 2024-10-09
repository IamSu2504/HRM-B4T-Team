package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateHealthRequest {

    private Integer id;

    private String nhomMau;

    private Double chieuCao;

    private Double canNang;

    private String tinhTrangSucKhoe;

    private String benhNen;

    private Boolean khuyetTat;

    private String luuY;

    private String maNV;
}
