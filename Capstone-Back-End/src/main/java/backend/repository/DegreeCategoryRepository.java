package backend.repository;

import backend.entity.DegreeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DegreeCategoryRepository extends JpaRepository<DegreeCategory, Integer> {
    @Query(value = "select max(id) from phanloai_bangcap", nativeQuery = true)
    int getLastID();
}
