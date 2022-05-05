package backend.repository;

import backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

    @Query(value = "SELECT * FROM hrm_b4t.hopdong where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    Contract getByMaHD(String maHD);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han >= ? and ngay_het_han <= ? and trang_thai = true", nativeQuery = true)
    List<Contract> getListReportContract(String start,String end);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han between ? and ? and trang_thai = true", nativeQuery = true)
    List<Contract> getContractStartInRange(String start,String end);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han between ? and ? and trang_thai = true", nativeQuery = true)
    List<Contract> getContractEndInRange(String start,String end);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han >= ? and trang_thai = true", nativeQuery = true)
    Contract getContractExisted(String toDay);

    @Query(value = "SELECT * FROM hopdong where ma_nv = ? and ngay_hieu_luc = ? and trang_thai = true", nativeQuery = true)
    List<Contract> getEmployeeLastestContract(String empID,String maxStart);

    @Query(value = "select max(ngay_hieu_luc) from hopdong where ma_nv = ? ", nativeQuery = true)
    Date getEmployeeMaxStart(String empID);

}
