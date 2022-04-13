package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "logtime")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TimeKeepingEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "datetime")
    @Temporal(TemporalType.DATE)
    private Date dateTime;

    @Column(name = "status")
    private String status;

    private String getDateTime(){
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        if(sdf != null){
            return sdf.format(dateTime);
        } else {
            return null;
        }
    }
}
