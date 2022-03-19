package backend.repository;

import backend.entity.EduLevelCategory;
import backend.entity.MarriageCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface MarriageCategoryRepository extends JpaRepository<MarriageCategory,Integer> {

    @Query(value = "select max(id) from phanloai_tinhtranghonnhan", nativeQuery = true)
    int getLastID();

}