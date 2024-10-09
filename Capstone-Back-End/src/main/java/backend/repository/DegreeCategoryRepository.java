package backend.repository;

import backend.entity.DayOffCategory;
import backend.entity.DegreeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DegreeCategoryRepository extends JpaRepository<DegreeCategory, Integer> {
    @Query(value = "select * from phanloai_bangcap where UPPER(loai_bang_cap) = UPPER(?)", nativeQuery = true)
    DegreeCategory getByLoaiBangCap(String loaiBangCap);
}
