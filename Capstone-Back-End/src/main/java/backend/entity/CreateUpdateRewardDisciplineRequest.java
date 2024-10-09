package backend.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateUpdateRewardDisciplineRequest {

    private Integer id;

    private Integer phanLoaiID;

    private String lyDo;

    private String maNv;
}
