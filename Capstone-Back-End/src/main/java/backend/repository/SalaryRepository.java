package backend.repository;

import backend.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.luongnhanvien where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    Salary getByMaHD(String maHopDong);

    @Query(value = "SELECT l.* FROM hrm_b4t.luongnhanvien l, hopdong h, nhanvien n\n" +
            "where l.ma_hop_dong = h.ma_hop_dong and h.ma_nv = n.ma_nv and n.ma_nv = ? order by l.ngay_hieu_luc desc LIMIT 1", nativeQuery = true)
    Salary getLast(String maNV);

    @Query(value = "SELECT * FROM luongnhanvien \n" +
            "WHERE id IN (SELECT MAX(id) FROM luongnhanvien group by ma_hop_dong ) and ngay_hieu_luc <= ? and (ngay_ket_thuc >= ? or ngay_ket_thuc is null)" , nativeQuery = true)
    List<Salary> getAllLuongThang(String ngayCuoiThang, String ngayDauThang);

    @Query(value = "select * from luongnhanvien where ma_hop_dong = ? and ngay_hieu_luc between ? and ?" , nativeQuery = true)
    Salary getLuongStartInRange(String maHopDong, String start, String end);

    @Query(value = "select * from luongnhanvien where ma_hop_dong = ? and ngay_ket_thuc between ? and ?" , nativeQuery = true)
    Salary getLuongEndInRange(String maHopDong, String start, String end);

    @Query(value = "select * from luongnhanvien where ma_hop_dong = ? and ngay_hieu_luc between ? and ? and id != ?" , nativeQuery = true)
    Salary getLuongStartInRange2(String maHopDong, String start, String end, int luongID);

    @Query(value = "select * from luongnhanvien where ma_hop_dong = ? and ngay_ket_thuc between ? and ? and id != ?" , nativeQuery = true)
    Salary getLuongEndInRange2(String maHopDong, String start, String end, int luongID);


}
