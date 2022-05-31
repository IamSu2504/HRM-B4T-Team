package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateContractRequest {
    private String maHD;

    private Integer loaiHopDong;

    private String ngayHieuLuc;

    private String ngayHetHan;

    private String ghiChu;

    private Boolean trangThai;

    private String maNV;

    private Double giamTruGiaCanh;
}
