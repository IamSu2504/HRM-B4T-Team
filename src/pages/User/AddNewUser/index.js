import React, { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
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
import validator from 'validator'

export default function AddNewUser() {
  const navigate = useNavigate();
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

  const [newMaNv, setNewMaNv] = useState([''])
  const getNewMaNv = async () => {
    const newMaNvRes = await UserAPI.getNewMaNv()
    if (newMaNvRes?.status === 200) {
      setNewMaNv(newMaNvRes?.data)
    }
  }
  useEffect(() => {
    getNewMaNv()
  }, [])

  const [userDetail, setUserDetail] = useState({
    id: '',
    tinhChatHopDongID: '1', tinhTrangHonNhanID: '1',
    quocTichID: '1', tenNv: '', ngaySinh: '', gioiTinh: true,
    soDienThoai: '', soDienThoai2: '', email: '',
    cccd: '', noiCapCccd: '', ngayCapCccd: '',
    ngayHetHanCccd: '', hoChieu: '', noiCapHoChieu: '',
    ngayCapHoChieu: '', ngayHetHanHoChieu: '', noiSinh: '',
    queQuan: '', diaChiThuongTru: '', diaChiTamTru: '',
    atmNganHang: '', soAtm: '',
    ngayBatDauLam: ''

  })
  const [submitError, setSubmitError] = useState({ status: false, error: '' })
  const [isSubmit, setIsSubmit] = useState(false)

  //validate
  const [checkCccd, setCheckCccd] = useState('')
  const [checkHoChieu, setCheckHoChieu] = useState('')
  const [checSoDienThoai, setCheckSoDienThoai] = useState('')
  const [checSoDienThoai2, setCheckSoDienThoai2] = useState('')
  const [checkEmail, setCheckEmail] = useState('')

  var valiCccd = /^[0-9]{12}$/;
  var valiHoChieu = /(([A-Z]{1})+([0-9]{7})\b)/g;
  var valiSoDienThoai = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  var valiSoDienThoai2 = /((09|03|07|08|05)+([0-9]{8})\b)/g;

  const handleCreate = async () => {
    try {
      getNewMaNv();
      setSubmitError({ status: false, error: '' })
      const { id, tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, ngayBatDauLam
      } = userDetail;
      console.log(newMaNv)
      userDetail.id = newMaNv
      console.log('test user: ', userDetail)
      if (!tinhChatHopDongID.toString().trim()?.length || !tinhTrangHonNhanID.toString().trim()?.length
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
      } else
        if (!valiCccd.test(cccd) || !validator.isEmail(email) || !valiHoChieu.test(hoChieu) || !valiSoDienThoai.test(soDienThoai) ||
          (soDienThoai2.toString().trim()?.length && !valiSoDienThoai2.test(soDienThoai2))) {
          setSubmitError({ status: true, error: 'Thông tin sai định dạng' })
        }
        else {
          setIsSubmit(true)

          const updateRes = await UserAPI.addNewUser({ ...userDetail })
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

  const [viewuserDetail, setviewUserDetail] = useState(false)
  const getviewUserDetail = async () => {
    if (newMaNv) {

      const userRes = await UserAPI.getUserById(newMaNv)
      if (userRes?.status === 200) {
        setviewUserDetail(true)
      }
    }
  }
  useEffect(() => {
    getviewUserDetail()

  }, [])
  return (
    <div className="update-account-page">
      <div className="row">
        <div className="col-12">
          <div className="title">Add Information of Employee</div>
          <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
        </div>
      </div>

      <div className="row avatar-row">

      </div>

      <div className="row fied-data-row">
        <div>
          <CustomInputField
            title="Employee code"
            value={newMaNv}
            type="text"
            disabled={true}
            require={true}
          />
          <CustomInputField
            title="Full name"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, tenNv: event.target.value })
            }}
          />
          <CustomInputField
            title="Citizen identification"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              if (!valiCccd.test(event.target.value)) {
                setCheckCccd('Căn cước công dân sai định dạng')
              }
              else
                setCheckCccd('')
              setUserDetail({ ...userDetail, cccd: event.target.value })
            }}
          />
          <span style={{ fontSize: '10px', color: 'red', }}>{checkCccd}</span>
          <CustomInputField
            title="Place of issue of identity card"
            type="text"

            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Date of issuance of citizen's identity card"

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
            title="Citizen ID expiration date"

            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayHetHanCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport"

            type="text"
            disabled={false}
            handleChange={(event) => {
              if (!valiHoChieu.test(event.target.value)) {
                setCheckHoChieu('Hộ chiếu sai định dạng')
              }
              else
                setCheckHoChieu('')
              setUserDetail({ ...userDetail, hoChieu: event.target.value })
            }}
          />
          <span style={{ fontSize: '10px', color: 'red', }}>{checkHoChieu}</span>
          <CustomInputField
            title="Place of issue of passport"

            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport issuance date"

            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport expiration date"

            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayHetHanHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Bank name"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, atmNganHang: event.target.value })
            }}
          />
          <CustomInputField
            title="ATM number"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soAtm: event.target.value })
            }}
          />
          <CustomInputField
            title="Date start work"

            type="date"
            disabled={false}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayBatDauLam: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Nature of Contract"
            value={userDetail?.tinhChatHopDongID || 1}
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
            title="Gender"
            value={userDetail?.gioiTinh || true}
            option={[{ label: "Male", value: true }, { label: "Female", value: false }]}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, gioiTinh: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Date of birth"

            type="date"
            disabled={false} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngaySinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Place of birth"

            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiSinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Home town"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, queQuan: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Nationality"
            value={userDetail?.quocTichID || 1}
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
            title="Permanent address"

            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiThuongTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Temporary residence address"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiTamTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Phone number"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              if (!valiSoDienThoai.test(event.target.value)) {
                setCheckSoDienThoai('Số Điện Thoại sai định dạng')
              }
              else
                setCheckSoDienThoai('')
              setUserDetail({ ...userDetail, soDienThoai: event.target.value })
            }}
          />
          <span style={{ fontSize: '10px', color: 'red', }}>{checSoDienThoai}</span>
          <CustomInputField
            title="Phone number 2"

            type="text"
            disabled={false}
            require={false}
            handleChange={(event) => {
              if (!valiSoDienThoai2.test(event.target.value) && (event.target.value)) {
                setCheckSoDienThoai2('Số điện thoại 2 sai định dạng')
              }
              else
                setCheckSoDienThoai2('')
              setUserDetail({ ...userDetail, soDienThoai2: event.target.value })
            }}
          />
          <span style={{ fontSize: '10px', color: 'red', }}>{checSoDienThoai2}</span>
          <CustomInputField
            title="Email"

            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              if (!validator.isEmail(event.target.value)) {
                setCheckEmail('Email sai định dạng')
              }
              else
                setCheckEmail('')
              setUserDetail({ ...userDetail, email: event.target.value })
            }}
          />
          <span style={{ fontSize: '10px', color: 'red', }}>{checkEmail}</span>
          <CustomSelectBox
            title="Marital status"
            value={userDetail?.tinhTrangHonNhanID || 1}
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
            title="Severance day"


            type="date"
            disabled={false} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayNghiViec: event.target.value })
            }}

          />
          <CustomInputField
            title="Reason for leaving job"


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
          <span class="text">Add</span>
        </button>
      </div>
      <div>
        {viewuserDetail ? <button className="save-button"  onClick={() => navigate(`/manager/viewuser/${newMaNv}`)}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">View</span>
        </button> : <div></div>}
      </div>
      <ToastContainer />
    </div>
  );
}
