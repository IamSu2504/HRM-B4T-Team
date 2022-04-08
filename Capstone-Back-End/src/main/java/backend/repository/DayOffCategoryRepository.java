package backend.repository;

import backend.entity.ClassRoomCategory;
import backend.entity.DayOffCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DayOffCategoryRepository extends JpaRepository<DayOffCategory, Integer> {
    @Query(value = "select * from phanloai_ngaynghi where UPPER(loai_nghi) = UPPER(?)", nativeQuery = true)
    DayOffCategory getByLoaiNghi(String loaiNghi);
}
