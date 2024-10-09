package backend.repository;

import backend.entity.InsuranceEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InsuranceEmployeeRepository extends JpaRepository<InsuranceEmployee, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.baohiem where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    List<InsuranceEmployee> getByMaNV(String maNV);
}
