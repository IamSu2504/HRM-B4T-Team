package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateCertificateRequest {

    private Integer id;

    private Integer certificateID;

    private String ngayCap;

    private String noiCap;

    private String maNV;

    private Double diemSo;

}
