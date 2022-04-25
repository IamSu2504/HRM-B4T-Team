package backend.repository;

import backend.entity.ContractEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractEmployeeRepository extends JpaRepository<ContractEmployee, String> {

    @Query(value = "SELECT * FROM hrm_b4t.hopdong where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    List<ContractEmployee> getByMaNV(String maNV);
}