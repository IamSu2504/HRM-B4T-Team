package backend.repository;

import backend.entity.DayOff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DayOffRepository extends JpaRepository<DayOff, Integer> {

    @Query(value ="select * from hrm_b4t.songhiconlai where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    DayOff getByMaNV(String maNV);
}
