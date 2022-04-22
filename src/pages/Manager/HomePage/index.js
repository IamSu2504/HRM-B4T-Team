import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function ManagerHomePage(){
  console.log(localStorage.getItem('name'))
  const navigate = useNavigate();
  return (
    <div className='manager-homepage'>
      <div className='left'>
        <div className='tile-on'>
        </div>
        <div className='content'>
          <div className='name'>
            {localStorage.getItem('name')}
            
          </div> 
          <div className='position'>
            Quản lý
          </div>
          <div className='menu'>
            <ul>
              <li onClick={() => navigate('/manager/viewallUser')}>Nhân Sự</li>
              <li>Thông Tin Hợp Đồng</li>
              <li>Chấm Công</li>
            </ul>
          </div>
        </div>
        <div className='underlined'>
        </div>
      </div>
      <div className='right'>
        <img src='/manager/homepage/bg.png' alt=''/>
        <div className='dot1'>
          <img src='/manager/homepage/white-dot.png' alt=''/>  
        </div>
        <div className='dot2'>
          <img src='/manager/homepage/white-dot.png' alt=''/>  
        </div>
      </div>
    </div>
  )
}