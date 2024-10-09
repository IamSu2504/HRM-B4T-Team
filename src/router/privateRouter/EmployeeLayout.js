import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

import EmployeeLayout from '../../layouts/EmployeeLayout';
import ManagerLayout from '../../layouts/ManagerLayout';

const EmployeeLayoutPrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if (userRole) {
    if (userRole === 'Employee') {
      return <EmployeeLayout {...props} />
    }
  }
  return <Navigate to='/login' />
};


export default EmployeeLayoutPrivateRoute;