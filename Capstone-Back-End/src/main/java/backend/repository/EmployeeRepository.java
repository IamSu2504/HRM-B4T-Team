package backend.repository;

import backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,String> {

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

}