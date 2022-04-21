package backend.repository;

import backend.entity.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Integer> {

    @Query(value = "select * from baohiem where UPPER(ma_so_bh) = UPPER(?)", nativeQuery = true)
    Insurance getByMaSoBH(String maSoBH);
}
