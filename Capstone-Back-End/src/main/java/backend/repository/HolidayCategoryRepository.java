package backend.repository;

import backend.entity.HolidayCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HolidayCategoryRepository extends JpaRepository<HolidayCategory,Integer> {
    @Query(value = "select max(id) from phanloai_ngaynghile", nativeQuery = true)
    int getLastID();
}
