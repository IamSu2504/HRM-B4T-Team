package backend.service;

import backend.entity.*;
import backend.repository.*;
import backend.repository.PositionCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
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

    public List<LeaveRequest> getAll(){
        return leaveRequestRepository.findAll();
    }

    public String createLeaveRequest(CreateUpdateLeaveRequest request) {
        try {
            String mess = null;
            LeaveRequest newLeave = getNewLeaveRequest(request);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
         SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");


         if(positionRepo.getByMaNv(newLeave.getUser().getId())==null){
             return "Nhân viên chưa được lưu quá trình công tác";
         }
         String chucVu = positionRepo.getByMaNv(newLeave.getUser().getId()).getTenChucVu();

            String shiftName = newLeave.getShiftID().getTenCa();

            // check teacher
            if (chucVu.toLowerCase().contains("giáo viên")) {

                // check ca lam co dung khong
                if (shiftName.equalsIgnoreCase("Ca 7") || shiftName.equalsIgnoreCase("Ca 6")) {
                    return "Không phải ca làm của bạn, không thể đăng ký nghỉ";
                }

                // check dang ky nghi vao ngay nghi le
                List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                    for (HolidayCategory h : holidays) {
                        if (newLeave.getDate() == h.getNgay()) {
                            return "Không được đăng kí ngày " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                        }
                    }

                // check ngay nghi da dang ky
                LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                if (dublicateShift != null) {
                    return "Bạn đã đăng kí nghỉ " + newLeave.getShiftID().getTenCa() + "rồi.";
                }

                // check 12 ngay nghi phep

                // check not teacher
            } else {

                //check chuc vu
                if (chucVu.toLowerCase().contains("giám đốc") || chucVu.toLowerCase().contains("phó giám đốc")) {
                    return "Chức vụ giám đốc hoặc phó giám đốc không cần đăng ký nghỉ.";
                }

                // check ca lam co dung khong
                if (!shiftName.equalsIgnoreCase("Ca 6") && !shiftName.equalsIgnoreCase("Ca 7")) {
                    return "Không phải ca làm của bạn, không thể đăng ký nghỉ";
                }

                // check dang ky nghi vao ngay nghi le
                List<HolidayCategory> holidays = holidayCategoryRepository.findAll();
                for (HolidayCategory h : holidays) {
                    if (newLeave.getDate() == h.getNgay()) {
                        return "Không được đăng kí ngày " + h.getTenNgayLe() + " " + sdf2.format(newLeave.getDate());
                    }
                }

                // check ngay nghi da dang ky
                LeaveRequest dublicateShift = leaveRequestRepository.getDublicateLeaveRequest(newLeave.getUser().getId(), newLeave.getShiftID().getId(), sdf.format(newLeave.getDate()), newLeave.getIdNghi().getId());
                if (dublicateShift != null) {
                    return "Bạn đã đăng kí nghỉ " + newLeave.getShiftID().getTenCa() + "rồi.";
                }
            }
            leaveRequestRepository.save(newLeave);
            return mess;
        } catch (Exception e){
            return "Lỗi nội bộ";
        }
    }

    public LeaveRequest getNewLeaveRequest(CreateUpdateLeaveRequest request) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

            LeaveRequest s = new LeaveRequest();
            s.setId(request.getId());
            s.setUser(empRepo.findById(request.getUser()).get());
            s.setIdNghi(dayOffRepository.findById(request.getIdNghi()).get());
            if(request.getDate() != null)
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

    public LeaveRequest getById(int id){
        if(leaveRequestRepository.findById(id).isPresent()){
            return leaveRequestRepository.findById(id).get();
        }
        else{
            return null;
        }
    }
}
