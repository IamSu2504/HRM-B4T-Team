import React from 'react'
import './style.css'
import ForgotAPI from "../../../api/forgot";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Forgot() {
  const [gmail, setGmail] = useState('')
  const [forgotError, setForgotError] = useState({ status: false, error: '' })
  
  async function forgot(event) {
    
    try {

      event.preventDefault();
      setForgotError({ status: false, error: '' })
      let gmail2 = [gmail]
      if (!gmail.trim().length) {
        setForgotError({ status: true, error: 'Gmail không thể để trống' })
      } else {
       
        const forgotRes = await ForgotAPI.forgot(gmail2)
        if (forgotRes?.status === 200) {
          toast(forgotRes?.data)
        } else {
          toast.error(forgotRes?.data)
        }
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data)
      }
    }
  }


  return (
    <div className='forgot-page'>

      <div className='forgot-frame'>
        <div className='right'>
          <div className='form'>
            <div className='img'>
              <img src="../login-icon.svg" alt='login-img' />
            </div>

            <div className='user-input' >
              <div className='input-icon'>
                {/* <img src="../login-user-icon.svg" alt='login-img' /> */}
              </div>
              <div className="desc" >Please enter your email to get links for changing new passwords.</div>
              <input placeholder='Gmail'
                value={gmail}
                onChange={(event) => setGmail(event.target.value)} />
            </div>
            <div>
              {forgotError.status && <div className="forgot-error">{forgotError.error}</div>}
            </div>
            <div className='forgot-button'>
              <button  onClick={forgot}>Get Password</button>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}