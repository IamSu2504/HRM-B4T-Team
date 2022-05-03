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

    @Query(value = "select cv.* from quatrinhcongtac ct, phanloai_chucvu cv\n" +
            "where ct.id_chuc_vu = cv.id\n" +
            "and ct.ma_nv = ? and ct.ngay_ra >= ? and ct.ngay_vao <= ?", nativeQuery = true)
    PositionCategory getByMaNvInRange(String maNV,String start, String end);

}
