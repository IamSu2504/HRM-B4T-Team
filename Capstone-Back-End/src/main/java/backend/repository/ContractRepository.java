package backend.repository;

import backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

    @Query(value = "SELECT * FROM hrm_b4t.hopdong where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    Contract getByMaNV(String maNV);
}