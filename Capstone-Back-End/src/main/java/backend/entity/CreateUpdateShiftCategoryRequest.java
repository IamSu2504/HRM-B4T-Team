package backend.entity;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateShiftCategoryRequest {

    private Integer id;

    private String tenCa;

    private String gioBatDau;

    private String gioKetThuc;
}
