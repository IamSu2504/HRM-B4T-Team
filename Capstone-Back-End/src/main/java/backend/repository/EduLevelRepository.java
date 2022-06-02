package backend.repository;

import backend.entity.EduLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EduLevelRepository extends JpaRepository<EduLevel, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.trinhdovanhoa where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    List<EduLevel> getByMaNV(String maNV);
}
