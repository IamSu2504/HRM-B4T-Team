package backend.repository;

import backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    @Query(value = "select * from nhanvien n, account a, role r where n.ma_nv = a.ma_nv and a.role_id = r.id and r.role = 'Nhân viên'", nativeQuery = true)
    List<User> getAllEmployee();

    @Query(value = "select * from nhanvien where ho_chieu = ?", nativeQuery = true)
    User getByHoChieu(String hoChieu);

    @Query(value = "select * from nhanvien where email = ?", nativeQuery = true)
    User getByEmail(String email);

    @Query(value = "select * from nhanvien where so_atm = ?", nativeQuery = true)
    User getBySoAtm(String atm);

    @Query(value = "select * from nhanvien where so_dien_thoai = ?", nativeQuery = true)
    User getBySdt(String sdt);

    @Query(value = "select * from nhanvien where cccd = ?", nativeQuery = true)
    User getByCccd(String cccd);

    @Query(value = "select * from nhanvien where tai_khoan_nv = ?", nativeQuery = true)
    User getByUsername(String username);


}