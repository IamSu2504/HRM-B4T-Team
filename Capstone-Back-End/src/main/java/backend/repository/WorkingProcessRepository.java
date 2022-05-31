package backend.repository;

import backend.entity.PositionCategory;
import backend.entity.WorkingProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface WorkingProcessRepository extends JpaRepository<WorkingProcess, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.quatrinhcongtac where id_phong_ban = ?", nativeQuery = true)
    List<WorkingProcess> getByIdPhongBan(int idPhongBan);

    @Query(value = "SELECT * FROM hrm_b4t.quatrinhcongtac where ma_nv = ?", nativeQuery = true)
    List<WorkingProcess> getByMaNV(String maNV);

    @Query(value = "select w from WorkingProcess w where w.maNV = :maNV and w.ngayVao <= :end and (w.ngayRa >= :start or w.ngayRa is null)")
    WorkingProcess getByEmp(@Param("maNV") String maNV, @Param("start") Date start, @Param("end") Date end);

}
