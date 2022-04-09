package backend.repository;

import backend.entity.NationCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface NationCategoryRepository extends JpaRepository<NationCategory,Integer> {

    @Query(value = "select * from phanloai_quoctich where upper(quoc_tich) = upper(?)", nativeQuery = true)
    NationCategory getByQuocTich(String quocTich);

}