import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

import EmployeeLayout from '../../layouts/EmployeeLayout';
import ManagerLayout from '../../layouts/ManagerLayout';

const AdminLayoutPrivateRoute = (props) => {
  let userRole = localStorage.getItem('role')
  if (userRole) {
    if (userRole === 'Admin') {
      return <AdminLayout {...props} />
    }
  }
  return <Navigate to='/login' />

};


export default AdminLayoutPrivateRoute;