import "./style.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserAPI from "../../../api/user";
import MCertificateAPI from "../../../api/Manager/certificate";

import { useParams } from "react-router-dom";

export default function ViewUser() {

  const [userDetail, setUserDetail] = useState({
    tinhChatHopDongID: '', tinhTrangHonNhanID: '', chucVuID: '',
    quocTichID: '', tenNv: '', ngaySinh: '', gioiTinh: '',
    soDienThoai: '', soDienThoai2: '', email: '',
    cccd: '', noiCapCccd: '', ngayCapCccd: '',
    ngayHetHanCccd: '', hoChieu: '', noiCapHoChieu: '',
    ngayCapHoChieu: '', ngayHetHanHoChieu: '', noiSinh: '',
    queQuan: '', diaChiThuongTru: '', diaChiTamTru: '',
    atmNganHang: '', soAtm: '', trangThaiLaoDong: '',
    ngayBatDauLam: '', ngayNghiViec: '', lyDoNghi: '', image: ''
  })

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
          <p className="manhanvien">Employee code: {userDetail?.id}</p>
          {/* <p className="manhanvien">Giới tính: {userDetail?.gioiTinh ? 'Nam' : 'Nữ'}</p> */}
        </div>

        <div>
          <p className="title">Contact</p>
          {/* <p className="contents"><img className="img-contents" src="/employee/birthday.svg" />01/01/1999</p> */}
          <p className="contents"><img className="img-contents" src="/employee/mail.svg" />{userDetail?.email}</p>
          <p className="contents"><img className="img-contents" src="/employee/phone.svg" />{userDetail?.soDienThoai} | {userDetail?.soDienThoai2}</p>
          <p className="contents"><img className="img-contents" src="/employee/address.svg" />Permanent address: {userDetail?.diaChiThuongTru}</p>
          <p className="contents"><img className="img-contents" src="/employee/address.svg" />Temporary residence address: {userDetail?.diaChiTamTru}</p>
        </div>
        <div>
          <p className="title">Personal information</p>
          {/* <p className="contents"><img className="img-contents" src="/employee/dot.svg" />Kỹ thuật phần mềm</p> */}
          <p className="contents">Date of birth: {userDetail?.ngaySinh}</p>
          <p className="contents">Gender: {userDetail?.gioiTinh ? 'Male' : 'Female'}</p>
          <p className="contents">Nationality: {userDetail?.quocTich?.quocTich}</p>
          <p className="contents">The nature of the contract: {userDetail?.tinhChatHopDong?.tinhChatHopDong}</p>
          <p className="contents">Marital status: {userDetail?.tinhTrangHonNhan?.tinhTrang}</p>
          <p className="contents">Citizen identification: {userDetail?.cccd}</p>
          <p className="contents">Place of issue of identity card: {userDetail?.noiCapCccd}</p>
          <p className="contents">Date of issuance of citizen's identity card: {userDetail?.ngayCapCccd}</p>
          <p className="contents">Citizen ID expiration date: {userDetail?.ngayHetHanCccd}</p>
          <p className="contents">Passport: {userDetail?.hoChieu}</p>
          <p className="contents">Place of issue of passport: {userDetail?.noiCapHoChieu}</p>
          <p className="contents">Passport issuance date: {userDetail?.ngayCapHoChieu}</p>
          <p className="contents">Passport expiration date: {userDetail?.ngayHetHanHoChieu}</p>
          <p className="contents">Place of birth: {userDetail?.noiSinh}</p>
          <p className="contents">Home town: {userDetail?.queQuan}</p>
          <p className="contents">Bank name: {userDetail?.atmNganHang}</p>
          <p className="contents">ATM number: {userDetail?.soAtm}</p>
          <p className="contents">Date start work: {userDetail?.ngayBatDauLam}</p>
          <p className="contents">Day off: {userDetail?.ngayNghiViec}</p>
          <p className="contents">Reason for leave: {userDetail?.lyDoNghi}</p>
          <p className="contents">Status: {userDetail?.trangThai ? 'Working' : 'Finished'}</p>
        </div>
        {/* <div>
          <p className="title">Các Kĩ năng</p>
          <p className="contents"><img className="img-contents" src="/employee/dot.svg" />Kỹ thuật phần mềm</p>
          <p className="contents">Đại học FPT Hà Nội</p>
        </div> */}
        {/* <div>
          <p className="title">Chứng Chỉ Tiếng Anh</p>
          <p className="contents"><img className="img-contents" src="/employee/dot.svg" />{certificateDetail[0]?.certificateID?.loaiChungChi}</p>
          <p className="contents">Nơi Cấp: {certificateDetail[0]?.noiCap}</p>
          <p className="contents">Ngày Cấp: {certificateDetail[0]?.ngayCap}</p>
          <p className="contents">Điểm: {certificateDetail[0]?.diemSo}</p>
        </div> */}
        {/* <div>
          <p>Mã Số Nhân Viên: {userDetail?.id || ''}</p>
          <p>Họ Và Tên: {userDetail?.tenNv || ''}</p>
          <p>Giới Tính: {userDetail?.gioiTinh? "Nam" : "Nữ"}</p>
          <p>Ngày Sinh: {userDetail?.ngaySinh || ''}</p>
          <p>Nơi Sinh: {userDetail?.noiSinh || ''}</p>
          <p>Địa chỉ thường trú: {userDetail?.diaChiThuongTru || ''}</p>
          <p>Địa chỉ tạm trú: {userDetail?.diaChiTamTru || ''}</p>
          <p>Tình trạng hôn nhân: {userDetail?.tinhTrangHonNhan?.tinhTrang || ''}</p>
          <p>Quốc Tịch: {userDetail?.quocTich?.quocTich || ''}</p>
          <p>Số Điện Thoại: {userDetail?.soDienThoai || ''}</p>
          <p>Số điện thoại 2: {userDetail?.soDienThoai2 || ''}</p>
          <p>Email: {userDetail?.email || ''}</p>
          <p>Căn cước công dân: {userDetail?.cccd || ''}</p>
          <p>Nơi cấp căn cước công dân: {userDetail?.noiCapCccd || ''}</p>
          <p>Ngày cấp căn cước: {userDetail?.ngayCapCccd || ''}</p>
          <p>Ngày hết hạn căn cước: {userDetail?.ngayHetHanCccd || ''}</p>
          <p>Hộ chiếu: {userDetail?.hoChieu || ''}</p>
          <p>Ngày cấp hộ chiếu: {userDetail?.ngayCapHoChieu || ''}</p>
          <p>Ngày hết hạn hộ chiếu: {userDetail?.ngayHetHanHoChieu || ''}</p>
          <p>Nơi cấp hộ chiếu: {userDetail?.noiCapHoChieu || ''}</p>
          <p>Chức vụ hiện tại : {userDetail?.chucVu?.tenChucVu || ''}</p>
          <p>ATM ngân hàng: {userDetail?.atmNganHang || ''}</p>
          <p>Số ATM: {userDetail?.soAtm || ''}</p>
        </div> */}
      </div>
      <div className="list-button">
        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/updateuser/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/updateuser/${maNv}`)
            }
            else {
              navigate(`/employee/updateuser/${maNv}`)
            }
        }}>
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">Edit information</span>
          </button>
        </div>

        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/viewcontract/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/viewcontract/${maNv}`)
            }
            else {
              navigate(`/employee/viewcontract/${maNv}`)
            }
        }}>
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">Contract</span>
          </button>
        </div>
        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/viewshift/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/viewshift/${maNv}`)
            }
            else {
              navigate(`/employee/viewshift/${maNv}`)
            }
        }}>
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">Shift</span>
          </button>
        </div>
        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/viewworkingProcess/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/viewworkingProcess/${maNv}`)
            }
            else {
              navigate(`/employee/viewworkingProcess/${maNv}`)
            }
        }}>
          <button className="save-button" >
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">Work progress</span>
          </button>
        </div>
        {/* <div >
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">Academic level</span>
          </button>
        </div> */}
        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/viewcertificate/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/viewcertificate/${maNv}`)
            }
            else {
              navigate(`/employee/viewcertificate/${maNv}`)
            }
        }}>
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">English certificate</span>
          </button>
        </div>
        <div onClick={() => {
          if (localStorage.getItem('role') === 'Admin') {
            navigate(`/admin/ViewEduLevel/${maNv}`)
          }
          else
            if (localStorage.getItem('role') === 'Manager') {
              navigate(`/manager/ViewEduLevel/${maNv}`)
            }
            else {
              navigate(`/employee/ViewEduLevel/${maNv}`)
            }
        }}>
          <button className="save-button">
            <span class="image">
              <img src="/home/save-icon.svg" />
            </span>
            <span class="text">EduLevel</span>
          </button>
        </div>
      </div>
    </div>

  );
}