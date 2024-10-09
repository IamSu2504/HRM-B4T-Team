package backend.repository;

import backend.entity.DayOff;
import backend.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Integer> {

    @Query(value = "SELECT * FROM dangkinghi d, phanloai_calam p\n" +
            "where d.id_ca = p.id and d.id_ca = ? and  d.ngay = ?", nativeQuery = true)
    LeaveRequest getByShiftDate(Integer shiftID, String date);

    @Query(value = "SELECT * FROM dangkinghi d, phanloai_calam p, phanloai_ngaynghi n \n" +
            "where d.id_ca = p.id and d.id_loai_nghi = n.id and d.ma_nv = ? and  d.id_ca = ? and  d.ngay = ? and n.id = ?", nativeQuery = true)
    LeaveRequest getDublicateLeaveRequest(String maNV, int shiftID, String date, int idNghi);

    @Query(value ="select * from hrm_b4t.dangkinghi where UPPER(ma_nv) =  UPPER(?) and ngay between ? and ?", nativeQuery = true)
    List<LeaveRequest> getByMaNVInRange(String maNV, String start, String end);


}
