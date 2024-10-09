package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateSalaryCategoryRequest {

    private Integer id;

    private int nhomLuongID;

    private String maBacLuong;

    private String tenBacLuong;

    private double khoangLuongTu;

    private double khoangLuongDen;

}
