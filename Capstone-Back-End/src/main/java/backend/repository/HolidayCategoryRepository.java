package backend.repository;

import backend.entity.DayOffCategory;
import backend.entity.HolidayCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HolidayCategoryRepository extends JpaRepository<HolidayCategory,Integer> {
    @Query(value = "select * from phanloai_ngaynghile where UPPER(ten_ngay_le) = UPPER(?)", nativeQuery = true)
    DayOffCategory getByTenNgayLe(String tenNgayLe);

    @Query(value = "SELECT * FROM hrm_b4t.phanloai_ngaynghile where ngay >= ? and ngay <= ?", nativeQuery = true)
    List<HolidayCategory> getNgayLeTrongKhoang(String ngayTu, String ngayDen);


}
