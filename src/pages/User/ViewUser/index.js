
import "./style.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserAPI from "../../../api/user";
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
  const {maNv} = useParams();
  const getUserDetail = async () => {
    if (maNv) {
     
      const userRes = await UserAPI.getUserById(maNv)
      if (userRes?.status === 200) {
        setUserDetail(userRes?.data)
      }
    }
  }

  useEffect(() => {
    getUserDetail()
  }, [])
  console.log(maNv)
  return (
    <div className="update-account-page">
      <div className="row">
        <div className="col-12">
          <div className="title">Thông Tin Nhân Viên</div>
        </div>
      </div>

      <div className="row avatar-row">
        <div>
          <img className="img" src="/home/anhdaidien.png" alt="avatar" />
        </div>

        <div>
          <p>Mã Số Nhân Viên: {userDetail?.id || ''}</p>
          <p>Họ Và Tên: {userDetail?.tenNv || ''}</p>
          <p>Giới Tính: {userDetail?.gioiTinh || ''}</p>
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
        </div>
      </div>
      <div onClick={() => {
        if (localStorage.getItem('role') === 'Admin'){
          navigate(`/admin/updateuser/${maNv}`)
        } 
        else
        if (localStorage.getItem('role') === 'Manager'){
          navigate(`/manager/updateuser/${maNv}`)
        }
        else{
          navigate(`/employee/updateuser/${maNv}`)
        }
      }}>
        <button className="save-button">
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">Sửa Thông Tin</span>
        </button>
      </div>
    </div>
  );
}
