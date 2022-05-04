package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

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
        if(ngayTu!=null){
            Calendar c = Calendar.getInstance();
            c.setTime(ngayTu);
            c.add(Calendar.DAY_OF_MONTH, 1);
            return c.getTime();
        }
        else
            return null;
    }

    public Date getNgayDen(){
        if(ngayDen!=null){
            Calendar c = Calendar.getInstance();
            c.setTime(ngayDen);
            c.add(Calendar.DAY_OF_MONTH, 1);
            return c.getTime();
        }
        else
            return null;
    }
}
