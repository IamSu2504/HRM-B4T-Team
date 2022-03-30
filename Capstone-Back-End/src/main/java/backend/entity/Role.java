package backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "phanloai_role")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "ten_role")
    private String tenRole;

}
