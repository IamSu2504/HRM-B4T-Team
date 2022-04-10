package backend.entity;

import lombok.Data;

@Data
public class CreateUpdateShiftCategoryRequest {

    private Integer id;

    private String tenCa;

    private String gioBatDau;

    private String gioKetThuc;
}
