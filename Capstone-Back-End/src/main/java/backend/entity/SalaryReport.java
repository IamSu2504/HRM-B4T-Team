package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SalaryReport {

    String maNv;
    String tenNV;
    String chucVu;
    String phongBan;
    double soCaToiThieu;
    double soCa;
    double luongCoBan;
    double giamTruGiaCanh;
    double luongTruocThue;
    double luongOT;
    double luongChiuThueTNCN;
    double thueTNCN;
    double baoHiemXaHoi;
    double baoHiemYte;
    double congDoan;
    double tong;

}
