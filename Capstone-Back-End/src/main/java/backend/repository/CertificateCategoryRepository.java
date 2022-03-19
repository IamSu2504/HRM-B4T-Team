package backend.repository;

import backend.entity.CertificateCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateCategoryRepository extends JpaRepository<CertificateCategory, Integer> {
    @Query(value = "select max(id) from phanloai_chungchitienganh", nativeQuery = true)
    int getLastID();
}
