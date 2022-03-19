package backend.repository;

import backend.entity.PositionCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionCategoryRepository extends JpaRepository<PositionCategory, Integer> {
    @Query(value = "select max(id) from phanloai_chucvu", nativeQuery = true)
    int getLastID();
}
