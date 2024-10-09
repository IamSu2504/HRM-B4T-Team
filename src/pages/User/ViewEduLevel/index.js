import "./style.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserAPI from "../../../api/user";
import MEduLevelAPI from "../../../api/Manager/eduLevel";

import { useParams } from "react-router-dom";

export default function ViewEduLevel() {

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



  const [eduLevelDetail, setEduLevel] = useState([])
  const getEduLevel = async () => {
    if (maNv) {
      const eduLevelRes = await MEduLevelAPI.getManagerEduLevelByMaNv(maNv)
      if (eduLevelRes?.status === 200) {
        console.log('>>>>>', eduLevelRes?.data)
        setEduLevel(eduLevelRes?.data)
      }
    }
  }

  useEffect(() => {
    getUserDetail()
    getEduLevel()
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
          <p className="title">Education Level</p>
          {eduLevelDetail.map((eduLevelItem, eduLevelIndex) => {
            return (
              <div>
                <p className="contents"><img className="img-contents" src="/employee/dot.svg" />{eduLevelItem?.idChuyenMon?.chuyenMon}</p>
                <p className="contents">Level: {eduLevelItem?.idTrinhDo?.trinhDo}</p>
                <p className="contents">Degree: {eduLevelItem?.idBangCap?.loaiBangCap}</p>
                <p className="contents">School: {eduLevelItem?.tenTruong}</p>
                <p className="contents">From: {eduLevelItem?.thoiGianTu}</p>
                <p className="contents">To: {eduLevelItem?.thoiGianDen}</p>
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