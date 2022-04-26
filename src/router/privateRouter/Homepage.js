import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminHomePage from '../../pages/Admin/HomePage';
import ManagerHomePage from '../../pages/Manager/HomePage';
import EmployeeHomePage from '../../pages/Employee/HomePage';

// const AdminHomePagePrivateRoute = (props) => {
//     let userRole = localStorage.getItem('role')
//     if ( userRole ){
//       if ( userRole === 'Admin' ){
//         return <AdminHomePage {...props} />
//       }else if (userRole === 'Manager'){
//         return <Navigate to='/manager/home' />
//       }else {
//         return <Navigate to='/' />
//       }
//     }else{
//       return <Navigate to='/login' />
//     }
    
// };

// export default AdminHomePagePrivateRoute;

const HomePagePrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if ( userRole ){
    if ( userRole === 'Admin' ){
      return <AdminHomePage {...props} />
    }else if (userRole === 'Manager'){
      return <ManagerHomePage {...props} />
    }else {
      return <EmployeeHomePage {...props} />
    }
  }else{
    return <Navigate to='/login' />
  }
  
};

export default HomePagePrivateRoute;