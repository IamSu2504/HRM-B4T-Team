package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateLeaveRequest {

    private Integer id;

    private String user;

    private Integer idNghi;

    private String lyDo;

    private String nguoiDuyet;

    private Integer shiftCategory;

    private String date;

    private String status;
}
