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
    private SalaryRepository salaryRepo;

    @Autowired
    private HolidayCategoryRepository holidayRepo;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private ContractRepository contractRepo;

    @Autowired
    private WorkingProcessRepository workingProcessRepo;

    public List<SalaryReport> getListSalaryReport() {

        try {
            List<SalaryReport> reports = new ArrayList<>();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            SalaryReport sr = new SalaryReport();

            // get first + last of current month
            Calendar gc = new GregorianCalendar();
            gc.set(Calendar.MONTH, new Date().getMonth());
            gc.set(Calendar.DAY_OF_MONTH, 1);
            Date monthStart = gc.getTime();
            String formattedMonthStart = sdf.format(gc.getTime());
            gc.add(Calendar.MONTH, 1);
            gc.add(Calendar.DAY_OF_MONTH, -1);
            Date monthEnd = gc.getTime();
            String formattedMonthEnd = sdf.format(gc.getTime());

            List<Salary> salaries = salaryRepo.getAllLuongThang(formattedMonthEnd, formattedMonthStart);
            for (Salary s : salaries) {
                Employee e = empRepo.findById(s.getHopDong().getMaNV()).get();
                if(e.getNgayNghiViec()==null){
                    sr = new SalaryReport();
                    sr.setMaNv(e.getId());
                    sr.setTenNV(e.getTenNv());
                    sr.setTong(s.getTongLuong());
                    reports.add(sr);
                }
                else{
                    if(e.getNgayNghiViec().compareTo(monthStart)>0 && e.getNgayNghiViec().compareTo(monthEnd)<=0){
                        double contractTotal = s.getTongLuong();
                        double eachShiftSalary = contractTotal/80;
                        double total = shiftRepo.getTotalShiftInRange(formattedMonthEnd,formattedMonthStart,e.getId())*eachShiftSalary;
                        sr = new SalaryReport();
                        sr.setMaNv(e.getId());
                        sr.setTenNV(e.getTenNv());
                        sr.setTong(total);
                        reports.add(sr);
                    }
                    else if(e.getNgayNghiViec().compareTo(monthEnd)>0){
                        sr = new SalaryReport();
                        sr.setMaNv(e.getId());
                        sr.setTenNV(e.getTenNv());
                        sr.setTong(s.getTongLuong());
                        reports.add(sr);
                    }
                }
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
            er.setTenNv(e.getTenNv());
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

    public List<WorkingProcess> getEmployeeWorkingProcessReportMess(String empID){
        if(empRepo.findById(empID).isPresent()){
            return workingProcessRepo.getByMaNV(empID);
        }
        else{
            return null;
        }
    }



}

