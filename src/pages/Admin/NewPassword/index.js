import React from 'react'
import './style.css'
import ForgotAPI from "../../../api/forgot";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function NewPassword() {
  const [accountDetail, setAccountDetail] = useState(0)
  const [newpassword, setNewPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [submitError, setSubmitError] = useState({ status: false, error: '' })
  const [isSubmit, setIsSubmit] = useState(false)
  const { forgotId } = useParams()

  const getAccountDetail = async () => {
    if (forgotId) {
      const accountIdRes = await ForgotAPI.getAccountById(forgotId)
      if (accountIdRes?.status === 200) {
        setAccountDetail(accountIdRes?.data)
      }
    }
  }

  useEffect(() => {
    getAccountDetail()
  }, [])


  const handleUpdate = async () => {
    try {
      setSubmitError({ status: false, error: '' })

      if (!newpassword.trim().length) {
        setSubmitError({ status: true, error: 'Mật khẩu không được bỏ trống' })
      }
      else
        if (!repassword.trim().length) {
          setSubmitError({ status: true, error: 'Nhập Lại Mật khẩu không được bỏ trống' })
        } else
          if (!(newpassword === repassword)) {
            setSubmitError({ status: true, error: 'Nhập Lại Mật Khẩu Chưa Đúng' })
          }
          else {
            setIsSubmit(true)

            const updateRes = await ForgotAPI.updatePassword({ id: accountDetail?.id, username: accountDetail?.username, password: repassword, maNv: accountDetail?.maNv, roleID: accountDetail?.role?.id })
            if (updateRes?.status === 200) {
              toast.success('Cập nhật mật khẩu thành công')
            }
          }
    } catch (error) {
      if (error.response) {
        setSubmitError({ status: true, error: error.response.data })
      }
    } finally {
      setIsSubmit(false)
    }
  }

  return (
    <div className='forgot-page'>

      <div className='forgot-frame'>
        <div className='right'>
          <div className='form'>
            <div className='img'>
              <img src="../../login-icon.svg" alt='login-img' />
            </div>

            <div className='user-input' >

              <input placeholder='Nhập Mật Khẩu Mới'
                value={newpassword}
                onChange={(event) => setNewPassword(event.target.value)} />

            </div>
            <div className='user-input' >

              <input placeholder='Nhập Lại Mật Khẩu Mới'
                value={repassword}
                onChange={(event) => setRePassword(event.target.value)} />
            </div>
            <div>
              {submitError.status && <div className="forgot-error">{submitError.error}</div>}
            </div>


            <div className='forgot-button'>
              <button disabled={isSubmit} onClick={handleUpdate}>Cập Nhật Mật Khẩu Mới</button>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}