package backend.repository;

import backend.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<Shift,Integer> {

    @Query(value = "SELECT * from dangkicalam order by ngay desc", nativeQuery = true)
    List<Shift> getAll();

    @Query(value = "SELECT sum(TIMESTAMPDIFF(HOUR, p.gio_bat_dau, p.gio_ket_thuc))\n" +
            "FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ngay = ? and d.ma_nv = ?", nativeQuery = true)
    Integer getDayTotal(String date, String empID);

    @Query(value = "SELECT sum(TIMESTAMPDIFF(HOUR, p.gio_bat_dau, p.gio_ket_thuc))\n" +
            "FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ngay between ? and ? and d.ma_nv = \"NV0001\"", nativeQuery = true)
    Integer getWeekTotal(String monDay, String sunDay);

    @Query(value = "SELECT * FROM dangkicalam d, phanloai_calam p\n" +
            "where d.id_calam = p.id and d.id_calam = ? and  d.ngay = ? and d.id_phong = ?", nativeQuery = true)
    Shift getShiftDateRoom(int shiftID, String date, int roomID);

    @Query(value = "SELECT d.* FROM dangkicalam d, phanloai_calam p where d.id_calam = p.id and d.ma_nv = ? and d.ngay = ? and (p.ten_ca in(?,?))", nativeQuery = true)
    List<Shift> getConflictShifts(String empID, String date, String shift1, String shift2);

}