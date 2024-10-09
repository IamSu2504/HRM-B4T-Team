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
    double luongCoBan;
    double phuCap;
    double giamTruGiaCanh;
    double soCaToiThieu;
    double soCa;
    double soCaLamThem;
    double luongOT;
    double luongTruocThue;
    double luongChiuThueTNCN;
    double thueTNCN;
    double baoHiemXaHoi;
    double baoHiemYte;
    double congDoan;
    double tong;

    public String getLuongChiuThueTNCN() {
        return String.format("%.2f", luongChiuThueTNCN);
    }

    public String getLuongCoBan() {
        return String.format("%.2f", luongCoBan);
    }

    public String getLuongOT() {
        return String.format("%.2f", luongOT);
    }

    public String getLuongTruocThue() {
        return String.format("%.2f", luongTruocThue);
    }

    public String getPhuCap() {
        return String.format("%.2f", phuCap);
    }

    public String getThueTNCN() {
        return String.format("%.2f", thueTNCN);
    }

    public String getBaoHiemXaHoi() {
        return String.format("%.2f", baoHiemXaHoi);
    }

    public String getBaoHiemYte() {
        return String.format("%.2f", baoHiemYte);
    }

    public String getCongDoan() {
        return String.format("%.2f", congDoan);
    }

    public String getGiamTruGiaCanh() {
        return String.format("%.2f", giamTruGiaCanh);
    }
}
