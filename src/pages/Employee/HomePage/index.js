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
      <div className="logout">
          <div onClick={() => {
            localStorage.clear()
            navigate("/login");
          }}>Logout</div>
        </div>
        <div className='name'>
          {localStorage.getItem('name')}
        </div>
        <div className='position'>
          Employee
        </div>
        <div className='menu'>
          <ul>
            <li onClick={()=>navigate(`/employee/viewcontract/${localStorage.getItem('maNv')}`)}>Contract information</li>
            <li onClick={()=>navigate(`/employee/viewUser/${localStorage.getItem('maNv')}`)}>View Personal Infomation</li>
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