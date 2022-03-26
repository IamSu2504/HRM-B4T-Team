package backend.repository;

import backend.entity.DayOffCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DayOffCategoryRepository extends JpaRepository<DayOffCategory, Integer> {
    @Query(value = "select max(id) from phanloai_ngaynghi", nativeQuery = true)
    int getLastID();
}
