package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateWorkingProcess {

    private Integer id;

    private Integer idPhongBan;

    private Integer idChucVu;

    private String ngayVao;

    private String ngayRa;

    private String maNV;
}
