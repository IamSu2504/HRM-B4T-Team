package backend.repository;

import backend.entity.CertificateCategory;
import backend.entity.ClassRoomCategory;
import backend.entity.ContractCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractCategoryRepository extends JpaRepository<ContractCategory,Integer> {
    @Query(value = "select * from phanloai_hopdong where UPPER(ma_loai_hop_dong) = UPPER(?)", nativeQuery = true)
    ContractCategory getByMaLoaiHopDong(String maLoaiHopDong);
}
