package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateInsuranceRequest {

    private Integer id;

    private Integer idLoaiBH;

    private String maSoBH;

    private Double tienBH;

    private String maNV;
}
