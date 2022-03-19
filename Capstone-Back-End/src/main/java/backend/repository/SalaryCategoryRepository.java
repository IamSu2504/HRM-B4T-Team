package backend.repository;

import backend.entity.SalaryCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryCategoryRepository extends JpaRepository<SalaryCategory, Integer> {
    @Query(value = "select max(id) from phanloai_bacluong", nativeQuery = true)
    int getLastID();
}
