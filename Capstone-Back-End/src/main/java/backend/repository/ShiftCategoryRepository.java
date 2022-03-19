package backend.repository;

import backend.entity.ShiftCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftCategoryRepository extends JpaRepository<ShiftCategory,Integer> {
    @Query(value = "select max(id) from phanloai_calam", nativeQuery = true)
    int getLastID();
}
