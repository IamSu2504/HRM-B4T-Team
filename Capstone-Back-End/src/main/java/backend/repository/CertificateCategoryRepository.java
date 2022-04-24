package backend.repository;

import backend.entity.CertificateCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateCategoryRepository extends JpaRepository<CertificateCategory, Integer> {
    @Query(value = "select * from hrm_b4t.phanloai_chungchitienganh where UPPER(ma_chung_chi) = UPPER(?)", nativeQuery = true)
    CertificateCategory getByMaChungChi(String maChungChi);
}
