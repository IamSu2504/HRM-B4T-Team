package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateTaxRequest {

    private Integer id;

    private Integer idLoaiThue;

    private String maSoThue;

    private String maNV;
}
