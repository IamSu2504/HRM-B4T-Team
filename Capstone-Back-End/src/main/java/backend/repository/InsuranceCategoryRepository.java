package backend.repository;

import backend.entity.DayOffCategory;
import backend.entity.InsuranceCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceCategoryRepository extends JpaRepository<InsuranceCategory, Integer> {
    @Query(value = "select * from phanloai_baohiem where UPPER(ma_bh) = UPPER(?)", nativeQuery = true)
    InsuranceCategory getByMaBH(String maBH);
}
