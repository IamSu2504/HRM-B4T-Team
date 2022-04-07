package backend.repository;

import backend.entity.SpecializeCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecializeCategoryRepository extends JpaRepository<SpecializeCategory,Integer> {

    @Query(value = "select * from phanloai_chuyenmon where upper(ma_chuyen_mon) = upper(?)", nativeQuery = true)
    SpecializeCategory getByMaChuyenMon(String maChuyenMon);
}
