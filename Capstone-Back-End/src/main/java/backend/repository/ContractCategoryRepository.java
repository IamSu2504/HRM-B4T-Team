package backend.repository;

import backend.entity.CertificateCategory;
import backend.entity.ContractCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractCategoryRepository extends JpaRepository<ContractCategory,Integer> {
    @Query(value = "select * from phanloai_hopdong where UPPER(ma_loai_hop_dong) = UPPER(?)", nativeQuery = true)
    ContractCategory getByMaLoaiHopDong(String maLoaiHopDong);

    @Query(value = "select c from ContractCategory c where c.maLoaiHopDong like %?1% or" +
            " c.tenLoaiHopDong like %?1% ")
    List<ContractCategory> getSearched(String text);
}
