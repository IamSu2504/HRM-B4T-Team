import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

export default function AdminHomePage(props) {
  const navigate = useNavigate();
  console.log(localStorage.getItem('username'))
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
            LE QUANG TUAN
          </div>
          <div className="position">
            <p>
              Admin
            </p>
          </div>
          <div className="list-menu">
            <ul>
              <li onClick={()=>navigate('/admin/viewaccount')}>Tài Khoản</li>
              <li onClick={()=>navigate('/admin/viewsalarygrade')}>Danh Mục </li>
              <li>Thông Tin Hợp Đồng</li>
              <li>Chấm Công</li>
              
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
