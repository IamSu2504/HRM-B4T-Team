package backend.repository;

import backend.entity.RewardDisciplineCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RewardDisciplineCategoryRepository extends JpaRepository<RewardDisciplineCategory, Integer> {

    @Query(value = "select * from phanloai_khenthuongkiluat where upper(danh_muc) = upper(?)", nativeQuery = true)
    RewardDisciplineCategory getByDanhMuc(String danhMuc);
}
