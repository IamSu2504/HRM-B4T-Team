import React from 'react';
import { Navigate } from 'react-router-dom';
import EmployeeHomePage from '../../pages/Employee/HomePage';

const EmployeeHomePagePrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if (userRole) {
    if (userRole === 'Employee') {
      return <EmployeeHomePage {...props} />
    }
  }
  return <Navigate to='/login' />
};

export default EmployeeHomePagePrivateRoute;