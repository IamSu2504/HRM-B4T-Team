package backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "dangkicalam")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ma_nv")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "id_calam")
    private ShiftCategory shiftCategory;

    @OneToOne
    @JoinColumn(name = "id_phong")
    private RoomCategory room;

    @Column(name = "ngay")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date date;

    @Column(name = "xet_duyet")
    private Boolean accepted;

    @Column(name = "ly_do_kh_duoc_duyet")
    private String note;

}
