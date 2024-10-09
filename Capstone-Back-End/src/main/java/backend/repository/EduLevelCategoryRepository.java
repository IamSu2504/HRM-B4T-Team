package backend.repository;

import backend.entity.DayOffCategory;
import backend.entity.EduLevelCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EduLevelCategoryRepository extends JpaRepository<EduLevelCategory,Integer> {
    @Query(value = "select * from phanloai_trinhdohocvan where UPPER(trinh_do) = UPPER(?)", nativeQuery = true)
    EduLevelCategory getByTrinhDo(String trinhDo);

}