package backend.service;

import backend.entity.*;
import backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;

@Service
public class ReportService {

    @Autowired
    private ShiftRepository shiftRepo;

    @Autowired
    private SalaryRepository salaryRepo;

    @Autowired
    LeaveRequestRepository leaveRepo;

    @Autowired
    private HolidayCategoryRepository holidayRepo;

    @Autowired
    TaxService taxService;

    @Autowired
    InsuranceService insuranceService;

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private ContractRepository contractRepo;

    @Autowired
    private WorkingProcessRepository workingProcessRepo;

    @Autowired
    PositionCategoryRepository positionRepo;

    public List<SalaryReport> getListSalaryReport() {

        try {
            List<SalaryReport> reports = new ArrayList<>();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            SalaryReport sr;
            double luongCoBan = 0;
            double phuCapKhac = 0;
            double luongMoiCa = 0;
            double luongTinhThueTNCN = 0;
            double baoHiemXaHoi = 0;
            double baoHiemYte = 0;
            double congDoan = 0;
            double giamTruGiaCanh = 0;
            double thueTNCN = 0;
            double thueSuat = 0;
            double tong = 0;
            double luongTruocThue = 0;
            double luongOT = 0;
            int soCa = 0;
            int soCaLamThem = 0;
            int soCaToiThieu;
            int soCaChiuThue;
            int soCaNghiToiDa = 48;
            String chucVu;
            String phongBan;
            Contract c;

            // get first + last of current month
            Calendar gc = new GregorianCalendar();
            gc.set(Calendar.MONTH, new Date().getMonth());
            gc.set(Calendar.DAY_OF_MONTH, 1);
            String formattedMonthStart = sdf.format(gc.getTime());
            Date monthStart = gc.getTime();
            gc.add(Calendar.MONTH, 1);
            gc.add(Calendar.DAY_OF_MONTH, -1);
            String formattedMonthEnd = sdf.format(gc.getTime());
            Date monthEnd = gc.getTime();
            List<Salary> salaries = salaryRepo.getAllLuongThang(formattedMonthEnd, formattedMonthStart);

            // get first + day right before current month
            String formattedYearStart = null;
            String beforeMonthStart = null;
            if(monthStart.getMonth()!=1) {
                gc.set(Calendar.MONTH, 1);
                gc.set(Calendar.DAY_OF_MONTH, 1);
                formattedYearStart = sdf.format(gc.getTime());
                gc.setTime(monthStart);
                gc.add(Calendar.DAY_OF_MONTH, -1);
                beforeMonthStart = sdf.format(gc.getTime());
            }


            for (Salary s : salaries) {
                Employee e = empRepo.findById(s.getHopDong().getMaNV()).get();
                WorkingProcess w = workingProcessRepo.getByEmp(e.getId(), monthStart, monthEnd);
                // working process of emp existed
                if (w != null) {
                    c = s.getHopDong();
                    luongCoBan = s.getLuongCoBan();
                    phuCapKhac = s.getPhuCapKhac();
                    luongTinhThueTNCN = 0;
                    baoHiemXaHoi = 0;
                    baoHiemYte = 0;
                    congDoan = 0;
                    giamTruGiaCanh = 0;
                    thueTNCN = 0;
                    thueSuat = 0;
                    tong = 0;
                    soCaLamThem = 0;
                    luongTruocThue = 0;
                    luongOT = 0;
                    chucVu = w.getIdChucVu().getTenChucVu();
                    phongBan = w.getIdPhongBan().getTenPhongBan();
                    // Teacher
                    if (w.getIdChucVu().getTenChucVu().equalsIgnoreCase("TEACHER")) {
                        soCaToiThieu = 80;
                        luongMoiCa = luongCoBan / soCaToiThieu;
                        soCa = shiftRepo.getTotalShiftInRange(formattedMonthStart,formattedMonthEnd,e.getId());

                        // so ca lam
                        if (soCa > 80) {
                            soCaLamThem = soCa - 80;
                            soCaChiuThue = 80;
                        }
                        else{
                            soCaLamThem = 0;
                            soCaChiuThue = soCa;
                        }

                        // luong OT
                        luongOT = soCaLamThem * luongMoiCa * 2;

                        // luong tinh theo ca
                        luongTruocThue = luongMoiCa * soCaChiuThue;

                        // giam tru gia canh
                        if (c.getGiamTruGiaCanh() == null) {
                            giamTruGiaCanh = 0;
                        } else {
                            giamTruGiaCanh = c.getGiamTruGiaCanh();
                        }

                        // luong tinh thue
                        luongTinhThueTNCN = luongTruocThue + phuCapKhac - giamTruGiaCanh;
                        if (luongTinhThueTNCN < 0) {
                            luongTinhThueTNCN = 0;
                        }

                        // thue suat
                        if (luongTinhThueTNCN <= 5) {
                            thueSuat = 0.05;
                        } else if (luongTinhThueTNCN > 5 && luongTinhThueTNCN <= 10) {
                            thueSuat = 0.1;
                        } else if (luongTinhThueTNCN > 10 && luongTinhThueTNCN <= 18) {
                            thueSuat = 0.15;
                        } else if (luongTinhThueTNCN > 18 && luongTinhThueTNCN <= 32) {
                            thueSuat = 0.2;
                        } else if (luongTinhThueTNCN > 32 && luongTinhThueTNCN <= 52) {
                            thueSuat = 0.25;
                        } else if (luongTinhThueTNCN > 52 && luongTinhThueTNCN <= 80) {
                            thueSuat = 0.3;
                        } else {
                            thueSuat = 0.35;
                        }
                        thueTNCN = luongTinhThueTNCN * thueSuat;

                        // bao hiem
                        if (insuranceService.getByLoai("BH1", e.getId()) != null) {
                            baoHiemXaHoi = insuranceService.getByLoai("BH1", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }
                        if (insuranceService.getByLoai("BH2", e.getId()) != null) {
                            baoHiemYte = insuranceService.getByLoai("BH2", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }
                        if (insuranceService.getByLoai("BH3", e.getId()) != null) {
                            congDoan = insuranceService.getByLoai("BH3", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }

                        // tong luong
                        tong = luongTruocThue + luongOT + phuCapKhac - baoHiemXaHoi - baoHiemYte - congDoan - thueTNCN;
                    }
                    // Not teacher
                    else {
                        soCaToiThieu = getMinimumShifts();
                        luongMoiCa = luongCoBan / soCaToiThieu;
                        soCa = getMinimumShifts();

                        // update soCaToiThieu
                        List<HolidayCategory> holidays = holidayRepo.getNgayLeTrongKhoang(formattedMonthStart,formattedMonthEnd);
                        if(!holidays.isEmpty()){
                            soCaToiThieu -= holidays.size()*4;
                        }

                        // tinh buoi nghi
                        int soCaNghiTinhLuong = 0;
                         // so buoi nghi tu dau nam
                        if(formattedYearStart!=null && beforeMonthStart!=null) {
                            List<LeaveRequest> caDaNghi = leaveRepo.getByMaNVInRange(e.getId(), formattedYearStart, beforeMonthStart);
                            if (!caDaNghi.isEmpty()) {
                                for (LeaveRequest cdn : caDaNghi) {
                                    if (cdn.getIdNghi().getLoaiNghi().toLowerCase().contains("leave slot")) {
                                        soCaNghiTinhLuong += 1;
                                    } else if (cdn.getIdNghi().getLoaiNghi().toLowerCase().equals("leave morning slot")) {
                                        soCaNghiTinhLuong += 2;
                                    } else if (cdn.getIdNghi().getLoaiNghi().toLowerCase().equals("leave afternoon slot")) {
                                        soCaNghiTinhLuong += 2;
                                    } else if (cdn.getIdNghi().getLoaiNghi().toLowerCase().equals("leave full day")) {
                                        soCaNghiTinhLuong += 4;
                                    }
                                }
                            }
                        }
                        List<LeaveRequest> leaveRequests = leaveRepo.getByMaNVInRange(e.getId(),formattedMonthStart,formattedMonthEnd);
                        if(!leaveRequests.isEmpty()){
                            for (LeaveRequest caNghiTrongThang : leaveRequests) {
                                if (caNghiTrongThang.getIdNghi().getLoaiNghi().toLowerCase().contains("leave slot")) {
                                    soCaNghiTinhLuong += 1;
                                    if(soCaNghiTinhLuong > soCaNghiToiDa) {
                                       soCa -= 1;
                                    }
                                } else if (caNghiTrongThang.getIdNghi().getLoaiNghi().toLowerCase().equals("leave morning slot") || caNghiTrongThang.getIdNghi().getLoaiNghi().toLowerCase().equals("leave afternoon slot")) {
                                    soCaNghiTinhLuong += 2;
                                    if(soCaNghiTinhLuong > soCaNghiToiDa) {
                                        if(soCaNghiTinhLuong - soCaNghiToiDa < 2){
                                            soCa -= soCaNghiTinhLuong - soCaNghiToiDa;
                                        }
                                        else{
                                            soCa -= 2;
                                        }
                                    }
                                } else if (caNghiTrongThang.getIdNghi().getLoaiNghi().toLowerCase().equals("leave full day")) {
                                    soCaNghiTinhLuong += 4;
                                    if(soCaNghiTinhLuong > soCaNghiToiDa) {
                                        if(soCaNghiTinhLuong - soCaNghiToiDa < 4){
                                            soCa -= soCaNghiTinhLuong - soCaNghiToiDa;
                                        }
                                        else{
                                            soCa -= 4;
                                        }
                                    }
                                } else if (caNghiTrongThang.getIdNghi().getLoaiNghi().toLowerCase().equals("unpaid leave")) {
                                    soCa -= 4;
                                }
                            }
                        }

                        // so ca lam
                        if (soCa > soCaToiThieu) {
                            soCaLamThem = soCa - soCaToiThieu;
                            soCaChiuThue = soCaToiThieu;
                        }
                        else{
                            soCaLamThem = 0;
                            soCaChiuThue = soCa;
                        }

                        // luong OT
                        luongOT = soCaLamThem * luongMoiCa * 2;

                        // luong tinh theo ca
                        luongTruocThue = luongMoiCa * soCaChiuThue;

                        // giam tru gia canh
                        if (c.getGiamTruGiaCanh() == null) {
                            giamTruGiaCanh = 0;
                        } else {
                            giamTruGiaCanh = c.getGiamTruGiaCanh();
                        }

                        // luong tinh thue
                        luongTinhThueTNCN = luongTruocThue + phuCapKhac - giamTruGiaCanh;
                        if (luongTinhThueTNCN < 0) {
                            luongTinhThueTNCN = 0;
                        }

                        // thue suat
                        if (luongTinhThueTNCN <= 5) {
                            thueSuat = 0.05;
                        } else if (luongTinhThueTNCN > 5 && luongTinhThueTNCN <= 10) {
                            thueSuat = 0.1;
                        } else if (luongTinhThueTNCN > 10 && luongTinhThueTNCN <= 18) {
                            thueSuat = 0.15;
                        } else if (luongTinhThueTNCN > 18 && luongTinhThueTNCN <= 32) {
                            thueSuat = 0.2;
                        } else if (luongTinhThueTNCN > 32 && luongTinhThueTNCN <= 52) {
                            thueSuat = 0.25;
                        } else if (luongTinhThueTNCN > 52 && luongTinhThueTNCN <= 80) {
                            thueSuat = 0.3;
                        } else {
                            thueSuat = 0.35;
                        }
                        thueTNCN = luongTinhThueTNCN * thueSuat;

                        // bao hiem
                        if (insuranceService.getByLoai("BH1", e.getId()) != null) {
                            baoHiemXaHoi = insuranceService.getByLoai("BH1", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }
                        if (insuranceService.getByLoai("BH2", e.getId()) != null) {
                            baoHiemYte = insuranceService.getByLoai("BH2", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }
                        if (insuranceService.getByLoai("BH3", e.getId()) != null) {
                            congDoan = insuranceService.getByLoai("BH3", e.getId()).getIdLoaiBH().getPhanTram() * luongCoBan / 100;
                        }

                        // tong luong
                        tong = luongTruocThue + luongOT + phuCapKhac - baoHiemXaHoi - baoHiemYte - congDoan - thueTNCN;
                    }

                    // Add Salary Report
                    sr = new SalaryReport();
                    sr.setMaNv(e.getId());
                    sr.setTenNV(e.getTenNv());
                    sr.setChucVu(chucVu);
                    sr.setPhuCap(phuCapKhac);
                    sr.setPhongBan(phongBan);
                    sr.setSoCaToiThieu(soCaToiThieu);
                    sr.setSoCaLamThem(soCaLamThem);
                    sr.setSoCa(soCa);
                    sr.setLuongCoBan(luongCoBan);
                    sr.setBaoHiemYte(baoHiemYte);
                    sr.setBaoHiemXaHoi(baoHiemXaHoi);
                    sr.setCongDoan(congDoan);
                    sr.setGiamTruGiaCanh(giamTruGiaCanh);
                    sr.setLuongChiuThueTNCN(luongTinhThueTNCN);
                    sr.setThueTNCN(thueTNCN);
                    sr.setTong(tong);
                    sr.setLuongOT(luongOT);
                    sr.setLuongTruocThue(luongTruocThue);
                    reports.add(sr);
                }
            }

            return reports;
        } catch (Exception e) {
            return null;
        }
    }

    public List<Employee> getAllEmployeeReport() {
        return empRepo.findAll();
    }

    public List<EmployeeReport> getAllContractEmployeeReport() {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        List<EmployeeReport> reports = new ArrayList<>();
        EmployeeReport er = new EmployeeReport();
        Employee e;

        // get next month
        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.MONTH, 1);
        String startDate = sdf.format(new Date());
        String endDate = sdf.format(c.getTime());

        // get contracts
        List<Contract> contracts = contractRepo.getListReportContract(startDate, endDate);

        for (Contract contract : contracts) {
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

    public int getMinimumShifts() {
        int year = LocalDate.now().getYear();
        int month = LocalDate.now().getMonth().getValue();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.set(year, month - 1, 1);
        int daysInMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

        int totalWeekend = 0;
        for (int day = 1; day <= daysInMonth; day++) {
            calendar.set(year, month - 1, day);
            int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
            if (dayOfWeek == Calendar.SUNDAY || dayOfWeek == Calendar.SATURDAY) {
                totalWeekend++;
            }
        }
        return (daysInMonth - totalWeekend)*4;
    }

    public List<WorkingProcess> getEmployeeWorkingProcessReportMess(String empID) {
        if (empRepo.findById(empID).isPresent()) {
            return workingProcessRepo.getByMaNV(empID);
        } else {
            return null;
        }
    }


}

