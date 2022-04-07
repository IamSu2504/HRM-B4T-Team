package backend.repository;

import backend.entity.SalaryCategory;
import backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryCategoryRepository extends JpaRepository<SalaryCategory, Integer> {

    @Query(value = "select * from phanloai_bacluong where ma_bac_luong = ?", nativeQuery = true)
    SalaryCategory getByMaBacLuong(String maBacLuong);

    @Query(value = "select * from phanloai_bacluong where ten_bac_luong = ?", nativeQuery = true)
    SalaryCategory getByTenBacLuong(String tenBacLuong);

}
