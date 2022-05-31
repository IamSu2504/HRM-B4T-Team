package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ShiftTableRequest {

    private Integer idPhong;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayTu;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date ngayDen;

    private String maNv;

    public Date getNgayTu(){
            if (ngayTu != null) {
                ngayTu.setHours(8);
                return ngayTu;
            } else {
                return null;
            }
    }

    public Date getNgayDen(){
        if (ngayDen != null) {
            ngayDen.setHours(8);
            return ngayDen;
        } else {
            return null;
        }
    }
}
