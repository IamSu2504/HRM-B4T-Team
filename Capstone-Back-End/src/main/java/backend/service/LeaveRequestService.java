package backend.service;

import backend.entity.LeaveRequest;
import backend.repository.LeaveRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class LeaveRequestService {

    @Autowired
    private LeaveRequestRepository repo;

    public List<LeaveRequest> getAll(){
        return repo.findAll();
    }

    public String createLeaveRequest(LeaveRequest leaveRequest) {
        try {

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            String leaveRequestName = leaveRequest.getShiftCategory().getTenCa();

            // check teacher
            if (leaveRequest.getUser().getChucVu().getTenChucVu().equalsIgnoreCase("giáo viên")) {

                if (leaveRequestName.equalsIgnoreCase("Ca08") || leaveRequestName.equalsIgnoreCase("Ca09") || leaveRequestName.equalsIgnoreCase("Ca10") || leaveRequestName.equalsIgnoreCase("Ca11")) {
                    return "Không phải ca làm của bạn, không thể đăng ký nghỉ";
                }
                // check not teacher
            } else {
                if (!leaveRequestName.equalsIgnoreCase("Ca08") && !leaveRequestName.equalsIgnoreCase("Ca09") && !leaveRequestName.equalsIgnoreCase("Ca10") && !leaveRequestName.equalsIgnoreCase("Ca11")) {
                    return "Bạn chỉ được đăng kí ca 8,9,10,11";
                }
            }
            repo.save(leaveRequest);
            return "Đăng ký nghỉ thành công";
        } catch (Exception e){
            return "Lỗi nội bộ";
        }
    }
}
