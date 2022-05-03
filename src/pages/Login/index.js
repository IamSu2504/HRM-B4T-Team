import './style.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginAPI from '../../api/login';
import { ToastContainer, toast } from 'react-toastify';
import UserAPI from "../../api/user";


export default function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [loginError, setLoginError] = useState({ status: false, error: '' })
  const [loginLoading, setLoginLoading] = useState(false)
  const navigate = useNavigate();

  async function login(event) {
    try {
      event.preventDefault();
      setLoginError({ status: false, error: '' })
      if (!userName.trim().length || !password.trim().length) {
        setLoginError({ status: true, error: 'Tên đăng nhập hoặc mật khẩu không thể để trống' })
      } else {
        setLoginLoading(true)
        const loginRes = await LoginAPI.login({ username: userName, password : password})
        if (loginRes?.status === 200) {
          const loginData = loginRes?.data
          const roleName = loginData?.role?.tenRole

          localStorage.setItem('username', loginData?.username)
          localStorage.setItem('password', loginData?.password)
          localStorage.setItem('maNv', loginData?.maNv)
          console.log(localStorage.getItem('maNv'))

          const userRes = await UserAPI.getUserById(localStorage.getItem('maNv'))
          if (userRes?.status === 200) {
            
            localStorage.setItem('name', userRes?.data?.tenNv)
          }

          localStorage.setItem('role', loginData?.role?.tenRole)

          if (roleName === 'Employee') navigate('/employee/homepage')
          else if (roleName === 'Manager') navigate('/manager/homepage')
          else if (roleName === 'Admin') navigate('/admin/homepage')
        } else {
          setLoginLoading(false)
          toast.error('Đăng nhập không thành công')
        }
      }
    } catch (error) {
      if (error.response) {
        setLoginLoading(false)
        toast.error(error.response.data)
      }
    }
  }


  // const getUserDetail = async () => {
  //   if (localStorage.getItem('maNv')) {
  //     const userRes = await UserAPI.getUserById(localStorage.getItem('maNv'))
  //     if (userRes?.status === 200) {
  //       setUserDetail(userRes?.data)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getUserDetail()
  // }, [])
  return (
    <div className='login-page'>
      <div className='login-frame'>
        <div className='left'>
          <div className='header'>
            <p>Chào mừng bạn</p>
          </div>
          <div className='desc'>
            <p>Hãy đảm bảo tài khoản của bạn đã được ủy quyền</p>
          </div>
          <div className='img'>
            <img src="/login-bg.svg" alt='login-img' />
          </div>
        </div>
        <div className='right'>
          <div className='form'>
            <div className='img'>
              <img src="/login-icon.svg" alt='login-img' />
            </div>

            <div className='user-input' >
              <div className='input-icon'>
                <img src="/login-user-icon.svg" />
              </div>
              <input placeholder='Tên đăng nhập'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className='pw-input'>
              <div className='input-icon'>

              </div>
              <input type="password"
                placeholder='Mật khẩu'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              {loginError.status && <div className="login-error">{loginError.error}</div>}
            </div>
            <div className='login-button'>
              <button
                onClick={login}
                disabled={loginLoading}
              >
                {loginLoading ? <img src='/loading-animate.svg' className='login-loading' /> :
                  'ĐĂNG NHẬP'
                }
              </button>
            </div>

            <div className='fogot-pw-txt' onClick={() => navigate('/forgot')}>
              <a>Quên mật khẩu?</a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}