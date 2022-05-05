package backend.repository;

import backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, String> {

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
}
