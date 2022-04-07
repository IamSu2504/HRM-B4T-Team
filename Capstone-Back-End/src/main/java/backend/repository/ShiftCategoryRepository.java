package backend.repository;

import backend.entity.ShiftCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftCategoryRepository extends JpaRepository<ShiftCategory,Integer> {

    @Query(value = "select * from phanloai_calam where ten_ca = ?", nativeQuery = true)
    ShiftCategory getByTenCaLam(String tenCa);

}
