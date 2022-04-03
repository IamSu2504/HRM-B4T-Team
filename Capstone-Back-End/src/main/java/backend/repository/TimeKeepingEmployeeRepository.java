package backend.repository;

import backend.entity.TimeKeepingEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeKeepingEmployeeRepository extends JpaRepository<TimeKeepingEmployee, Integer> {

    @Query(value ="select * from hrm_b4t.songhiconlai where ma_nv = ?", nativeQuery = true)
    TimeKeepingEmployee getByMaNV(String maNV);
}
