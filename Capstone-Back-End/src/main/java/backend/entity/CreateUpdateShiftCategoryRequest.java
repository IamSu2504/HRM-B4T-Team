package backend.entity;

import lombok.Data;

@Data
public class CreateUpdateShiftCategoryRequest {

    private int id;

    private String tenCa;

    private String gioBatDau;

    private String gioKetThuc;
}
