import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const AdminLayoutPrivateRoute = (props) => {
    let userRole = localStorage.getItem('role')
    if ( userRole ){
      if ( userRole === 'Admin' ){
        return <AdminLayout {...props} />
      }else if (userRole === 'Manager'){
        return <Navigate to='/manager/home' />
      }else {
        return <Navigate to='/' />
      }
    }else{
      return <Navigate to='/login' />
    }  
};

export default AdminLayoutPrivateRoute;