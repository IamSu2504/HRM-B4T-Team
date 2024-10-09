package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ShiftTableRequest {

    private Integer idPhong;

    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayTu;

    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayDen;

    private String maNv;
}
