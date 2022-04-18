import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function EmployeeHomepage(){
  const navigate = useNavigate();
  return (
    <div className='employee-homepage'>
      <div className="bg">
        <img src='/employee/bg.png' alt=''/>
      </div>

      <div className='bg-top'>
        <div className='name'>
          LE QUANG TUAN
        </div>
        <div className='position'>
          Nhân viên
        </div>
        <div className='menu'>
          <ul>
            <li onClick={()=>navigate('/employee/viewcontract')}>Thông Tin Hợp Đồng</li>
            <li>Chấm Công</li>
          </ul>
        </div>
      </div>
      <div className='dot1'>
        <img src='/admin/homepage/white-dot.png' alt=""/>
      </div>

      <div className='dot2'>
        <img src='/employee/whitedot-reverse.png' alt=""/>
      </div>
    </div>
  )
}