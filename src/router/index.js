import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ManagerLayout from "../layouts/ManagerLayout";
import LayoutPrivateRoute from './privateRouter/layout';
import EmployeeLayout from '../layouts/EmployeeLayout';
import ViewAllUser from "../pages/Manager/ViewAllUser";
import Login from "../pages/Login";
import Forgot from "../pages/Admin/Forgot";
import NewPassword from "../pages/Admin/NewPassword";
import UpdateUser from "../pages/User/UpdateUser";
import AddNewAccount from "../pages/Admin/AddNewAccount";
import ViewUser from "../pages/User/ViewUser";

import ViewSalaryGrade from "../pages/Admin/SalaryGrade/ViewSalaryGrade";
import UpdateSalaryGrade from "../pages/Admin/SalaryGrade/UpdateSalaryGrade";
import AddSalaryGrade from "../pages/Admin/SalaryGrade/AddNewSalaryGrade";

import ViewTax from "../pages/Admin/Tax/ViewTax";
import UpdateTax from "../pages/Admin/Tax/UpdateTax";
import AddTax from "../pages/Admin/Tax/AddNewTax";

import ViewShift from "../pages/Admin/Shift/ViewShift";
import UpdateShift from "../pages/Admin/Shift/UpdateShift";
import AddShift from "../pages/Admin/Shift/AddNewShift";

import ViewPosition from "../pages/Admin/Position/ViewPosition";
import UpdatePosition from "../pages/Admin/Position/UpdatePosition";
import AddPosition from "../pages/Admin/Position/AddNewPosition";

import ViewSpecialize from "../pages/Admin/Specialized/ViewSpecialize";
import UpdateSpecialize from "../pages/Admin/Specialized/UpdateSpecialize";
import AddSpecialize from "../pages/Admin/Specialized/AddNewSpecialize";

import ViewRewardDiscipline from "../pages/Admin/RewardDiscipline/ViewRewardDiscipline";
import UpdateRewardDiscipline from "../pages/Admin/RewardDiscipline/UpdateRewardDiscipline";
import AddRewardDiscipline from "../pages/Admin/RewardDiscipline/AddNewRewardDiscipline";

import ViewRelative from "../pages/Admin/Relative/ViewRelative";
import UpdateRelative from "../pages/Admin/Relative/UpdateRelative";
import AddRelative from "../pages/Admin/Relative/AddNewRelative";

import ViewSalaryGroup from "../pages/Admin/SalaryGroup/ViewSalaryGroup";
import UpdateSalaryGroup from "../pages/Admin/SalaryGroup/UpdateSalaryGroup";
import AddSalaryGroup from "../pages/Admin/SalaryGroup/AddNewSalaryGroup";

import ViewNation from "../pages/Admin/Nation/ViewNation";
import UpdateNation from "../pages/Admin/Nation/UpdateNation";
import AddNation from "../pages/Admin/Nation/AddNewNation";

import ViewMarriage from "../pages/Admin/Marriage/ViewMarriage";
import UpdateMarriage from "../pages/Admin/Marriage/UpdateMarriage";
import AddMarriage from "../pages/Admin/Marriage/AddNewMarriage";

import ViewDegree from "../pages/Admin/Degree/ViewDegree";
import UpdateDegree from "../pages/Admin/Degree/UpdateDegree";
import AddDegree from "../pages/Admin/Degree/AddNewDegree";

import ViewInsurance from "../pages/Admin/Insurance/ViewInsurance";
import UpdateInsurance from "../pages/Admin/Insurance/UpdateInsurance";
import AddInsurance from "../pages/Admin/Insurance/AddNewInsurance";

import ViewCertificate from "../pages/Admin/Certificate/ViewCertificate";
import UpdateCertificate from "../pages/Admin/Certificate/UpdateCertificate";
import AddCertificate from "../pages/Admin/Certificate/AddNewCertificate";

import ViewContract from "../pages/Admin/Contract/ViewContract";
import UpdateContract from "../pages/Admin/Contract/UpdateContract";
import AddContract from "../pages/Admin/Contract/AddNewContract";

import ViewClassRoom from "../pages/Admin/Classroom/ViewClassRoom";
import UpdateClassRoom from "../pages/Admin/Classroom/UpdateClassRoom";
import AddClassRoom from "../pages/Admin/Classroom/AddNewClassRoom";

import ViewHoliday from "../pages/Admin/Holiday/ViewHoliday";
import UpdateHoliday from "../pages/Admin/Holiday/UpdateHoliday";
import AddHoliday from "../pages/Admin/Holiday/AddNewHoliday";

import ViewDayOff from "../pages/Admin/DayOff/ViewDayOff";
import UpdateDayOff from "../pages/Admin/DayOff/UpdateDayOff";
import AddDayOff from "../pages/Admin/DayOff/AddNewDayOff";

import ViewDepartment from "../pages/Admin/Department/ViewDepartment";
import UpdateDepartment from "../pages/Admin/Department/UpdateDepartment";
import AddDepartment from "../pages/Admin/Department/AddNewDepartment";

import ViewContractNature from "../pages/Admin/ContractNature/ViewContractNature";
import UpdateContractNature from "../pages/Admin/ContractNature/UpdateContractNature";
import AddContractNature from "../pages/Admin/ContractNature/AddNewContractNature";

import ViewEduLevel from "../pages/Admin/EduLevel/ViewEduLevel";
import UpdateEduLevel from "../pages/Admin/EduLevel/UpdateEduLevel";
import AddEduLevel from "../pages/Admin/EduLevel/AddNewEduLevel";

import ViewAccount from "../pages/Admin/Account/ViewAccount";
import UpdateAccount from "../pages/Admin/Account/UpdateAccount";
import AAddAccount from "../pages/Admin/Account/AddNewAccount";

import HomePagePrivateRoute from "./privateRouter/Homepage";
import ManagerHomePage from "../pages/Manager/HomePage";

//manager
import MViewInsurance from "../pages/Manager/Insurance/ViewInsurance";
import MAddInsurance from "../pages/Manager/Insurance/AddNewInsurance";
import MUpdateInsurance from "../pages/Manager/Insurance/UpdateInsurance";

import MViewReward from "../pages/Manager/RewardDiscipline/ViewReward";
import MViewDiscipline from "../pages/Manager/RewardDiscipline/ViewDiscipline";
import MAddReward from "../pages/Manager/RewardDiscipline/AddNewReward";
import MAddDiscipline from "../pages/Manager/RewardDiscipline/AddNewDiscipline";
import MUpdateReward from "../pages/Manager/RewardDiscipline/UpdateReward";
import MUpdateDiscipline from "../pages/Manager/RewardDiscipline/UpdateDiscipline";

import MViewLeaveRequest from "../pages/Manager/LeaveRequest"

//Employee
import EmployeeHomepage from "../pages/Employee/HomePage";
import ELeaveRequest from "../pages/Employee/LeaveRequest";

import RegisterShifts from "../pages/User/RegisterShifts";
import ViewTimekeeping from "../pages/User/TimeKeeping";
import EViewContract from "../pages/User/ViewContract";
import TimeKeeping from "../pages/User/TimeKeeping";
import AddUser from "../pages/User/AddNewUser";
import RegisterShift from "../pages/User/RegisterShift";


export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        
        
        {/* admin */}
        {/* <Route exact path="/admin/add-account" element={<LayoutPrivateRoute><AddNewAccount /></LayoutPrivateRoute>} /> */}
        <Route exact path="/forgot" element={<Forgot />} />
        
        <Route exact path="/account/:forgotId/forgot" element={<NewPassword />}/>
        {/* admin category */}

        <Route exact path="/admin/viewsalarygrade" element={<LayoutPrivateRoute><ViewSalaryGrade /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatesalarygrade" element={<LayoutPrivateRoute><UpdateSalaryGrade /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addsalarygrade" element={<LayoutPrivateRoute><AddSalaryGrade /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewtax" element={<LayoutPrivateRoute><ViewTax /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatetax/:taxId" element={<LayoutPrivateRoute><UpdateTax /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addtax" element={<LayoutPrivateRoute><AddTax /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewshift" element={<LayoutPrivateRoute><ViewShift /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateshift/:shiftId" element={<LayoutPrivateRoute><UpdateShift /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addshift" element={<LayoutPrivateRoute><AddShift /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewposition" element={<LayoutPrivateRoute><ViewPosition /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateposition/:positionId" element={<LayoutPrivateRoute><UpdatePosition /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addposition" element={<LayoutPrivateRoute><AddPosition /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewspecialize" element={<LayoutPrivateRoute><ViewSpecialize /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatespecialize/:specializeId" element={<LayoutPrivateRoute><UpdateSpecialize /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addspecialize" element={<LayoutPrivateRoute><AddSpecialize /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewrewardDiscipline" element={<LayoutPrivateRoute><ViewRewardDiscipline /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updaterewardDiscipline/:rewardDisciplineId" element={<LayoutPrivateRoute><UpdateRewardDiscipline /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addrewardDiscipline" element={<LayoutPrivateRoute><AddRewardDiscipline /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewrelative" element={<LayoutPrivateRoute><ViewRelative /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updaterelative/:relativeId" element={<LayoutPrivateRoute><UpdateRelative /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addrelative" element={<LayoutPrivateRoute><AddRelative /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewsalaryGroup" element={<LayoutPrivateRoute><ViewSalaryGroup /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatesalaryGroup/:salaryGroupId" element={<LayoutPrivateRoute><UpdateSalaryGroup /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addsalaryGroup" element={<LayoutPrivateRoute><AddSalaryGroup /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewnation" element={<LayoutPrivateRoute><ViewNation /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatenation/:nationId" element={<LayoutPrivateRoute><UpdateNation /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addnation" element={<LayoutPrivateRoute><AddNation /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewmarriage" element={<LayoutPrivateRoute><ViewMarriage /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatemarriage/:marriageId" element={<LayoutPrivateRoute><UpdateMarriage /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addmarriage" element={<LayoutPrivateRoute><AddMarriage /></LayoutPrivateRoute>} />
        {/* degree */}
        <Route exact path="/admin/viewdegree" element={<LayoutPrivateRoute><ViewDegree /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatedegree/:degreeId" element={<LayoutPrivateRoute><UpdateDegree /></LayoutPrivateRoute>} />
        <Route exact path="/admin/adddegree" element={<LayoutPrivateRoute><AddDegree /></LayoutPrivateRoute>} />
        {/* insurance */}
        <Route exact path="/admin/viewinsurance" element={<LayoutPrivateRoute><ViewInsurance /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateinsurance/:insuranceId" element={<LayoutPrivateRoute><UpdateInsurance /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addinsurance" element={<LayoutPrivateRoute><AddInsurance /></LayoutPrivateRoute>} />
        {/* certificate */}
        <Route exact path="/admin/viewcertificate" element={<LayoutPrivateRoute><ViewCertificate /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatecertificate/:certificateId" element={<LayoutPrivateRoute><UpdateCertificate /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addcertificate" element={<LayoutPrivateRoute><AddCertificate /></LayoutPrivateRoute>} />
        {/* contract */}
        <Route exact path="/admin/viewcontract" element={<LayoutPrivateRoute><ViewContract /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatecontract/:contractId" element={<LayoutPrivateRoute><UpdateContract /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addcontract" element={<LayoutPrivateRoute><AddContract /></LayoutPrivateRoute>} />
        {/* classRoom */}
        <Route exact path="/admin/viewclassRoom" element={<LayoutPrivateRoute><ViewClassRoom /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateclassRoom/:classRoomId" element={<LayoutPrivateRoute><UpdateClassRoom /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addclassRoom" element={<LayoutPrivateRoute><AddClassRoom /></LayoutPrivateRoute>} />
        {/* holiday */}
        <Route exact path="/admin/viewholiday" element={<LayoutPrivateRoute><ViewHoliday /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateholiday/:holidayId" element={<LayoutPrivateRoute><UpdateHoliday /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addholiday" element={<LayoutPrivateRoute><AddHoliday /></LayoutPrivateRoute>} />
        {/* dayOff */}
        <Route exact path="/admin/viewdayOff" element={<LayoutPrivateRoute><ViewDayOff /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatedayOff/:dayOffId" element={<LayoutPrivateRoute><UpdateDayOff /></LayoutPrivateRoute>} />
        <Route exact path="/admin/adddayOff" element={<LayoutPrivateRoute><AddDayOff /></LayoutPrivateRoute>} />
        {/* department */}
        <Route exact path="/admin/viewdepartment" element={<LayoutPrivateRoute><ViewDepartment /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatedepartment/:departmentId" element={<LayoutPrivateRoute><UpdateDepartment /></LayoutPrivateRoute>} />
        <Route exact path="/admin/adddepartment" element={<LayoutPrivateRoute><AddDepartment /></LayoutPrivateRoute>} />
        {/* contractNature */}
        <Route exact path="/admin/viewcontractNature" element={<LayoutPrivateRoute><ViewContractNature /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updatecontractNature/:contractNatureId" element={<LayoutPrivateRoute><UpdateContractNature /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addcontractNature" element={<LayoutPrivateRoute><AddContractNature /></LayoutPrivateRoute>} />
        {/* eduLevel */}
        <Route exact path="/admin/vieweduLevel" element={<LayoutPrivateRoute><ViewEduLevel /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateeduLevel/:eduLevelId" element={<LayoutPrivateRoute><UpdateEduLevel /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addeduLevel" element={<LayoutPrivateRoute><AddEduLevel /></LayoutPrivateRoute>} />

        <Route exact path="/admin/viewaccount" element={<LayoutPrivateRoute><ViewAccount /></LayoutPrivateRoute>} />
        <Route exact path="admin/updateaccount/:accountId" element={<LayoutPrivateRoute><UpdateAccount /></LayoutPrivateRoute>} />
        <Route exact path="/admin/addaccount" element={<LayoutPrivateRoute><AAddAccount /></LayoutPrivateRoute>} />

        {/* admin user */}
        <Route exact path="/admin/viewuser/:maNv" element={<LayoutPrivateRoute><ViewUser /></LayoutPrivateRoute>} />
        <Route exact path="/admin/updateuser/:maNv" element={<LayoutPrivateRoute><UpdateUser /></LayoutPrivateRoute>} />

        {/* RegisterShift */}
        <Route exact path="/admin/registerShift" element={<LayoutPrivateRoute><RegisterShift /></LayoutPrivateRoute>} />

        <Route exact path="/admin/homepage" element={<HomePagePrivateRoute />} />
        {/* manager */}
        <Route exact path="/manager/viewallInsurance" element={<LayoutPrivateRoute><MViewInsurance /></LayoutPrivateRoute>} />
        <Route exact path="/manager/addInsurance" element={<LayoutPrivateRoute><MAddInsurance /></LayoutPrivateRoute>} />
        <Route exact path="/manager/updateInsurance/:managerInsuranceId" element={<LayoutPrivateRoute><MUpdateInsurance /></LayoutPrivateRoute>} />

        <Route exact path="/manager/viewallUser" element={<LayoutPrivateRoute><ViewAllUser /></LayoutPrivateRoute>} />
        <Route exact path="/manager/viewuser/:maNv" element={<LayoutPrivateRoute><ViewUser /></LayoutPrivateRoute>} />
        <Route exact path="/manager/updateuser/:maNv" element={<LayoutPrivateRoute><UpdateUser /></LayoutPrivateRoute>} />
        <Route exact path="/manager/adduser"  element={<LayoutPrivateRoute><AddUser /></LayoutPrivateRoute>} />

        <Route exact path="/manager/viewallreward" element={<LayoutPrivateRoute><MViewReward /></LayoutPrivateRoute>} />
        <Route exact path="/manager/viewalldiscipline" element={<LayoutPrivateRoute><MViewDiscipline /></LayoutPrivateRoute>} />
        <Route exact path="/manager/addreward" element={<LayoutPrivateRoute><MAddReward /></LayoutPrivateRoute>} />
        <Route exact path="/manager/adddiscipline"  element={<LayoutPrivateRoute><MAddDiscipline /></LayoutPrivateRoute>} />
        <Route exact path="/manager/updatereward/:rewardDisciplineId" element={<LayoutPrivateRoute><MUpdateReward /></LayoutPrivateRoute>} />
        <Route exact path="/manager/updatediscipline/:rewardDisciplineId"  element={<LayoutPrivateRoute><MUpdateDiscipline /></LayoutPrivateRoute>} />

        <Route exact path="/manager/viewleaveRequest"  element={<LayoutPrivateRoute><MViewLeaveRequest /></LayoutPrivateRoute>} />

        <Route exact path="/manager/homepage" element={<ManagerHomePage />} />  

        {/* employee */}
        <Route exact path="/employee/homepage" element={<EmployeeHomepage />} />
        <Route exact path="/employee/viewuser/:maNv"  element={<LayoutPrivateRoute><ViewUser /></LayoutPrivateRoute>} />
        <Route exact path="/employee/updateuser/:maNv"  element={<LayoutPrivateRoute><UpdateUser /></LayoutPrivateRoute>} />
        <Route exact path="/employee/registershifts"  element={<LayoutPrivateRoute><RegisterShifts /></LayoutPrivateRoute>} />
        <Route exact path="/employee/viewtimekeeping"  element={<LayoutPrivateRoute><ViewTimekeeping /></LayoutPrivateRoute>} />
        <Route exact path="/employee/viewcontract/:maNv"  element={<LayoutPrivateRoute><EViewContract /></LayoutPrivateRoute>} />
        <Route exact path="/employee/timeKeeping"  element={<LayoutPrivateRoute><TimeKeeping /></LayoutPrivateRoute>} />

        <Route exact path="/employee/leaveRequest"  element={<LayoutPrivateRoute><ELeaveRequest /></LayoutPrivateRoute>} />

      </Routes>
    </Router>
  );
}
