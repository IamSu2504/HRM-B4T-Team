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

    private int idPhongBan;

    private String ngayVao;

    private String ngayRa;

    private Boolean trangThai;

    private String maNV;
}
