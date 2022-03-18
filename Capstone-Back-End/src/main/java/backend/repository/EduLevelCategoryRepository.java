package backend.repository;

import backend.entity.EduLevelCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EduLevelCategoryRepository extends JpaRepository<EduLevelCategory,Integer> {

    @Query(value = "select max(id) from phanloai_trinhdohocvan", nativeQuery = true)
    int getLastID();

}