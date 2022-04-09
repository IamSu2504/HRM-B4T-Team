package backend.repository;

import backend.entity.DayOffCategory;
import backend.entity.DepartmentCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentCategoryRepository extends JpaRepository<DepartmentCategory, Integer> {
    @Query(value = "select * from phanloai_phongban where UPPER(ma_phong_ban) = UPPER(?)", nativeQuery = true)
    DepartmentCategory getByMaPhongBan(String maPhongBan);
}
