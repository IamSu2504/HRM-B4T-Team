package backend.repository;

import backend.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.luongnhanvien where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    Salary getByMaHD(String maHopDong);

    @Query(value = "select lnv.* from luongnhanvien lnv, hopdong hd\n" +
            "where lnv.ma_hop_dong = hd.ma_hop_dong\n" +
            "and hd.ma_nv = ? and lnv.ngay_ket_thuc >= ? and lnv.ngay_hieu_luc <= ? and lnv.trang_thai = 1" , nativeQuery = true)
    Salary getLuongThangTheoNvien(String maNv, String ngayDauThang, String ngayCuoiThang);

    @Query(value = "SELECT * from luongnhanvien l where l.ngay_hieu_luc <= ? and ( l.ngay_ket_thuc >= ? or l.ngay_ket_thuc is null)" , nativeQuery = true)
    List<Salary> getAllLuongThang(String ngayCuoiThang, String ngayDauThang);

    @Query(value = "SELECT * from luongnhanvien l where l.ngay_hieu_luc <= ? and ( l.ngay_ket_thuc >= ? or l.ngay_ket_thuc is null)" , nativeQuery = true)
    List<Salary> getLuongThangByPhongBan(String ngayCuoiThang, String ngayDauThang);

    @Query(value = "SELECT * from luongnhanvien l where l.ngay_hieu_luc <= ? and ( l.ngay_ket_thuc >= ? or l.ngay_ket_thuc is null)" , nativeQuery = true)
    List<Salary> getLuongTruoc(String ngayCuoiThang, String ngayDauThang);


}
