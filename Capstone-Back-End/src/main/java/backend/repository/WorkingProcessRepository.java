package backend.repository;

import backend.entity.WorkingProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkingProcessRepository extends JpaRepository<WorkingProcess, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.quatrinhcongtac where Upper(id_phong_ban) =  UPPER(?)", nativeQuery = true)
    WorkingProcess getByIdPhongBan(int idPhongBan);

}
