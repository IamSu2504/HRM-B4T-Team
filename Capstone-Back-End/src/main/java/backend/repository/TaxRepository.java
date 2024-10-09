package backend.repository;

import backend.entity.Tax;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxRepository extends JpaRepository<Tax, Integer> {

    @Query(value = "select * from thue where UPPER(ma_so_thue) = UPPER(?)", nativeQuery = true)
    Tax getByMaSoThue(String maSoThue);

    @Query(value = "select t from Tax t where t.idLoaiThue.maPhanLoai = :maLoai and t.maNV = :maNV")
    Tax getByLoai(@Param("maLoai") String maLoai, @Param("maNV") String maNV);

}
