package backend.repository;

import backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

    @Query(value = "SELECT * FROM hrm_b4t.hopdong where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    Contract getByMaHD(String maHD);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han >= ? and ngay_het_han <= ? and trang_thai = true", nativeQuery = true)
    List<Contract> getListReportContract(String start,String end);
}
