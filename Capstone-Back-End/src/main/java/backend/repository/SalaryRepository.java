package backend.repository;

import backend.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Integer> {

    @Query(value = "SELECT * FROM hrm_b4t.luongnhanvien where Upper(ma_hop_dong) =  UPPER(?)", nativeQuery = true)
    Salary getByMaHD(String maHopDong);
}
