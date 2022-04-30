package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.util.*;

@Service
public class ReportService {

    @Autowired
    private ShiftRepository shiftRepo;

    @Autowired
    private PositionCategoryRepository positionRepo;

    @Autowired
    private SalaryRepository salaryRepo;

    @Autowired
    private HolidayCategoryRepository holidayRepo;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private ContractRepository contractRepo;

    public List<SalaryReport> getListSalaryReport() {

        try {
            List<SalaryReport> reports = new ArrayList<>();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            SalaryReport sr = new SalaryReport();
            String position = "";
            double totalSalary = 0;
            double subtractedSalary = 0;
            Integer acctedHours = 0;
            double salaryPerHour = 0;

            // cal hour in month
            Calendar gc = new GregorianCalendar();
            gc.set(Calendar.MONTH, new Date().getMonth());
            gc.set(Calendar.DAY_OF_MONTH, 1);
            Date monthStart = gc.getTime();
            String formattedMonthStart = sdf.format(monthStart);
            gc.add(Calendar.MONTH, 1);
            gc.add(Calendar.DAY_OF_MONTH, -1);
            Date monthEnd = gc.getTime();
            String formattedMonthEnd = sdf.format(monthEnd);
            List<HolidayCategory> holidaysInMonth = holidayRepo.getNgayLeTrongKhoang(formattedMonthStart, formattedMonthEnd);
            int minHoursInMonth = 40 - holidaysInMonth.size();

            List<Salary> salaries = salaryRepo.getAllLuongThang(formattedMonthEnd, formattedMonthStart);
            for (Salary s : salaries) {
                sr.setMaNv(s.getMaHD().getMaNV());
                sr.setLuongCoBan(s.getLuongCoBan());
                if (positionRepo.getByMaNv(sr.getMaNv()) == null) {
                    return null;
                }
                sr.setPhuCapChucVu(positionRepo.getByMaNv(sr.getMaNv()).getPhuCap());
                sr.setPhuCapKhac(s.getPhuCapKhac());
                sr.setSoGioToiThieu(minHoursInMonth);

                // get total worked time
                acctedHours = shiftRepo.getAcceptedHourInRange(formattedMonthStart,formattedMonthEnd,sr.getMaNv());
                if(acctedHours==null)
                    acctedHours = 0;
                sr.setSoGioLam(acctedHours);

                // cal total salary
                salaryPerHour = s.getTongLuong()/(minHoursInMonth);
                if(acctedHours > minHoursInMonth){
                    sr.setTong(s.getTongLuong() + salaryPerHour*1.5*(acctedHours-minHoursInMonth));
                }
                else{
                    sr.setTong(s.getTongLuong() - salaryPerHour*(acctedHours-minHoursInMonth));
                }
                reports.add(sr);
            }
            return reports;
        } catch (Exception e) {
          return null;
        }
    }

    public List<Employee> getAllEmployeeReport(){
        return empRepo.findAll();
    }

    public List<EmployeeReport> getAllContractEmployeeReport(){

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<EmployeeReport> reports = new ArrayList<>();
        EmployeeReport er = new EmployeeReport();
        Employee e = new Employee();

        // get next month
        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.MONTH,1);
        String startDate = sdf.format(new Date());
        String endDate = sdf.format(c.getTime());

        // get contracts
        List<Contract> contracts = contractRepo.getListReportContract(startDate,endDate);

        for(Contract contract : contracts){
            e = empRepo.findById(contract.getMaNV()).get();
            er.setMaNv(e.getId());
            er.setEmail(e.getEmail());
            er.setCccd(e.getCccd());
            er.setImage(e.getImage());
            er.setHoChieu(e.getHoChieu());
            er.setNgayHetHan(contract.getNgayHetHan());
            er.setNgayHieuLuc(contract.getNgayHieuLuc());
            reports.add(er);
        }
        return reports;
    }



}

