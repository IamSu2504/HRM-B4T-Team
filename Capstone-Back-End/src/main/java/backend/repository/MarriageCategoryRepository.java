package backend.repository;

import backend.entity.EduLevelCategory;
import backend.entity.MarriageCategory;
import backend.entity.NationCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface MarriageCategoryRepository extends JpaRepository<MarriageCategory,Integer> {

    @Query(value = "select * from phanloai_tinhtranghonnhan where upper(tinh_trang) = upper(?)", nativeQuery = true)
    MarriageCategory getByTinhTrang(String tinhTrang);

}