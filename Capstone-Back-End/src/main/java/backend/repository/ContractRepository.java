package backend.repository;

import backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

    @Query(value = "SELECT ma_hop_dong FROM hopdong order by ma_hop_dong desc LIMIT 1", nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT * FROM hopdong where ma_nv = ? order by ngay_hieu_luc desc", nativeQuery = true)
    List<Contract> getAllByEmp(String empID);

    @Query(value = "SELECT * FROM hopdong where ma_hop_dong = ?", nativeQuery = true)
    List<Contract> getByContractID(String empID);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han >= ? and ngay_het_han <= ? and trang_thai = true", nativeQuery = true)
    List<Contract> getListReportContract(String start,String end);

    @Query(value = "SELECT * FROM hopdong where ngay_hieu_luc between ? and ? and ma_nv=?", nativeQuery = true)
    Contract getContractStartInRange(String start,String end,String maNV);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han between ? and ? and ma_nv=?", nativeQuery = true)
    Contract getContractEndInRange(String start,String end,String maNV);

    @Query(value = "SELECT * FROM hopdong where ngay_hieu_luc between ? and ? and ma_nv=? and ma_hop_dong != ?", nativeQuery = true)
    Contract getContractStartInRange2(String start,String end,String maNV,String maHD);

    @Query(value = "SELECT * FROM hopdong where ngay_het_han between ? and ? and ma_nv=? and ma_hop_dong != ?", nativeQuery = true)
    Contract getContractEndInRange2(String start,String end,String maNV,String maHD);

    @Query(value = "SELECT c FROM Contract c where c.maNV = ?3 and ((c.ngayHieuLuc between ?1 and ?2) or (c.ngayHetHan between ?1 and ?2))")
    Contract getContractInRange(Date start,Date end,String empID);
}
