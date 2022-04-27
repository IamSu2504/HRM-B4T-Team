package backend.repository;

import backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,String> {

    @Query(value = "select * from nhanvien n, account a, role r where n.ma_nv = a.ma_nv and a.role_id = r.id and r.role = 'Nhân viên'", nativeQuery = true)
    List<Employee> getAllEmployee();

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

    @Query(value = "select * from nhanvien where tai_khoan_nv = ?", nativeQuery = true)
    Employee getByUsername(String username);

    @Query(value = "select cv.ten_chuc_vu from nhanvien n, quatrinhcongtac ct, phanloai_chucvu cv\n" +
            "where n.ma_nv = ct.ma_nv and ct.id_chuc_vu = cv.id\n" +
            "and ct.trang_thai = true and n.ma_nv = ?", nativeQuery = true)
    String getChucVu(String maNv);

    


}