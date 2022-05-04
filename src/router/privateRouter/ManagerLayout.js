import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

import EmployeeLayout from '../../layouts/EmployeeLayout';
import ManagerLayout from '../../layouts/ManagerLayout';

const ManagerLayoutPrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if (userRole) {
    if (userRole === 'Manager') {
      return <ManagerLayout {...props} />
    }
  }
  return <Navigate to='/login' />
};


export default ManagerLayoutPrivateRoute;