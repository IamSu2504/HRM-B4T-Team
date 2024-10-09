package backend.repository;

import backend.entity.Employee;
import backend.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<Shift,Integer> {

    @Query(value = "SELECT * from dangkicalam order by ngay desc", nativeQuery = true)
    List<Shift> getAll();

    @Query(value = "SELECT sum(TIMESTAMPDIFF(HOUR, p.gio_bat_dau, p.gio_ket_thuc))\n" +
            "FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ngay = ? and d.ma_nv = ?", nativeQuery = true)
    Integer getDayTotal(String date, String empID);

    @Query(value = "SELECT sum(TIMESTAMPDIFF(HOUR, p.gio_bat_dau, p.gio_ket_thuc))\n" +
            "FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ngay between ? and ? and d.ma_nv = ?", nativeQuery = true)
    Integer getWeekTotal(String monDay, String sunDay, String empID);

    @Query(value = "SELECT * FROM dangkicalam d, phanloai_calam p\n" +
            "where d.id_calam = p.id and d.id_calam = ? and  d.ngay = ? and d.id_phong = ?", nativeQuery = true)
    Shift getDublicateShift(int shiftID, String date, int roomID);

    @Query(value = "SELECT sum(TIMESTAMPDIFF(HOUR, p.gio_bat_dau, p.gio_ket_thuc))\n" +
            "FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ngay between ? and ? and d.ma_nv = ? and d.xet_duyet = true", nativeQuery = true)
    Integer getAcceptedHourInRange(String startDate, String endDate, String empID);

    @Query(value = "SELECT * FROM dangkicalam where id_calam = ? and id_phong = ? and ngay = ?", nativeQuery = true)
    Shift getShift(int shiftID, int roomID, String date);

    @Query(value = "SELECT * FROM dangkicalam where id_calam = ? and id_phong = ? and ngay = ? and ma_nv = ?", nativeQuery = true)
    Shift getShift(int shiftID, int roomID, String date, String empID);

    @Query(value = "SELECT count(*)\n" +
            "FROM dangkicalam d where d.ngay between ? and ? and d.ma_nv = ?", nativeQuery = true)
    Integer getTotalShiftInRange(String first, String last, String empID);

}