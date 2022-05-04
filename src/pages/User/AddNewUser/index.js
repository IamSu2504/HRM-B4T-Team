import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserAPI from "../../../api/user";
import PositionAPI from "../../../api/position";
import ContractNatureAPI from "../../../api/contractNature";
import NationAPI from "../../../api/nation";
import MarriageAPI from "../../../api/marriage";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dateTimeConverter } from "../../../utils/util";

export default function AddNewUser() {
  const [listPosition, setListPosition] = useState([])
  const getAllPosition = async () => {
    const positionRes = await PositionAPI.getAll()
    if (positionRes?.status === 200) {
      setListPosition(positionRes?.data)
    }
  }

  useEffect(() => {
    getAllPosition()
  }, [])

  const [listContractNature, setListContractNature] = useState([])
  const getAllContractNature = async () => {
    const ContractNatureRes = await ContractNatureAPI.getAll()
    if (ContractNatureRes?.status === 200) {
      setListContractNature(ContractNatureRes?.data)
    }
  }

  useEffect(() => {
    getAllContractNature()
  }, [])

  const [listNation, setListNation] = useState([])
  const getAllNation = async () => {
    const nationRes = await NationAPI.getAll()
    if (nationRes?.status === 200) {
      setListNation(nationRes?.data)
    }
  }

  useEffect(() => {
    getAllNation()
  }, [])

  const [listMarriage, setListMarriage] = useState([])
  const getAllMarriage = async () => {
    const marriageRes = await MarriageAPI.getAll()
    if (marriageRes?.status === 200) {
      setListMarriage(marriageRes?.data)
    }
  }

  useEffect(() => {
    getAllMarriage()
  }, [])

  const [userDetail, setUserDetail] = useState({id:'',
    tinhChatHopDongID: '', tinhTrangHonNhanID: '',
    quocTichID: '', tenNv: '', ngaySinh: '', gioiTinh: '',
    soDienThoai: '', soDienThoai2: '', email: '',
    cccd: '', noiCapCccd: '', ngayCapCccd: '',
    ngayHetHanCccd: '', hoChieu: '', noiCapHoChieu: '',
    ngayCapHoChieu: '', ngayHetHanHoChieu: '', noiSinh: '',
    queQuan: '', diaChiThuongTru: '', diaChiTamTru: '',
    atmNganHang: '', soAtm: '',
    ngayBatDauLam: '', ngayNghiViec: '', lyDoNghi: ''

  })
  const [submitError, setSubmitError] = useState({ status: false, error: '' })
  const [isSubmit, setIsSubmit] = useState(false)

  const handleCreate = async () => {
    try {
      setSubmitError({ status: false, error: '' })
      const { id,tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, ngayBatDauLam, ngayNghiViec, lyDoNghi
      } = userDetail;
      console.log('test user: ',userDetail)
      if ( !id.toString().trim()?.length || !tinhChatHopDongID.toString().trim()?.length || !tinhTrangHonNhanID.toString().trim()?.length
      || !quocTichID.toString().trim()?.length || !tenNv.toString().trim()?.length || !ngaySinh.toString().trim()?.length
      || !gioiTinh.toString().trim()?.length || !soDienThoai.toString().trim()?.length || !soDienThoai2.toString().trim()?.length
      || !email.toString().trim()?.length || !cccd.toString().trim()?.length || !noiCapCccd.toString().trim()?.length
      || !ngayCapCccd.toString().trim()?.length || !ngayHetHanCccd.toString().trim()?.length || !hoChieu.toString().trim()?.length
      || !noiCapHoChieu.toString().trim()?.length || !ngayCapHoChieu.toString().trim()?.length || !ngayHetHanHoChieu.toString().trim()?.length
      || !noiSinh.toString().trim()?.length || !queQuan.toString().trim()?.length || !diaChiThuongTru.toString().trim()?.length
      || !diaChiTamTru.toString().trim()?.length || !atmNganHang.toString().trim()?.length || !soAtm.toString().trim()?.length
     || !ngayBatDauLam.toString().trim()?.length
      ) {
        setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
      } else {
        setIsSubmit(true)

        const updateRes = await UserAPI.addNewUser({...userDetail })
        if (updateRes?.status === 200) {
          toast.success(updateRes?.data)
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
    <div className="update-account-page">
      <div className="row">
        <div className="col-12">
          <div className="title">Thêm Thông Tin Nhân Viên</div>
          <div className="title-sub">Những ô có dấu * không được để trống</div>
        </div>
      </div>

      <div className="row avatar-row">
   
        <div>
          <CustomInputField
            title="Mã Số Nhân Viên"
            placeholder = "VD: NV0000xyz"
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, id: event.target.value })
            }}
          />
          <CustomInputField
            title="Họ và tên"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tenNv: event.target.value })
            }}
          />
        </div>
      </div>

      <div className="row fied-data-row">
        <div>
          
          <CustomInputField
            title="Căn cước công dân"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, cccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Nơi cấp căn cước công dân"
            type="text"
            
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày cấp căn cước"
            
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              // const parts = event.target.value.split('-');
              // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
              setUserDetail({ ...userDetail, ngayCapCccd: event.target.value })
            }}

          />
          <CustomInputField
            title="Ngày hết hạn căn cước"
            
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
           
              setUserDetail({ ...userDetail, ngayHetHanCccd:  event.target.value })
            }}
          />
          <CustomInputField
            title="Hộ chiếu"
            
            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, hoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Nơi cấp hộ chiếu"
            
            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày cấp hộ chiếu"
            
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
    
              setUserDetail({ ...userDetail, ngayCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày hết hạn hộ chiếu"
            
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
            
              setUserDetail({ ...userDetail, ngayHetHanHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="ATM ngân hàng"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, atmNganHang: event.target.value })
            }}
          />
          <CustomInputField
            title="Số ATM"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soAtm: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày Bắt Đầu Làm: "
            
            type="date"
            disabled={false}
            handleChange={(event) => {
              
              setUserDetail({ ...userDetail, ngayBatDauLam: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Tính Chất Hợp Đồng"
            
            option={listContractNature.map((contractNatureItem) => {
              return (
                { label: contractNatureItem.tinhChatHopDong, value: contractNatureItem.id }
              )
            })}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tinhChatHopDongID: event.currentTarget.value })
            }}
          />
        </div>

        <div>
          <CustomSelectBox
            title="Giới Tính :"
            
            option={[{ label: "Nam", value: true }, { label: "Nữ", value: false }]}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, gioiTinh: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Ngày sinh"
            
            type="date"
            disabled={false} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngaySinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Nơi Sinh"
            
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiSinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Quê Quán"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, queQuan: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Quốc Tịch"
            
            option={listNation.map((nationItem) => {
              return (
                { label: nationItem.quocTich, value: nationItem.id }
              )
            })}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, quocTichID: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Địa chỉ thường trú"
            
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiThuongTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Địa chỉ tạm trú"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiTamTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Số điện thoại"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai: event.target.value })
            }}
          />
          <CustomInputField
            title="Số điện thoại 2"
           
            type="text"
            disabled={false}
            require={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai2: event.target.value })
            }}
          />
          <CustomInputField
            title="Email"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, email: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Tình Trạng Hôn Nhân"
            
            option={listMarriage.map((marriageItem) => {
              return (
                { label: marriageItem.tinhTrang, value: marriageItem.id }
              )
            })}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tinhTrangHonNhanID: event.currentTarget.value })
            }}
          />
          {/* <CustomSelectBox
            title="Trạng Thái Lao Động"
            value={userDetail?.trangThaiLaoDong || true}
            option={[{ label: "Đang Hoạt Động", value: true }, { label: "Không Hoạt Động", value: false }]}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, trangThaiLaoDong: event.currentTarget.value })
            }}
          /> */}
          <CustomInputField
            title="Ngày Nghỉ Việc"
            
            type="date"
            disabled={false} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayNghiViec: event.target.value })
            }}
          />
          <CustomInputField
            title="Lý Do Nghỉ"
            
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, lyDoNghi: event.target.value })
            }}
          />
        </div>
      </div>
      <div>
        {submitError.status && <div >{submitError.error}</div>}
      </div>
      <div>
        <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">Thêm thông tin</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
