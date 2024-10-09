package backend.repository;

import backend.entity.CertificateCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificateCategoryRepository extends JpaRepository<CertificateCategory, Integer> {
    @Query(value = "select * from hrm_b4t.phanloai_chungchitienganh where UPPER(ma_chung_chi) = UPPER(?)", nativeQuery = true)
    CertificateCategory getByMaChungChi(String maChungChi);

    @Query(value = "select c from CertificateCategory c where c.loaiChungChi like %?1% or" +
            " c.maChungChi like %?1% ")
    List<CertificateCategory> getSearched(String text);

}
