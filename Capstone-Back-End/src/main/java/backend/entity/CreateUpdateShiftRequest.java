package backend.entity;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateShiftRequest {

    private Integer id;

    private String userID;

    private Integer shiftCategoryID;

    private Integer roomID;

    private String date;
}
