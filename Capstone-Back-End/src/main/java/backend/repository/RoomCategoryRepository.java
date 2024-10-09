package backend.repository;

import backend.entity.RoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomCategoryRepository extends JpaRepository<RoomCategory,Integer> {
    @Query(value = "select * from hrm_b4t.phanloai_phonghoc where UPPER(ma_phong_hoc) = UPPER(?)", nativeQuery = true)
    RoomCategory getByMaPhongHoc(String maPhongHoc);
}
