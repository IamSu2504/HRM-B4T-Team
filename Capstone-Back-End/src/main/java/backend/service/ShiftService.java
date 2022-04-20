package backend.service;

import backend.entity.Shift;
import backend.repository.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class ShiftService {

    @Autowired
    private ShiftRepository repo;

    public List<Shift> getAll() {
        return repo.getAll();
    }

    public String getCreateMessage(Shift shift) {
        repo.save(shift);
        return null;
    }

    public String getSaveShiftMessage(Shift shift) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            String shiftName = shift.getShiftCategory().getTenCa();

            // check teacher
            if (shift.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("giáo viên")) {

                if (shiftName.equalsIgnoreCase("Ca 8") || shiftName.equalsIgnoreCase("Ca 9") || shiftName.equalsIgnoreCase("Ca 10") || shiftName.equalsIgnoreCase("Ca 11")) {
                    return "Không thể đăng kí ca 8,9,10,11";
                }

                //---------- validate day total -------------------
                Integer dayTotal = repo.getDayTotal(sdf.format(shift.getDate()), shift.getUser().getId());
                if(dayTotal!=null) {
                    if (dayTotal > 10) {
                        return "Thời gian đăng kí tối đa trong 1 ngày là 10 tiếng";
                    }
                }
                //--------------------------------------------------

                //----------- validate week total ------------------
                Calendar cal = Calendar.getInstance();
                cal.add(Calendar.DATE, (shift.getDate().getDay() - 2) * (-1));
                Date monDay = cal.getTime();

                cal.add(Calendar.DATE, (10 - shift.getDate().getDay()));
                Date sunDay = cal.getTime();

                Integer totalWeek = repo.getWeekTotal(sdf.format(monDay), sdf.format(sunDay));
                if(totalWeek!=null) {
                    if (totalWeek > 50) {
                        return "Thời gian đăng kí tối đa trong 1 tuần là 50 tiếng";
                    }
                    if(totalWeek < 40){
                        return "Thời gian đăng kí tối thiểu trong 1 tuần là 40 tiếng";
                    }
                }
                //------------------------------------------------

                //------------ validate dublicate shift ----------
                Shift dublicateShift = repo.getShiftDateRoom(shift.getShiftCategory().getId(), sdf.format(shift.getDate()), shift.getRoom().getId());
                if (dublicateShift != null) {
                    if (dublicateShift.getUser().getId().equalsIgnoreCase(shift.getUser().getId())) {
                        return "Bạn đã đăng kí ca làm này";
                    } else {
                        if (shift.getUser().getChucVu().getMaChucVu().equals(dublicateShift.getUser().getChucVu().getMaChucVu())) {
                            return "Đã có người đăng kí ca làm này tại " + shift.getRoom().getTenPhongHoc();
                        }
                    }
                }
                //---------------------------------------------------

                // check not teacher
            } else {
                if (!shiftName.equalsIgnoreCase("Ca 8") && !shiftName.equalsIgnoreCase("Ca 9") && !shiftName.equalsIgnoreCase("Ca 10") && !shiftName.equalsIgnoreCase("Ca 11")) {
                    return "Bạn chỉ được đăng kí ca 8,9,10,11";
                }
            }

            //--------------- validate shift time ---------------
//            String tenCa = shift.getShiftCategory().getTenCa();
//            if (shift.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("teacher")) {
//                if (tenCa.equalsIgnoreCase("shift 1") || tenCa.equalsIgnoreCase("shift 2") || tenCa.equalsIgnoreCase("shift 3") || tenCa.equalsIgnoreCase("shift 4") || tenCa.equalsIgnoreCase("shift 5") || tenCa.equalsIgnoreCase("shift 6") || tenCa.equalsIgnoreCase("shift 7") || tenCa.equalsIgnoreCase("shift 8")) {
//                    String empID = shift.getUser().getId();
//                    String date = sdf.format(shift.getDate());
//                    if (repo.getConflictShifts(empID, date, "shift 1", "shift 5").size() == 2 || repo.getConflictShifts(empID, date, "shift 2", "shift 6").size() == 2 || repo.getConflictShifts(empID, date, "shift 3", "shift 7").size() == 2 || repo.getConflictShifts(empID, date, "shift 4", "shift 8").size() == 2) {
//                        return "Signing up these couples of shifts in a day is not permitted: shift 1 + shift 5, shift 2 + shift 6, shift 3 + shift 7, shift 4 + shift 8";
//                    }
//                }
//            }
//            else if(shift.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("teacher manager")){
//
//            }
            //-------------------------------------------------

            repo.save(shift);
            return "Đăng ký ca làm thành công";
        } catch (Exception e) {
            return "Lỗi nội bộ";
        }
    }

}

