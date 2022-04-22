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

const userKey = ['tenNv', 'soDienThoai', 'soDienThoai2', 'email', 'soAtm', 'cccd', 
'noiCapCccd', 'hoChieu', 'noiCapHoChieu', 'noiSinh', 'queQuan', 'diaChiThuongTru', 
'diaChiTamTru', 'atmNganHang', 'lyDoNghi', 'ngaySinh', 'ngayHetHanCccd', 'ngayCapCccd', 'ngayCapHoChieu']

export default function UpdateUser() {
  const [listPosition, setListPosition] = useState([])
  const [listContractNature, setListContractNature] = useState([])
  const [listNation, setListNation] = useState([])
  const [listMarriage, setListMarriage] = useState([])
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
  const [submitError, setSubmitError] = useState({ status: false, error: '' })
  const [isSubmit, setIsSubmit] = useState(false)
  const { maNv } = useParams()

  const getAllPosition = async () => {
    const positionRes = await PositionAPI.getAll()
    if (positionRes?.status === 200) {
      setListPosition(positionRes?.data)
    }
  }

  useEffect(() => {
    getAllPosition()
  }, [])

  const getAllContractNature = async () => {
    const ContractNatureRes = await ContractNatureAPI.getAll()
    if (ContractNatureRes?.status === 200) {
      setListContractNature(ContractNatureRes?.data)
    }
  }

  useEffect(() => {
    getAllContractNature()
  }, [])

  const getAllNation = async () => {
    const nationRes = await NationAPI.getAll()
    if (nationRes?.status === 200) {
      setListNation(nationRes?.data)
    }
  }

  useEffect(() => {
    getAllNation()
  }, [])

  const getAllMarriage = async () => {
    const marriageRes = await MarriageAPI.getAll()
    if (marriageRes?.status === 200) {
      setListMarriage(marriageRes?.data)
    }
  }

  useEffect(() => {
    getAllMarriage()
  }, [])

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

  const handleUpdate = async () => {
    try {
      let bug = false
      for(let key of userKey){
        if ( userDetail[`${key}`] ){
          if ( userDetail[`${key}`]?.length <= 0 ){
            bug = true
            break;
          }
        }else{
          bug= true
          break;
        }
      }
      setSubmitError({ status: false, error: '' })
      if (bug) {
        setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
      } else {
        setIsSubmit(true)
        const updateRes = await UserAPI.updateUser({ id: maNv, ...userDetail })
        if (updateRes?.status === 200) {
          toast.success('Cập nhật thông tin thành công')
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
          <div className="title">Chỉnh Sửa Thông Tin Nhân Viên</div>
          <div className="title-sub">Những ô có dấu * không được để trống</div>
        </div>
      </div>

      <div className="row avatar-row">
        <div>
          <img src="/home/user-avatar.svg" alt="avatar" />
        </div>

        <div>
          <CustomInputField
            title="Mã Số Nhân Viên"
            value={maNv}
            type="text"
            disabled={true}
            require={true}
          />
          <CustomInputField
            title="Họ và tên"
            value={userDetail?.tenNv || ''}
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
            title="Ảnh 3*4"
            type="file"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, image: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Giới Tính :"
            option={[{ label: "Nam", value: true }, { label: "Nữ", value: false }]}
            require={true}
            value={userDetail?.gioiTinh || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, gioiTinh: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Số điện thoại"
            value={userDetail?.soDienThoai || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai: event.target.value })
            }}
          />
          <CustomInputField
            title="Số điện thoại 2"
            value={userDetail?.soDienThoai2 || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai2: event.target.value })
            }}
          />
          <CustomInputField
            title="Email"
            value={userDetail?.email || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, email: event.target.value })
            }}
          />

          <CustomInputField
            title="Nơi cấp căn cước công dân"
            type="text"
            value={userDetail?.noiCapCccd || ''}
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Hộ chiếu"
            value={userDetail?.hoChieu || ''}
            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, hoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày cấp hộ chiếu"
            value={userDetail?.ngayCapHoChieu || ''}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Nơi Sinh"
            value={userDetail?.noiSinh || ''}
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiSinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Địa chỉ thường trú"
            value={userDetail?.diaChiThuongTru || ''}
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiThuongTru: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Chức Vụ"
            option={listPosition.map((positionItem) => {
              return (
                { label: positionItem.tenChucVu, value: positionItem.id }
              )
            })}
            require={true}
            value={userDetail?.chucVuID || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, chucVuID: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Ngày Bắt Đầu Làm: "
            value={userDetail?.ngayBatDauLam || ''}
            type="date"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayBatDauLam: event.target.value })
            }}
          />
          <CustomInputField
            title="Số ATM"
            value={userDetail?.soAtm || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soAtm: event.target.value })
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
            value={userDetail?.tinhChatHopDongID || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tinhChatHopDongID: event.currentTarget.value })
            }}
          />
        </div>

        <div>
          <CustomInputField
            title="Ngày sinh"
            value={userDetail?.ngaySinh || ''}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngaySinh: event.target.value })
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
            value={userDetail?.quocTichID || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, quocTichID: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Căn cước công dân"
            value={userDetail?.cccd || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, cccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày cấp căn cước"
            value={userDetail?.ngayCapCccd || ''}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayCapCccd: event.target.value })
            }}

          />
          <CustomInputField
            title="Ngày hết hạn căn cước"
            value={userDetail?.ngayHetHanCccd || ''}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayHetHanCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Nơi cấp hộ chiếu"
            value={userDetail?.noiCapHoChieu || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Ngày hết hạn hộ chiếu"
            value={userDetail?.ngayHetHanHoChieu || ''}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayHetHanHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Quê Quán"
            value={userDetail?.queQuan || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, queQuan: event.target.value })
            }}
          />
          <CustomInputField
            title="Địa chỉ tạm trú"
            value={userDetail?.diaChiTamTru || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiTamTru: event.target.value })
            }}
          />
          <CustomInputField
            title="ATM ngân hàng"
            value={userDetail?.atmNganHang || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, atmNganHang: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Trạng Thái Lao Động"
            option={[{ label: "Đang Hoạt Động", value: true }, { label: "Không Hoạt Động", value: false }]}
            require={true}
            value={userDetail?.trangThaiLaoDong || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, trangThaiLaoDong: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Ngày nghỉ việc: "
            value={userDetail?.ngayNghiViec || ''}
            type="date"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayNghiViec: event.target.value })
            }}
          />
          <CustomInputField
            title="Lý Do Nghỉ"
            value={userDetail?.lyDoNghi || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, lyDoNghi: event.target.value })
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
            value={userDetail?.tinhTrangHonNhanID || ''}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tinhTrangHonNhanID: event.currentTarget.value })
            }}
          />
        </div>
      </div>
      <div>
        {submitError.status && <div style={{color: 'red'}}>{submitError.error}</div>}
      </div>
      <div>
        <button className="save-button" disabled={isSubmit} onClick={() => handleUpdate()}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">Lưu thông tin</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
