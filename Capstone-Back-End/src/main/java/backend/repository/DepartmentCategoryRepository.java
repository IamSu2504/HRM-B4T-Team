package backend.repository;

import backend.entity.DepartmentCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentCategoryRepository extends JpaRepository<DepartmentCategory, Integer> {
    @Query(value = "select max(id) from phanloai_phongban", nativeQuery = true)
    int getLastID();
}
