package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.util.*;

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

    public String getSaveShiftMessage(CreateUpdateShiftRequest request) {
        try {
            String mess = "";
            SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
            sdf1.setTimeZone(TimeZone.getTimeZone("UTC"));
            SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");
            sdf2.setTimeZone(TimeZone.getTimeZone("UTC"));
            Shift newShift = getNewShift(request);

            // get first+last of current month
            Calendar calendar = Calendar.getInstance();
            calendar.set(YearMonth.now().getYear(), newShift.getDate().getMonth() - 1, 1);
            calendar.set(Calendar.DAY_OF_MONTH, 1);
            String monthFirst = sdf1.format(calendar.getTime());
            calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
            String monthEnd = sdf1.format(calendar.getTime());

            // check emp existed
            if (!empRepo.findById(newShift.getEmployee().getId()).isPresent()) {
                return "Employee ID " + newShift.getEmployee().getId() + " not existed";
            }

            // check leaved
            Employee e = empRepo.findById(newShift.getEmployee().getId()).get();
            if (e.getNgayNghiViec() != null && e.getNgayNghiViec().compareTo(newShift.getDate()) <= 0) {
                return "Employee " + e.getTenNv() + "(" + newShift.getEmployee().getId() + ") has leaved";
            }

            if (positionRepo.getByMaNvInRange(newShift.getEmployee().getId(), monthFirst, monthEnd) == null) {
                e = empRepo.findById(newShift.getEmployee().getId()).get();
                return "Employee " + e.getTenNv() + "(" + request.getId() + ") has no position from " + monthFirst + " to " + monthEnd + ". Please update this employee's position";
            }
            String chucVu = positionRepo.getByMaNvInRange(newShift.getEmployee().getId(), monthFirst, monthEnd).getTenChucVu();

            //------------ check if user is a teacher -------------------
            if (chucVu.toLowerCase().contains("teacher")) {

                Employee gv = empRepo.getById(request.getUserID());

                //----------- check holiday ----------------------
                List<HolidayCategory> holidays = holidayRepo.findAll();
                for (HolidayCategory h : holidays) {
                    if (newShift.getDate() == h.getNgay()) {
                        return "Unable to add new shift in " + sdf2.format(newShift.getDate()) + "(" + h.getTenNgayLe() + ")";
                    }
                }

                //---------- validate day total -------------------
                Integer dayTotal = shiftRepo.getDayTotal(sdf1.format(newShift.getDate()), newShift.getEmployee().getId());
                if (dayTotal != null) {
                    if (dayTotal >= 10) {
                        return "Teacher " + gv.getTenNv() + "(" + gv.getId() + ")" + " has maximum(5) shifts in " + sdf2.format(newShift.getDate()) + ". Register failed";
                    }
                }

                //----------- validate week total ------------------
                int maxTotalInWeek = 25;
                int minTotalInWeek = 20;

                // get monday + sunday
                Calendar cal = Calendar.getInstance();
                cal.add(Calendar.DATE, (newShift.getDate().getDay() - 2) * (-1));
                Date monDay = cal.getTime();
                cal.add(Calendar.DATE, (10 - newShift.getDate().getDay()));
                Date sunDay = cal.getTime();

                // get totalWeek
                Integer totalInWeek = shiftRepo.getTotalShiftInRange(sdf1.format(monDay), sdf1.format(sunDay), newShift.getEmployee().getId());

                // update min + max total in week
//                List<HolidayCategory> holidaysInWeek = holidayRepo.getNgayLeTrongKhoang(sdf1.format(monDay), sdf1.format(sunDay));
//                maxTotalInWeek -= holidaysInWeek.size() * 4;
//                minTotalInWeek -= holidaysInWeek.size() * 4;

                if (totalInWeek != null) {
                    if (totalInWeek == maxTotalInWeek) {
                        return "Teacher " + gv.getTenNv() + "(" + gv.getId() + ")" + " has maximum(" + maxTotalInWeek + ") shifts in the week from " + sdf2.format(monDay) + " to " + sdf2.format(sunDay) + ". Register failed";
                    }
//                    if (totalInWeek < minTotalInWeek) {
//                        mess = "Teacher " + gv.getTenNv() + "(" + gv.getId() + ")" + " doesn't in the week from " + sdf2.format(monDay) + " to " + sdf2.format(sunDay) + " is " + minTotalInWeek;
//                    }
                }

                //------------- check dublicate shift -------------
                Shift dublicateShift = shiftRepo.getDublicateShift(newShift.getShiftCategory().getId(), sdf1.format(newShift.getDate()), newShift.getRoom().getId());
                if (dublicateShift != null) {
                    return "Teacher " + newShift.getEmployee().getTenNv() + "(" + newShift.getEmployee().getId() + ") registered the same shift in " + newShift.getRoom().getTenPhongHoc() + " in " + sdf2.format(sdf1.parse(request.getDate()));
                }

                shiftRepo.save(newShift);
                return "Shift registered successfully. " + mess;
                // check not teacher
            } else {
                return "Position of employee " + newShift.getEmployee().getTenNv() + "(" + newShift.getEmployee().getId() + ") in " + sdf2.format(newShift.getDate()) + " is not teacher. Register failed";
            }
        } catch (Exception e) {
            return "Internal server error";
        }
    }

    public Shift getNewShift(CreateUpdateShiftRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            Shift s = new Shift();
            s.setId(request.getId());
            s.setEmployee(empRepo.findById(request.getUserID()).get());
            s.setDate(sdf.parse(request.getDate()));
            s.setShiftCategory(shiftCategoryRepo.findById(request.getShiftCategoryID()).get());
            s.setRoom(roomRepo.findById(request.getRoomID()).get());

            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public Shift getById(int id) {
        if (shiftRepo.findById(id).isPresent()) {
            return shiftRepo.findById(id).get();
        } else {
            return null;
        }
    }

    public List<Shift> getTable(ShiftTableRequest request) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<Shift> shifts = new ArrayList<>();
        Calendar c = Calendar.getInstance();

        int totalShiftCategory = shiftCategoryRepo.findAll().size();
        if (totalShiftCategory == 0)
            return null;

        Shift s = new Shift();
        for (int i = 1; i <= totalShiftCategory; i++) {
            c.setTime(request.getNgayTu());
            if (request.getMaNv() == null) {
                for (int j = 1; j <= 7; j++) {
                    c.add(Calendar.DAY_OF_WEEK, 1);
                    s = shiftRepo.getShift(i, request.getIdPhong(), sdf.format(c.getTime()));
                    shifts.add(s);
                }
            } else {
                for (int j = 1; j <= 7; j++) {
                    c.add(Calendar.DAY_OF_WEEK, 1);
                    s = shiftRepo.getShift(i, request.getIdPhong(), sdf.format(c.getTime()), request.getMaNv());
                    shifts.add(s);
                }
            }
        }
        return shifts;
    }

    public int getEmployeeTotalShiftInMonth(String empID, int month) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Calendar calendar = Calendar.getInstance();
        calendar.set(YearMonth.now().getYear(), month - 1, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        String firstOfMonth = sdf.format(calendar.getTime());
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        String lastOfMonth = sdf.format(calendar.getTime());

        Integer total = shiftRepo.getTotalShiftInRange(firstOfMonth, lastOfMonth, empID);
        if (total == null) {
            return 0;
        } else {
            return total;
        }
    }
}

