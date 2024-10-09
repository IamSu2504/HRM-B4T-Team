package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Year;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CreateUpdateEduLevelRequest {

    private Integer id;

    private Integer idChuyenMon;

    private Integer idTrinhDo;

    private Integer idBangCap;

    private String tenTruong;

    private Integer thoiGianTu;

    private Integer thoiGianDen;

    private String maNV;
}
