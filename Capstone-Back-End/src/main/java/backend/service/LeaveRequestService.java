package backend.service;

import backend.entity.*;
import backend.repository.*;
import backend.repository.PositionCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.util.Calendar;
import java.util.List;

@Service
public class LeaveRequestService {

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private DayOffCategoryRepository dayOffRepository;

    @Autowired
    private ShiftCategoryRepository shiftCategoryRepository;

    @Autowired
    private HolidayCategoryRepository holidayCategoryRepository;

    @Autowired
    private WorkingProcessRepository workingProcessRepository;

    @Autowired
    private PositionCategoryRepository positionRepo;

    @Autowired
    private DayOffRepository dORepo;

    public List<LeaveRequest> getAll() {
        return leaveRequestRepository.findAll();
    }

    public String createLeaveRequest(CreateUpdateLeaveRequest request) {
        try {
            String mess = null;
            LeaveRequest newLeave = getNewLeaveRequest(request);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

            // get first+last of current month
            Calendar calendar = Calendar.getInstance();
            calendar.set(YearMonth.now().getYear(), sdf2.parse(request.getDate()).getMonth()-1,1);
            calendar.set(Calendar.DAY_OF_MONTH, 1);
            String monthFirst = sdf.format(calendar.getTime());
            calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
            String monthEnd = sdf.format(calendar.getTime());
            //update
            if(newLeave.getId() != null) {
                // check emp existed
                if (!empRepo.findById(request.getUser()).isPresent()) {
                    return "Employee number " + request.getUser() + " doesn't exist";
                }

                // check leaved
                Employee e = empRepo.findById(request.getUser()).get();
                if (e.getNgayNghiViec() != null && e.getNgayNghiViec().compareTo(sdf2.parse(request.getDate())) <= 0) {
                    return "Employee number " + request.getUser() + " has retired";
                }

                // check chuc vu
                if (positionRepo.getByMaNvInRange(newLeave.getUser().getId(), monthFirst, monthEnd) == null) {
                    return "Employee number " + request.getUser() + " hasn't position from " + monthFirst + " to " + monthEnd + ". Please update working process of this employee.";
                }
                String chucVu = positionRepo.getByMaNvInRange(newLeave.getUser().getId(), monthFirst, monthEnd).getTenChucVu();
                String shiftName = newLeave.getShiftID().getTenCa();
                // check teacher
                if (chucVu.toLowerCase().contains("giáo viên")) {

                    // check ca lam co dung khong
                    if (shiftName.equalsIgnoreCase("Ca 7") || shiftName.equalsIgnoreCase("Ca 6")) {
                        return "Not your shift. Can not register.";
                    }

                    // check ngay nghi da dang ky
                    LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                    if (dublicateShift != null) {
                        if (dublicateShift.getUser().getId().equalsIgnoreCase(newLeave.getUser().getId())) {
                            return "You were registered " + newLeave.getShiftID().getTenCa();
                        }
                    }

                    // check dang ky nghi vao ngay nghi le
                    List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                    for (HolidayCategory h : holidays) {
                        if (newLeave.getDate() == h.getNgay()) {
                            return "Don't have register in " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                        }
                    }

//                  check 12 ngay nghi phep
                    Integer soBuoiNghi = dORepo.getByMaNV(newLeave.getUser().getId()).getSoBuoiNghi();
                    if (soBuoiNghi > 12) {
                        return "You have absent more than the specified number of session.";                    }
                    // check not teacher
                } else {

                    //check chuc vu
                    if (chucVu.toLowerCase().contains("giám đốc") || chucVu.toLowerCase().contains("phó giám đốc")) {
                        return "Director and Vice Director don't need to register.";
                    }

                    // check ca lam co dung khong
                    if (!shiftName.equalsIgnoreCase("Ca 6") && !shiftName.equalsIgnoreCase("Ca 7")) {
                        return "Not your shift. Can not register.";
                    }

                    Integer soBuoiNghi = dORepo.getByMaNV(newLeave.getUser().getId()).getSoBuoiNghi();
                    if (soBuoiNghi >= 12) {
                        return "You have absent more than the specified number of session.";
                    }

                    // check ngay nghi da dang ky
                    LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                    if (dublicateShift != null) {
                        if (dublicateShift.getUser().getId().equalsIgnoreCase(newLeave.getUser().getId())) {
                            return "You were registered " + newLeave.getShiftID().getTenCa();
                        }
                    }

                    // check dang ky nghi vao ngay nghi le
                    List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                    for (HolidayCategory h : holidays) {
                        if (newLeave.getDate() == h.getNgay()) {
                            return "Don't have register in " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                        }
                    }
                }
                leaveRequestRepository.save(newLeave);
                return mess;
            }
            //add
            else{
                // check emp existed
                if (!empRepo.findById(request.getUser()).isPresent()) {
                    return "Employee number " + request.getUser() + " doesn't exist";
                }

                // check leaved
                Employee e = empRepo.findById(request.getUser()).get();
                if (e.getNgayNghiViec() != null && e.getNgayNghiViec().compareTo(sdf2.parse(request.getDate())) <= 0) {
                    return "Employee number " + request.getUser() + " has retired";
                }

                // check chuc vu
                if (positionRepo.getByMaNvInRange(newLeave.getUser().getId(), monthFirst, monthEnd) == null) {
                    return "Employee number " + request.getUser() + " hasn't position from " + monthFirst + " to " + monthEnd + ". Vui lòng bổ sung trong quá trình công tác của nhân viên này";
                }
                String chucVu = positionRepo.getByMaNvInRange(newLeave.getUser().getId(), monthFirst, monthEnd).getTenChucVu();
                String shiftName = newLeave.getShiftID().getTenCa();

                // check teacher
                if (chucVu.toLowerCase().contains("giáo viên")) {

                    // check ca lam co dung khong
                    if (shiftName.equalsIgnoreCase("Ca 7") || shiftName.equalsIgnoreCase("Ca 6")) {
                        return "Not your shift. Can not register.";
                    }

                    // check ngay nghi da dang ky
                    LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                    if (dublicateShift != null) {
                        if (dublicateShift.getUser().getId().equalsIgnoreCase(newLeave.getUser().getId())) {
                            return "You were registered " + newLeave.getShiftID().getTenCa();
                        }
                    }

                    // check dang ky nghi vao ngay nghi le
                    List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                    for (HolidayCategory h : holidays) {
                        if (newLeave.getDate() == h.getNgay()) {
                            return "Don't have register in " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                        }
                    }

                    // check 12 ngay nghi phep
                    Integer soBuoiNghi = dORepo.getByMaNV(newLeave.getUser().getId()).getSoBuoiNghi();
                    if (soBuoiNghi > 12) {
                        return "You have absent more than the specified number of session.";
                    }
                    // check not teacher
                } else {

                    //check chuc vu
                    if (chucVu.toLowerCase().contains("giám đốc") || chucVu.toLowerCase().contains("phó giám đốc")) {
                        return "Director and Vice Director don't need to register.";
                    }

                    // check ca lam co dung khong
                    if (!shiftName.equalsIgnoreCase("Ca 6") && !shiftName.equalsIgnoreCase("Ca 7")) {
                        return "Not your shift. Can not register.";
                    }

                    Integer soBuoiNghi = dORepo.getByMaNV(newLeave.getUser().getId()).getSoBuoiNghi();
                    if (soBuoiNghi >= 12) {
                        return "You have absent more than the specified number of session.";
                    }

                    // check ngay nghi da dang ky
                    LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                    if (dublicateShift != null) {
                        if (dublicateShift.getUser().getId().equalsIgnoreCase(newLeave.getUser().getId())) {
                            return "You were registered " + newLeave.getShiftID().getTenCa();
                        }
                    }

                    // check dang ky nghi vao ngay nghi le
                    List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                    for (HolidayCategory h : holidays) {
                        if (newLeave.getDate() == h.getNgay()) {
                            return "Don't have register in " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                        }
                    }
                }
                leaveRequestRepository.save(newLeave);
                return mess;
            }
        } catch (Exception e) {
            return "Internal server error";
        }
    }

    public LeaveRequest getNewLeaveRequest(CreateUpdateLeaveRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            LeaveRequest s = new LeaveRequest();
            s.setId(request.getId());
            s.setUser(empRepo.findById(request.getUser()).get());
            s.setIdNghi(dayOffRepository.findById(request.getIdNghi()).get());
            if (request.getDate() != null)
                s.setDate(sdf.parse(request.getDate()));
            s.setShiftID(shiftCategoryRepository.findById(request.getShiftID()).get());
            s.setLyDo(request.getLyDo());
            s.setNguoiDuyet(request.getNguoiDuyet());
            s.setStatus(request.getStatus());
            return s;
        } catch (Exception e) {
            return null;
        }
    }

    public LeaveRequest getById(int id) {
        if (leaveRequestRepository.findById(id).isPresent()) {
            return leaveRequestRepository.findById(id).get();
        } else {
            return null;
        }
    }
}

