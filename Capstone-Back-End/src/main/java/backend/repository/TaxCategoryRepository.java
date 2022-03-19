package backend.repository;

import backend.entity.MarriageCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TaxCategoryRepository extends JpaRepository<TaxCategory,Integer> {

    @Query(value = "select max(id) from phanloai_thue", nativeQuery = true)
    int getLastID();

}