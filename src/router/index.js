import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ManagerLayout from "../layouts/ManagerLayout";
import AdminLayoutPrivateRoute from './privateRouter/admin';
import EmployeeLayout from '../layouts/EmployeeLayout';
import ViewAllEmployee from "../pages/Manager/ViewAllEmployee";
import Login from "../pages/Login";
import Forgot from "../pages/Admin/Forgot";
import NewPassword from "../pages/Admin/NewPassword";
import UpdateUser from "../pages/User/UpdateUser";
import AddNewAccount from "../pages/Admin/AddNewAccount";
import AddAccount from "../pages/Manager/AddAccount";
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

import AdminHomePagePrivateRoute from "./privateRouter/adminHomepage";
import ManagerHomePage from "../pages/Manager/HomePage";
import EmployeeHomepage from "../pages/Employee/HomePage";
import RegisterShifts from "../pages/Employee/RegisterShifts";
import ViewTimekeeping from "../pages/Employee/TimeKeeping";
import EViewContract from "../pages/Employee/ViewContract";
import TimeKeeping from "../pages/Employee/TimeKeeping";

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        
        
        {/* admin */}
        {/* <Route exact path="/admin/add-account" element={<AdminLayoutPrivateRoute><AddNewAccount /></AdminLayoutPrivateRoute>} /> */}
        <Route exact path="/forgot" element={<Forgot />} />
        
        <Route exact path="/account/:forgotId/forgot" element={<NewPassword />}/>
        {/* admin category */}

        <Route exact path="/admin/viewsalarygrade" element={<AdminLayoutPrivateRoute><ViewSalaryGrade /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatesalarygrade" element={<AdminLayoutPrivateRoute><UpdateSalaryGrade /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addsalarygrade" element={<AdminLayoutPrivateRoute><AddSalaryGrade /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewtax" element={<AdminLayoutPrivateRoute><ViewTax /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatetax/:taxId" element={<AdminLayoutPrivateRoute><UpdateTax /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addtax" element={<AdminLayoutPrivateRoute><AddTax /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewshift" element={<AdminLayoutPrivateRoute><ViewShift /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateshift/:shiftId" element={<AdminLayoutPrivateRoute><UpdateShift /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addshift" element={<AdminLayoutPrivateRoute><AddShift /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewposition" element={<AdminLayoutPrivateRoute><ViewPosition /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateposition/:positionId" element={<AdminLayoutPrivateRoute><UpdatePosition /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addposition" element={<AdminLayoutPrivateRoute><AddPosition /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewspecialize" element={<AdminLayoutPrivateRoute><ViewSpecialize /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatespecialize/:specializeId" element={<AdminLayoutPrivateRoute><UpdateSpecialize /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addspecialize" element={<AdminLayoutPrivateRoute><AddSpecialize /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewrewardDiscipline" element={<AdminLayoutPrivateRoute><ViewRewardDiscipline /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updaterewardDiscipline/:rewardDisciplineId" element={<AdminLayoutPrivateRoute><UpdateRewardDiscipline /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addrewardDiscipline" element={<AdminLayoutPrivateRoute><AddRewardDiscipline /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewrelative" element={<AdminLayoutPrivateRoute><ViewRelative /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updaterelative/:relativeId" element={<AdminLayoutPrivateRoute><UpdateRelative /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addrelative" element={<AdminLayoutPrivateRoute><AddRelative /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewsalaryGroup" element={<AdminLayoutPrivateRoute><ViewSalaryGroup /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatesalaryGroup/:salaryGroupId" element={<AdminLayoutPrivateRoute><UpdateSalaryGroup /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addsalaryGroup" element={<AdminLayoutPrivateRoute><AddSalaryGroup /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewnation" element={<AdminLayoutPrivateRoute><ViewNation /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatenation/:nationId" element={<AdminLayoutPrivateRoute><UpdateNation /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addnation" element={<AdminLayoutPrivateRoute><AddNation /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewmarriage" element={<AdminLayoutPrivateRoute><ViewMarriage /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatemarriage/:marriageId" element={<AdminLayoutPrivateRoute><UpdateMarriage /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addmarriage" element={<AdminLayoutPrivateRoute><AddMarriage /></AdminLayoutPrivateRoute>} />
        {/* degree */}
        <Route exact path="/admin/viewdegree" element={<AdminLayoutPrivateRoute><ViewDegree /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatedegree/:degreeId" element={<AdminLayoutPrivateRoute><UpdateDegree /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/adddegree" element={<AdminLayoutPrivateRoute><AddDegree /></AdminLayoutPrivateRoute>} />
        {/* insurance */}
        <Route exact path="/admin/viewinsurance" element={<AdminLayoutPrivateRoute><ViewInsurance /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateinsurance/:insuranceId" element={<AdminLayoutPrivateRoute><UpdateInsurance /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addinsurance" element={<AdminLayoutPrivateRoute><AddInsurance /></AdminLayoutPrivateRoute>} />
        {/* certificate */}
        <Route exact path="/admin/viewcertificate" element={<AdminLayoutPrivateRoute><ViewCertificate /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatecertificate/:certificateId" element={<AdminLayoutPrivateRoute><UpdateCertificate /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addcertificate" element={<AdminLayoutPrivateRoute><AddCertificate /></AdminLayoutPrivateRoute>} />
        {/* contract */}
        <Route exact path="/admin/viewcontract" element={<AdminLayoutPrivateRoute><ViewContract /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatecontract/:contractId" element={<AdminLayoutPrivateRoute><UpdateContract /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addcontract" element={<AdminLayoutPrivateRoute><AddContract /></AdminLayoutPrivateRoute>} />
        {/* classRoom */}
        <Route exact path="/admin/viewclassRoom" element={<AdminLayoutPrivateRoute><ViewClassRoom /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateclassRoom/:classRoomId" element={<AdminLayoutPrivateRoute><UpdateClassRoom /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addclassRoom" element={<AdminLayoutPrivateRoute><AddClassRoom /></AdminLayoutPrivateRoute>} />
        {/* holiday */}
        <Route exact path="/admin/viewholiday" element={<AdminLayoutPrivateRoute><ViewHoliday /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateholiday/:holidayId" element={<AdminLayoutPrivateRoute><UpdateHoliday /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addholiday" element={<AdminLayoutPrivateRoute><AddHoliday /></AdminLayoutPrivateRoute>} />
        {/* dayOff */}
        <Route exact path="/admin/viewdayOff" element={<AdminLayoutPrivateRoute><ViewDayOff /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatedayOff/:dayOffId" element={<AdminLayoutPrivateRoute><UpdateDayOff /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/adddayOff" element={<AdminLayoutPrivateRoute><AddDayOff /></AdminLayoutPrivateRoute>} />
        {/* department */}
        <Route exact path="/admin/viewdepartment" element={<AdminLayoutPrivateRoute><ViewDepartment /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatedepartment/:departmentId" element={<AdminLayoutPrivateRoute><UpdateDepartment /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/adddepartment" element={<AdminLayoutPrivateRoute><AddDepartment /></AdminLayoutPrivateRoute>} />
        {/* contractNature */}
        <Route exact path="/admin/viewcontractNature" element={<AdminLayoutPrivateRoute><ViewContractNature /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updatecontractNature/:contractNatureId" element={<AdminLayoutPrivateRoute><UpdateContractNature /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addcontractNature" element={<AdminLayoutPrivateRoute><AddContractNature /></AdminLayoutPrivateRoute>} />
        {/* eduLevel */}
        <Route exact path="/admin/vieweduLevel" element={<AdminLayoutPrivateRoute><ViewEduLevel /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateeduLevel/:eduLevelId" element={<AdminLayoutPrivateRoute><UpdateEduLevel /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addeduLevel" element={<AdminLayoutPrivateRoute><AddEduLevel /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/viewaccount" element={<AdminLayoutPrivateRoute><ViewAccount /></AdminLayoutPrivateRoute>} />
        <Route exact path="admin/updateaccount/:accountId" element={<AdminLayoutPrivateRoute><UpdateAccount /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/addaccount" element={<AdminLayoutPrivateRoute><AAddAccount /></AdminLayoutPrivateRoute>} />
        {/* admin user */}
        <Route exact path="/admin/viewuser" element={<AdminLayoutPrivateRoute><ViewUser /></AdminLayoutPrivateRoute>} />
        <Route exact path="/admin/updateuser/:maNv" element={<AdminLayoutPrivateRoute><UpdateUser /></AdminLayoutPrivateRoute>} />

        <Route exact path="/admin/homepage" element={<AdminHomePagePrivateRoute />} />

        <Route exact path="/manager/viewallemployee" element={<ManagerLayout><ViewAllEmployee /></ManagerLayout>} />
        <Route exact path="/manager/viewuser" element={<ManagerLayout><ViewUser /></ManagerLayout>} />
        <Route exact path="/manager/updateuser/:maNv" element={<ManagerLayout><UpdateUser /></ManagerLayout>} />
        <Route exact path="/manager/addaccount"  element={<ManagerLayout><AddAccount /></ManagerLayout>} />
        <Route exact path="/manager/homepage" element={<ManagerHomePage />} />  

        {/* employee */}
        <Route exact path="/employee/homepage" element={<EmployeeHomepage />} />
        <Route exact path="/employee/viewuser"  element={<EmployeeLayout><ViewUser /></EmployeeLayout>} />
        <Route exact path="/employee/updateuser"  element={<EmployeeLayout><UpdateUser /></EmployeeLayout>} />
        <Route exact path="/employee/registershifts"  element={<EmployeeLayout><RegisterShifts /></EmployeeLayout>} />
        <Route exact path="/employee/viewtimekeeping"  element={<EmployeeLayout><ViewTimekeeping /></EmployeeLayout>} />
        <Route exact path="/employee/viewcontract"  element={<EmployeeLayout><EViewContract /></EmployeeLayout>} />
        <Route exact path="/employee/timeKeeping"  element={<EmployeeLayout><TimeKeeping /></EmployeeLayout>} />
      </Routes>
    </Router>
  );
}
