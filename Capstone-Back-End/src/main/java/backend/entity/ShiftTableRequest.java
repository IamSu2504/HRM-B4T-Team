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
                try {
                    SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
                    sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                    return sdf.parse(sdf.format(ngayTu));
                } catch (ParseException e) {
                    return null;
                }
            } else {
                return null;
            }
    }

    public Date getNgayDen(){
        if (ngayDen != null) {
            try {
                SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
                sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
                return sdf.parse(sdf.format(ngayDen));
            } catch (ParseException e) {
                return null;
            }
        } else {
            return null;
        }
    }
}
