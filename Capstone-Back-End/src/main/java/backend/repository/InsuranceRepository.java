package backend.repository;

import backend.entity.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Integer> {

    @Query(value = "select * from baohiem where UPPER(ma_so_bh) = UPPER(?)", nativeQuery = true)
    Insurance getByMaSoBH(String maSoBH);

    @Query(value = "select h from Insurance h where h.idLoaiBH.maBH = :maBH and h.maNV = :maNV")
    Insurance getByLoai(@Param("maBH") String maBH, @Param("maNV") String maNV);
}
