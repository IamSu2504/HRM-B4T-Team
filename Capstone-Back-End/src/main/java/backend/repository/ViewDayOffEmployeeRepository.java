package backend.repository;

import backend.entity.ViewDayOffEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewDayOffEmployeeRepository extends JpaRepository<ViewDayOffEmployee, Integer> {

    @Query(value ="select * from hrm_b4t.songhiconlai where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    ViewDayOffEmployee getByMaNV(String maNV);
}
