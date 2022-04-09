package backend.repository;

import backend.entity.SalaryEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryEmployeeRepository extends JpaRepository<SalaryEmployee, Integer> {
    @Query(value = "SELECT * FROM hrm_b4t.luongnhanvien where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    SalaryEmployee getByMaHD(String maHD);
}
