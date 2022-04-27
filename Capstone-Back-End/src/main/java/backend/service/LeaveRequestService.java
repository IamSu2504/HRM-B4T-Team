package backend.service;

import backend.entity.LeaveRequest;
import backend.repository.EmployeeRepository;
import backend.repository.LeaveRequestRepository;
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

    public List<LeaveRequest> getAll(){
        return leaveRequestRepository.findAll();
    }

    public String createLeaveRequest(LeaveRequest leaveRequest) {
        try {

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            String chucVu = empRepo.getChucVu(leaveRequest.getUser().getId());

            String leaveRequestName = leaveRequest.getShiftCategory().getTenCa();

            // check teacher
            if (chucVu.equalsIgnoreCase("giáo viên")) {

                if (leaveRequestName.equalsIgnoreCase("Ca08") || leaveRequestName.equalsIgnoreCase("Ca09") || leaveRequestName.equalsIgnoreCase("Ca10") || leaveRequestName.equalsIgnoreCase("Ca11")) {
                    return "Không phải ca làm của bạn, không thể đăng ký nghỉ";
                }
                // check not teacher
            } else {
                if (!leaveRequestName.equalsIgnoreCase("Ca08") && !leaveRequestName.equalsIgnoreCase("Ca09") && !leaveRequestName.equalsIgnoreCase("Ca10") && !leaveRequestName.equalsIgnoreCase("Ca11")) {
                    return "Bạn chỉ được đăng kí ca 8,9,10,11";
                }
            }
            leaveRequestRepository.save(leaveRequest);
            return "Đăng ký nghỉ thành công";
        } catch (Exception e){
            return "Lỗi nội bộ";
        }
    }
}
