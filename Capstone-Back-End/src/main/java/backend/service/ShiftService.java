package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
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
            String mess = null;
            Shift newShift = getNewShift(request);

            if(positionRepo.getByMaNv(newShift.getEmployee().getId())==null){
                return "Không thể đăng kí do mã nhân viên " + request.getId() + " hiện chưa có chức vụ. Vui lòng thêm quá trình công tác cho nhân viên này";
            }
            String chucVu = positionRepo.getByMaNv(newShift.getEmployee().getId()).getTenChucVu();

            SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

            String shiftName = newShift.getShiftCategory().getTenCa();

            //------------ check if user is a teacher -------------------
            if (chucVu.toLowerCase().contains("giáo viên")) {

                Employee gv = empRepo.getById(request.getUserID());

                //----------- check holiday ----------------------
                List<HolidayCategory> holidays = holidayRepo.findAll();
                for (HolidayCategory h : holidays) {
                    if (newShift.getDate() == h.getNgay()) {
                        return "Không thể đăng kí ngày " + sdf2.format(newShift.getDate()) + "("+h.getTenNgayLe()+")";
                    }
                }

                //---------- validate day total -------------------
                Integer dayTotal = shiftRepo.getDayTotal(sdf1.format(newShift.getDate()), newShift.getEmployee().getId());
                if (dayTotal != null) {
                    if (dayTotal >= 10) {
                        return "Giáo viên "+gv.getTenNv() + "("+gv.getId()+ ")"+" đã đăng kí tối đa trong 1 ngày là 10 tiếng. Không thể đăng kí thêm";
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
                        return "Thời gian đăng kí tối đa trong tuần của giáo viên "+gv.getTenNv()+"("+gv.getId()+")"+" từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " đã đạt đến tối đa là " + maxTotalInWeek + " giờ";
                    }
                    if (totalWeek < minTotalInWeek) {
                        mess = "Vui lòng đăng kí thêm ca, tổng thời gian đăng kí tối thiểu của giáo viên "+gv.getTenNv()+"("+gv.getId()+")"+" trong tuần từ " + sdf2.format(monDay) + " đến " + sdf2.format(sunDay) + " là " + minTotalInWeek;
                    }
                }

                //------------- check dublicate shift -------------
                Shift dublicateShift = shiftRepo.getDublicateShift(newShift.getShiftCategory().getId(), sdf1.format(newShift.getDate()), newShift.getRoom().getId());
                if (dublicateShift != null) {
                    if (dublicateShift.getEmployee().getId().equalsIgnoreCase(newShift.getEmployee().getId())) {
                        return "Bạn đã đăng kí ca làm này";
                    } else {
                        if (!newShift.getEmployee().getId().equalsIgnoreCase(dublicateShift.getEmployee().getId())) {
                            return "Giáo viên " + newShift.getEmployee().getTenNv() + "(" + newShift.getEmployee().getId() + ") đã đăng kí cùng ca làm tại " + newShift.getRoom().getTenPhongHoc() + " vào ngày " + request.getDate();
                        }
                    }
                }

                shiftRepo.save(newShift);
                return mess;
                // check not teacher
            } else {
                return "Chỉ giáo viên được đăng kí ca làm";
            }
            }catch (Exception e) {
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
            if(request.getMaNv()==null) {
                for (int j = 1; j <= 7; j++) {
                    c.add(Calendar.DAY_OF_WEEK, 1);
                    s = shiftRepo.getShift(i, request.getIdPhong(), sdf.format(c.getTime()));
                    shifts.add(s);
                }
            }
            else{
                for (int j = 1; j <= 7; j++) {
                    c.add(Calendar.DAY_OF_WEEK, 1);
                    s = shiftRepo.getShift(i, request.getIdPhong(), sdf.format(c.getTime()), request.getMaNv());
                    shifts.add(s);
                }
            }
        }
        return shifts;
    }

}

