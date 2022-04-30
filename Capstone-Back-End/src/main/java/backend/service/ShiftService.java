package backend.service;

import backend.entity.CreateUpdateShiftRequest;
import backend.entity.HolidayCategory;
import backend.entity.Shift;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class ShiftService {

    @Autowired
    private ShiftRepository shiftRepo;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private PositionCategoryRepository positionRepo;

    @Autowired
    private ShiftCategoryRepository shiftCategoryRepo;

    @Autowired
    private RoomCategoryRepository roomRepo;

    @Autowired
    private HolidayCategoryRepository holidayRepo;

    public List<Shift> getAll() {
        return shiftRepo.getAll();
    }

    public String getCreateMessage(CreateUpdateShiftRequest request) {
        return null;
    }

    public String getSaveShiftMessage(CreateUpdateShiftRequest request) {
        try {
            String mess = null;
            Shift newShift = getNewShift(request);
            String chucVu = positionRepo.getByMaNv(newShift.getEmployee().getId()).getTenChucVu();

            SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

            String shiftName = newShift.getShiftCategory().getTenCa();

            //------------ check if user is a teacher -------------------
            if (chucVu.equalsIgnoreCase("giáo viên")) {

                // check invalid shift
                List<Integer> listInvalidTeacherShifts = shiftRepo.getSpecialShifts();
                for (Integer invalidShiftID : listInvalidTeacherShifts) {
                    if (newShift.getShiftCategory().getId() == invalidShiftID) {
                        return "Giáo viên chỉ được đăng kí những ca có thời gian 2 tiếng";
                    }
                }

//                if (shiftName.equalsIgnoreCase("Ca 8") || shiftName.equalsIgnoreCase("Ca 9") || shiftName.equalsIgnoreCase("Ca 10") || shiftName.equalsIgnoreCase("Ca 11")) {
//                    return "Không thể đăng kí ca 8,9,10,11";
//                }

                //----------- check holiday ----------------------
                List<HolidayCategory> holidays = holidayRepo.findAll();
                for (HolidayCategory h : holidays) {
                    if (newShift.getDate() == h.getNgay()) {
                        return "Không được đăng kí ngày " + h.getTenNgayLe() + " " + sdf2.format(newShift.getDate());
                    }
                }

                //---------- validate day total -------------------
                Integer dayTotal = shiftRepo.getDayTotal(sdf1.format(newShift.getDate()), newShift.getEmployee().getId());
                if (dayTotal != null) {
                    if (dayTotal >= 10) {
                        return "Thời gian đăng kí tối đa trong 1 ngày là 10 tiếng";
                    }
                }

                //----------- validate week total ------------------
                int maxTotalInWeek = 50;
                int minTotalInWeek = 40;

                // get monday + sunday
                Calendar cal = Calendar.getInstance();
                cal.add(Calendar.DATE, (newShift.getDate().getDay() - 2) * (-1));
                Date monDay = cal.getTime();
                cal.add(Calendar.DATE, (10 - newShift.getDate().getDay()));
                Date sunDay = cal.getTime();

                // get totalWeek
                Integer totalWeek = shiftRepo.getWeekTotal(sdf1.format(monDay), sdf1.format(sunDay), newShift.getEmployee().getId());

                // update min + max total in week
                List<HolidayCategory> holidaysInWeek = holidayRepo.getNgayLeTrongKhoang(sdf1.format(monDay), sdf1.format(sunDay));
                maxTotalInWeek -= holidaysInWeek.size() * 8;
                minTotalInWeek -= holidaysInWeek.size() * 8;

                // check if no shift signed up in week
                if (totalWeek != null) {
                    if (totalWeek == maxTotalInWeek) {
                        return "Thời gian đăng kí tối đa trong tuần từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " là " + maxTotalInWeek;
                    }
                    if (totalWeek < minTotalInWeek) {
                        mess = "Vui lòng đăng kí thêm ca, tổng thời gian đăng kí tối thiểu trong tuần từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " là " + minTotalInWeek;
                    }
                }

                //------------- check dublicate shift -------------
                Shift dublicateShift = shiftRepo.getByShiftDateRoom(newShift.getShiftCategory().getId(), sdf1.format(newShift.getDate()), newShift.getRoom().getId());
                if (dublicateShift != null) {
                    if (dublicateShift.getEmployee().getId().equalsIgnoreCase(newShift.getEmployee().getId())) {
                        return "Bạn đã đăng kí ca làm này";
                    } else {
                        if (!newShift.getEmployee().getId().equalsIgnoreCase(dublicateShift.getEmployee().getId())) {
                            return "Giáo viên " + newShift.getEmployee().getTenNv() + "(" + newShift.getEmployee().getId() + ") đã đăng kí cùng ca làm tại " + newShift.getRoom().getTenPhongHoc() + " vào ngày " + request.getDate();
                        }
                    }
                }

                // check not teacher
            } else {

                if (chucVu.toLowerCase().contains("giám đốc") || chucVu.toLowerCase().contains("phó giám đốc")) {
                    return "Chức vụ giám đốc hoặc phó giám đốc không phải đăng kí ca làm";
                }

                List<HolidayCategory> holidays = holidayRepo.findAll();
                for (HolidayCategory h : holidays) {
                    if (newShift.getDate() == h.getNgay()) {
                        return "Không được đăng kí ngày " + sdf2.format(newShift.getDate() + " " + h.getTenNgayLe());
                    }
                }

                if (chucVu.toLowerCase().contains("nhân viên")) {
                    Integer dayTotal = shiftRepo.getDayTotal(sdf1.format(newShift.getDate()), newShift.getEmployee().getId());

                    //----------- validate day total --------------------
                    if (dayTotal != null) {
                        if (dayTotal >= 8) {
                            return "Thời gian đăng kí tối đa trong 1 ngày là 8 tiếng";
                        }
                    }

                    //----------- validate week total ------------------
                    int totalInWeek = 40;

                    // get monday + sunday
                    Calendar cal = Calendar.getInstance();
                    cal.add(Calendar.DATE, (newShift.getDate().getDay() - 2) * (-1));
                    Date monDay = cal.getTime();
                    cal.add(Calendar.DATE, (10 - newShift.getDate().getDay()));
                    Date sunDay = cal.getTime();

                    // get totalWeek
                    Integer totalWeek = shiftRepo.getWeekTotal(sdf1.format(monDay), sdf1.format(sunDay), newShift.getEmployee().getId());

                    // update min + max total in week
                    List<HolidayCategory> holidaysInWeek = holidayRepo.getNgayLeTrongKhoang(sdf1.format(monDay), sdf1.format(sunDay));
                    totalInWeek -= holidaysInWeek.size() * 8;

                    // check if no shift signed up in week
                    if (totalWeek != null) {
                        if (totalWeek < totalInWeek) {
                            mess = "Vui lòng đăng kí thêm ca, tổng thời gian đăng kí tối thiểu trong tuần từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " là " + totalInWeek;
                        }
                        if (totalWeek == totalInWeek) {
                            return "Tổng thời gian đăng kí tối đa trong tuần từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " là " + totalInWeek;
                        }
                    }
                }

                //--------- check invalid shift ------------
                boolean checkValidShift = false;
                List<Integer> listValidShifts = shiftRepo.getSpecialShifts();
                for (Integer validShiftID : listValidShifts) {
                    if (newShift.getShiftCategory().getId() == validShiftID) {
                        checkValidShift = true;
                        break;
                    }
                }
                if (!checkValidShift) {
                    return "Bạn chỉ được đăng kí những ca có thời gian hơn 2 tiếng";
                }

//                if (!shiftName.equalsIgnoreCase("Ca 8") && !shiftName.equalsIgnoreCase("Ca 9") && !shiftName.equalsIgnoreCase("Ca 10") && !shiftName.equalsIgnoreCase("Ca 11")) {
//                    return "Bạn chỉ được đăng kí ca 8,9,10,11";
//                }

                Shift dublicateShift = shiftRepo.getDublicateShift(newShift.getEmployee().getId(), newShift.getShiftCategory().getId(), sdf1.format(newShift.getDate()), newShift.getRoom().getId());
                if (dublicateShift != null) {
                    return "Bạn đã đăng kí cùng ca làm tại " + newShift.getRoom().getTenPhongHoc() + " vào ngày " + request.getDate();
                }
            }

//            String tenCa = shift.getShiftCategory().getTenCa();
//            if (shift.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("teacher")) {
//                if (tenCa.equalsIgnoreCase("shift 1") || tenCa.equalsIgnoreCase("shift 2") || tenCa.equalsIgnoreCase("shift 3") || tenCa.equalsIgnoreCase("shift 4") || tenCa.equalsIgnoreCase("shift 5") || tenCa.equalsIgnoreCase("shift 6") || tenCa.equalsIgnoreCase("shift 7") || tenCa.equalsIgnoreCase("shift 8")) {
//                    String empID = shift.getUser().getId();
//                    String date = sdf1.format(shift.getDate());
//                    if (repo.getConflictShifts(empID, date, "shift 1", "shift 5").size() == 2 || repo.getConflictShifts(empID, date, "shift 2", "shift 6").size() == 2 || repo.getConflictShifts(empID, date, "shift 3", "shift 7").size() == 2 || repo.getConflictShifts(empID, date, "shift 4", "shift 8").size() == 2) {
//                        return "Signing up these couples of shifts in a day is not permitted: shift 1 + shift 5, shift 2 + shift 6, shift 3 + shift 7, shift 4 + shift 8";
//                    }
//                }
//            }
//            else if(shift.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("teacher manager")){
//
//            }

            shiftRepo.save(newShift);
            return mess;
        } catch (Exception e) {
            return "Lỗi nội bộ";
        }
    }

    public Shift getNewShift(CreateUpdateShiftRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            Shift s = new Shift();
            s.setId(request.getId());
            s.setEmployee(empRepo.findById(request.getUserID()).get());
            s.setDate(sdf.parse(request.getDate()));
            s.setShiftCategory(shiftCategoryRepo.findById(request.getShiftCategoryID()).get());
            s.setNote(request.getNote());
            s.setRoom(roomRepo.findById(request.getRoomID()).get());

            if (request.getAccepted() != null)
                s.setAccepted(request.getAccepted());

            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public Shift getById(int id){
        if(shiftRepo.findById(id).isPresent()){
            return shiftRepo.findById(id).get();
        }
        else{
            return null;
        }
    }

}

