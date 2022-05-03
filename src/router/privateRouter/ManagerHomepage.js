import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminHomePage from '../../pages/Admin/HomePage';
import ManagerHomePage from '../../pages/Manager/HomePage';
import EmployeeHomePage from '../../pages/Employee/HomePage';

const ManagerHomePagePrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if (userRole) {
    if (userRole === 'Manager') {
      return <ManagerHomePage {...props} />
    }
  }
  return <Navigate to='/login' />
};

export default ManagerHomePagePrivateRoute;