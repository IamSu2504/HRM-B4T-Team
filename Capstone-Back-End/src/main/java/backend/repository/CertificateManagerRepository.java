package backend.repository;

import backend.entity.CertificateManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificateManagerRepository extends JpaRepository<CertificateManager, Integer> {
    @Query(value = "SELECT * FROM hrm_b4t.chungchitienganh where UPPER(ma_nv) =  UPPER(?)", nativeQuery = true)
    List<CertificateManager> getByMaNV(String maNV);
}
