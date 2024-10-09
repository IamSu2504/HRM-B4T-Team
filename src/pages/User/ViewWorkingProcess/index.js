import "./style.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserAPI from "../../../api/user";
import MWorkingProcessAPI from "../../../api/Manager/workingProcess";

import { useParams } from "react-router-dom";

export default function ViewWorkingProcess() {

  const [userDetail, setUserDetail] = useState([])

  const navigate = useNavigate();
  const { maNv } = useParams();
  const getUserDetail = async () => {
    if (maNv) {

      const userRes = await UserAPI.getUserById(maNv)
      if (userRes?.status === 200) {
        setUserDetail(userRes?.data)
      }
    }
  }



  const [workingProcessDetail, setWorkingProcess] = useState([])
  const getWorkingProcess = async () => {
    if (maNv) {
      const workingProcessRes = await MWorkingProcessAPI.getManagerWorkingProcessByMaNV(maNv)
      if (workingProcessRes?.status === 200) {

        setWorkingProcess(workingProcessRes?.data)
      }
    }
  }

  useEffect(() => {
    getUserDetail()
    getWorkingProcess()
  }, [])

  return (
    <div className="update-account-page">
      {/* <div className="row">
        <div className="col-12">
          <div className="title">Thông Tin Nhân Viên</div>
        </div>
      </div> */}

      <div className="row avatar-row">
        <div>
          <img src={`http://localhost:8080/user/${userDetail?.id}/image`} alt="avatar" />
          <br></br><br></br>
        </div>
        <div>
          <p className="hoten">{userDetail?.tenNv}</p>
          <p className="manhanvien">Employee code: {userDetail?.id}</p>
          {/* <p className="manhanvien">Giới tính: {userDetail?.gioiTinh ? 'Nam' : 'Nữ'}</p> */}
        </div>

        <div>
          <p className="title">Working Process</p>
          {workingProcessDetail.map((workingProcessItem, workingProcessIndex) => {
            return (
              <div>
                <p className="contents">Department: {workingProcessItem?.idPhongBan?.maPhongBan} : {workingProcessItem?.idPhongBan?.tenPhongBan}</p>
                <p className="contents">Position: {workingProcessItem?.idChucVu?.tenChucVu}</p>
                <p className="contents">Start date: {workingProcessItem?.ngayVao}</p>
                <p className="contents">End date: {workingProcessItem?.ngayRa}</p>
                <p className="contents">Status: {workingProcessItem?.trangThai ? 'Working' : 'Leaved'}</p>
              </div>
            )
          })}
        </div>


      </div>
      <div>
        <button className="save-button" onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/viewUser/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/viewUser/${maNv}`)
            }
            else {
              navigate(`/employee/viewUser/${maNv}`)
            }
        }}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">View User</span>
        </button>
      </div>
    </div>

  );
}