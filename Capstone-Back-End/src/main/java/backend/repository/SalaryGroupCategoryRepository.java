package backend.repository;

import backend.entity.SalaryGroupCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryGroupCategoryRepository extends JpaRepository<SalaryGroupCategory, Integer> {
    @Query(value = "select max(id) from phanloai_nhomluong", nativeQuery = true)
    int getLastID();
}
