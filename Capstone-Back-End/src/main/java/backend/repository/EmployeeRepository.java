package backend.repository;

import backend.entity.ContractCategory;
import backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,String> {

    @Query(value = "SELECT ma_nv FROM nhanvien order by ma_nv desc LIMIT 1", nativeQuery = true)
    String getLastID();

    @Query(value = "select * from nhanvien where ho_chieu = ?", nativeQuery = true)
    Employee getByHoChieu(String hoChieu);

    @Query(value = "select * from nhanvien where email = ?", nativeQuery = true)
    Employee getByEmail(String email);

    @Query(value = "select * from nhanvien where so_atm = ?", nativeQuery = true)
    Employee getBySoAtm(String atm);

    @Query(value = "select * from nhanvien where so_dien_thoai = ?", nativeQuery = true)
    Employee getBySdt(String sdt);

    @Query(value = "select * from nhanvien where cccd = ?", nativeQuery = true)
    Employee getByCccd(String cccd);

    @Query(value = "select e from Employee e where e.tinhChatHopDong.tinhChatHopDong like %?1%" +
            " or e.atmNganHang like %?1% " +
            " or e.cccd like %?1% " +
            " or e.diaChiTamTru like %?1% " +
            " or e.diaChiThuongTru like %?1% " +
            " or e.email like %?1% " +
            " or e.hoChieu like %?1% " +
            " or e.lyDoNghi like %?1% " +
            " or e.noiCapCccd like %?1% " +
            " or e.noiCapHoChieu like %?1% " +
            " or e.noiSinh like %?1% " +
            " or e.queQuan like %?1% " +
            " or e.quocTich.quocTich like %?1% " +
            " or e.atmNganHang like %?1% " +
            " or e.soAtm like %?1% " +
            " or e.soDienThoai like %?1% " +
            " or e.soDienThoai2 like %?1% " +
            " or e.tenNv like %?1% " +
            " or e.tinhTrangHonNhan.tinhTrang like %?1% "
    )
    List<Employee> getSearched(String text);


}