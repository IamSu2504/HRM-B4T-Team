import "./style.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserAPI from "../../../api/user";
import MCertificateAPI from "../../../api/Manager/certificate";

import { useParams } from "react-router-dom";

export default function ViewCertificate() {

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



  const [certificateDetail, setCertificate] = useState([])
  const getCertificate = async () => {
    if (maNv) {
      const certificateAPIRes = await MCertificateAPI.getByMaNV(maNv)
      if (certificateAPIRes?.status === 200) {
        console.log('>>>>>', certificateAPIRes?.data)
        setCertificate(certificateAPIRes?.data)
      }
    }
  }

  useEffect(() => {
    getUserDetail()
    getCertificate()
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
          <p className="manhanvien">Mã Số Nhân Viên: {userDetail?.id}</p>
          {/* <p className="manhanvien">Giới tính: {userDetail?.gioiTinh ? 'Nam' : 'Nữ'}</p> */}
        </div>

        <div>
          <p className="title">Certificate</p>
          {certificateDetail.map((certificateItem, certificateIndex) => {
            return (
              <div>
                <p className="contents"><img className="img-contents" src="/employee/dot.svg" />{certificateItem?.certificateID?.loaiChungChi}</p>
                <p className="contents">Nơi Cấp: {certificateItem?.noiCap}</p>
                <p className="contents">Ngày Cấp: {certificateItem?.ngayCap}</p>
                <p className="contents">Điểm: {certificateItem?.diemSo}</p>
              </div>
            )
          })}
        </div>


      </div>
      <div>
        <button className="save-button" onClick={() => navigate(`/manager/viewallUser`)}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">View User</span>
        </button>
      </div>
    </div>

  );
}