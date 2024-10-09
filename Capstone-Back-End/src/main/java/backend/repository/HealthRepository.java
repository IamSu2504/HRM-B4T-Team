package backend.repository;

import backend.entity.Health;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface HealthRepository extends JpaRepository<Health, Integer> {
    @Query(value = "SELECT * FROM hrm_b4t.tinhtrangsuckhoe where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    Health getByMaNV(String maNV);
}
