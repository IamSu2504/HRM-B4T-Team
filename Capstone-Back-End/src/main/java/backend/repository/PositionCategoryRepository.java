package backend.repository;

import backend.entity.PositionCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionCategoryRepository extends JpaRepository<PositionCategory, Integer> {

    @Query(value = "select * from phanloai_chucvu where upper(ma_chuc_vu) = upper(?)", nativeQuery = true)
    PositionCategory getByMaChucVu(String maChucVu);

    @Query(value = "select * from phanloai_chucvu where upper(ten_chuc_vu) = upper(?)", nativeQuery = true)
    PositionCategory getByTenChucVu(String maChucVu);



}
