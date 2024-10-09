package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateSalaryRequest {

    private Integer id;

    private String maHD;

    private Integer idBacLuong;

    private Double luongCoBan;

    private Double phuCapKhac;

    private String ngayHieuLuc;

    private String ngayKetThuc;

    private String ghiChu;
}
