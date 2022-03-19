package backend.repository;

import backend.entity.NationCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface NationCategoryRepository extends JpaRepository<NationCategory,Integer> {

    @Query(value = "select max(id) from phanloai_quoctich", nativeQuery = true)
    int getLastID();

}