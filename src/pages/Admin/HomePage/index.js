import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

export default function AdminHomePage(props) {
  const navigate = useNavigate();
  return (
   
    <div className="admin-homepage">
      
      <div className="bg">
        <img src='/admin/homepage/bg.png' />
      </div>
      <div className='bg-top'>
        <img src='/admin/homepage/bg-top.png' />
      </div>
      <div className="content">
          <div className="name">
            {localStorage.getItem('name')}
          </div>
          <div className="position">
            <p>
              Admin
            </p>
          </div>
          <div className="list-menu">
            <ul>
              <li onClick={()=>navigate('/admin/viewaccount')}>Account</li>
              <li onClick={()=>navigate('/admin/viewsalarygrade')}>Categories</li>
              <li>Contract information</li>
              <li>Timekeeping</li>
              
            </ul>
          </div>
      </div>
      <div className="dot1">
        <img src='/admin/homepage/white-dot.png' alt=""/>
      </div>

      <div className="dot2">
        <img src='/admin/homepage/white-dot.png' alt=""/>
      </div>

      <div className="dot3">
        <img src='/admin/homepage/white-dot.png' alt=""/>
      </div>
    </div>
  )
  
}
