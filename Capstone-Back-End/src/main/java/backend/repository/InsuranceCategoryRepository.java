package backend.repository;

import backend.entity.InsuranceCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceCategoryRepository extends JpaRepository<InsuranceCategory, Integer> {
    @Query(value = "select max(id) from phanloai_baohiem", nativeQuery = true)
    int getLastID();
}
