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
    double luongCoBan;
    double phuCapKhac;
    double tong;

}
