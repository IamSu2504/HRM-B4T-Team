package backend.repository;

import backend.entity.SalaryGroupCategory;
import backend.entity.ShiftCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryGroupCategoryRepository extends JpaRepository<SalaryGroupCategory, Integer> {

    @Query(value = "select * from phanloai_nhomluong where upper(ma_nhom_luong) = upper(?)", nativeQuery = true)
    SalaryGroupCategory getByMaNhomLuong(String maNhomLuong);

}
