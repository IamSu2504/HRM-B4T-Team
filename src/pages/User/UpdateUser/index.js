import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from 'axios';
import { dateTimeConverter } from "../../../utils/util";

export default function UpdateUser() {
  const [listPosition, setListPosition] = useState([])
  const [listContractNature, setListContractNature] = useState([])
  const [listNation, setListNation] = useState([])
  const [mount, setMount] = useState(false)
  const [listMarriage, setListMarriage] = useState([])
  const [userDetail, setUserDetail] = useState({
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
  const [userImage, setUserImage] = useState()
  const { maNv } = useParams()
  const navigate = useNavigate()
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
        setUserDetail({
          tinhChatHopDongID: userRes?.data?.tinhChatHopDong?.id,
          tinhTrangHonNhanID: userRes?.data?.tinhTrangHonNhan?.id,
          quocTichID: userRes?.data?.quocTich?.id,
          tenNv: userRes?.data?.tenNv,
          // ngaySinh: dateTimeConverter(userRes?.data?.ngaySinh),
          ngaySinh: userRes?.data?.ngaySinh,
          gioiTinh: userRes?.data?.gioiTinh,
          soDienThoai: userRes?.data?.soDienThoai,
          soDienThoai2: userRes?.data?.soDienThoai2,
          email: userRes?.data?.email,
          cccd: userRes?.data?.cccd,
          noiCapCccd: userRes?.data?.noiCapCccd,
          ngayCapCccd: userRes?.data?.ngayCapCccd,
          ngayHetHanCccd: userRes?.data?.ngayHetHanCccd,
          hoChieu: userRes?.data?.hoChieu,
          noiCapHoChieu: userRes?.data?.noiCapHoChieu,
          ngayCapHoChieu: userRes?.data?.ngayCapHoChieu,
          ngayHetHanHoChieu: userRes?.data?.ngayHetHanHoChieu,
          noiSinh: userRes?.data?.noiSinh,
          queQuan: userRes?.data?.queQuan,
          diaChiThuongTru: userRes?.data?.diaChiThuongTru,
          diaChiTamTru: userRes?.data?.diaChiTamTru,
          atmNganHang: userRes?.data?.atmNganHang,
          soAtm: userRes?.data?.soAtm,

          ngayBatDauLam: userRes?.data?.ngayBatDauLam,
          ngayNghiViec: userRes?.data?.ngayNghiViec,
          lyDoNghi: userRes?.data?.lyDoNghi, image: userRes?.data?.image
        })
      }
    }
  }

  useEffect(() => {
    getUserDetail()
  }, [])

  // const getUserImage = async () => {
  //   try {
  //     if (maNv) {
  //       const userRes = await UserAPI.getUserImage(maNv)
  //       if (userRes?.status === 200) {
  //         if (userRes?.data?.length)
  //           setUserImage(userRes?.data)
  //       }
  //     }
  //   } catch (error) {
  //     console.log('get user image error >>>>> ', error)
  //   }
  // }

  // useEffect(() => {
  //   getUserImage()
  // }, [])
  
  //validate
  const [checSoDienThoai, setCheckSoDienThoai] = useState([''])

  const handleUpdate = async () => {
    try {
      setSubmitError({ status: false, error: '' })
      const { tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, ngayBatDauLam, ngayNghiViec, lyDoNghi
      } = userDetail;

<<<<<<< HEAD
      console.log('test user>>>',userDetail)
=======
      console.log('test user', userDetail)
>>>>>>> 80678713916747c943fac48661764b7116a0d064
      // if (!tinhChatHopDongID.toString()?.trim()?.length || !tinhTrangHonNhanID.toString()?.trim()?.length
      //   || !quocTichID.trim().toString()?.trim()?.length || !tenNv.toString()?.trim()?.length || !ngaySinh.toString()?.trim()?.length
      //   || !gioiTinh.toString()?.trim()?.length || !soDienThoai.toString()?.trim()?.length || !soDienThoai2.toString()?.trim()?.length
      //   || !email.toString()?.trim()?.length || !cccd.toString()?.trim()?.length || !noiCapCccd.toString()?.trim()?.length
      //   || !ngayCapCccd.toString()?.trim()?.length || !ngayHetHanCccd.toString()?.trim()?.length || !hoChieu.toString()?.trim()?.length
      //   || !noiCapHoChieu.toString()?.trim()?.length || !ngayCapHoChieu.toString()?.trim()?.length || !ngayHetHanHoChieu.toString()?.trim()?.length
      //   || !noiSinh.toString()?.trim()?.length || !queQuan.toString()?.trim()?.length || !diaChiThuongTru.toString()?.trim()?.length
      //   || !diaChiTamTru.toString()?.trim()?.length || !atmNganHang.toString()?.trim()?.length || !soAtm.toString()?.trim()?.length
      //   || !trangThaiLaoDong.toString()?.trim()?.length || !ngayBatDauLam.toString()?.trim()?.length || !ngayNghiViec.toString()?.trim()?.length 
      //   || !lyDoNghi.toString()?.trim()?.length)
<<<<<<< HEAD

=======
      console.log('>>>>>', tinhChatHopDongID.toString().trim()?.length)
>>>>>>> 80678713916747c943fac48661764b7116a0d064
      if (!tinhChatHopDongID.toString().trim()?.length || !tinhTrangHonNhanID.toString().trim()?.length
        || !quocTichID.toString().trim()?.length || !tenNv.toString().trim()?.length || !ngaySinh.toString().trim()?.length
        || !gioiTinh.toString().trim()?.length || !soDienThoai.toString().trim()?.length
        || !email.toString().trim()?.length || !cccd.toString().trim()?.length || !noiCapCccd.toString().trim()?.length
        || !ngayCapCccd.toString().trim()?.length || !ngayHetHanCccd.toString().trim()?.length || !hoChieu.toString().trim()?.length
        || !noiCapHoChieu.toString().trim()?.length || !ngayCapHoChieu.toString().trim()?.length || !ngayHetHanHoChieu.toString().trim()?.length
        || !noiSinh.toString().trim()?.length || !queQuan.toString().trim()?.length || !diaChiThuongTru.toString().trim()?.length
        || !diaChiTamTru.toString().trim()?.length || !atmNganHang.toString().trim()?.length || !soAtm.toString().trim()?.length
        || !ngayBatDauLam.toString().trim()?.length
      ) {
        console.log("da vao day 1")
        setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
      } else
      if (soDienThoai.toString().trim()?.length != 10){
        setCheckSoDienThoai('Số điện thoại phải có 10 số')
      }else{
        setCheckSoDienThoai('')
        setIsSubmit(true)
        console.log("da vao day 2")
        // const ngaySinhMoi = ngaySinh.split('-');
        // const ngaySinhCN = ngaySinhMoi[2] + '/' + ngaySinhMoi[1] + '/' + ngaySinhMoi[0]

        // const updateImg = await UserAPI.updateUserImage(maNv, ...userImage)
        const updateRes = await UserAPI.updateUser({ id: maNv, ...userDetail })
        // const updateRes = await UserAPI.updateUser({ id: maNv, ...userDetail, ngaySinh: ngaySinhCN })
        if (updateRes?.status === 200) {
          toast.success(updateRes?.data)
          console.log('aaaa',updateRes?.data)
          const formData = new FormData();
          formData.append("file", userImage);
          try {
            let urlStr = 'http://localhost:8080/user/' + maNv + '/image'
            const response = await axios({
              method: "put",
              url: urlStr,
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
          } catch (error) {

          }

        }
      }
    } catch (error) {
      if (error.response) {
        console.log(error)
        setSubmitError({ status: true, error: error.response.data })
      }
    } finally {
      console.log("da vao day 4")
      setIsSubmit(false)
    }
  }


  return (
    <div className="update-account-page">
      <div className="row">
        <div className="col-12">
          <div className="title">Edit Information of Employee</div>
          <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
        </div>
      </div>

      <div className="row avatar-row">
        <div>
          {
            mount ?
              <img src={URL.createObjectURL(userImage)} alt="avatar" width={220} height={180} /> :
              <img src={`http://localhost:8080/user/${maNv}/image`} alt="avatar" width={220} height={180} />
          }
        </div>
        <div>
          <CustomInputField
            title="Employee code"
            value={maNv}
            type="text"
            disabled={true}
            require={true}
          />
          <CustomInputField
            title="Full name"
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
            title="Image 3*4"
            type="file"
            disabled={false}
            require={true}
            handleChange={(e) => {
              setUserImage(e.target.files[0]);
              setMount(true);
            }}
          />
          <CustomInputField
            title="Citizen identification"
            value={userDetail?.cccd || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, cccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Place of issue of identity card"
            type="text"
            value={userDetail?.noiCapCccd || ''}
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Date of issuance of citizen's identity card"
            value={userDetail?.ngayCapCccd}
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
            value={userDetail?.ngayHetHanCccd}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayHetHanCccd: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport"
            value={userDetail?.hoChieu || ''}
            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, hoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Place of issue of passport"
            value={userDetail?.noiCapHoChieu || ''}
            type="text"
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport issuance date"

            value={userDetail?.ngayCapHoChieu}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayCapHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Passport expiration date"
            value={userDetail?.ngayHetHanHoChieu}
            type="date"
            disabled={false}
            require={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayHetHanHoChieu: event.target.value })
            }}
          />
          <CustomInputField
            title="Bank name"
            value={userDetail?.atmNganHang || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, atmNganHang: event.target.value })
            }}
          />
          <CustomInputField
            title="ATM number"
            value={userDetail?.soAtm || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soAtm: event.target.value })
            }}
          />
          <CustomInputField
            title="Date start work"
            value={userDetail?.ngayBatDauLam}
            type="date"
            disabled={true}
            handleChange={(event) => {

              setUserDetail({ ...userDetail, ngayBatDauLam: event.target.value })
            }}
          />
          
          <CustomSelectBox
            title="Nature of Contract"
            value={userDetail?.tinhChatHopDongID}
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

            value={userDetail?.gioiTinh}
            option={[{ label: "Nam", value: true }, { label: "Nữ", value: false }]}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, gioiTinh: event.currentTarget.value })
            }}
          />
          <CustomInputField
            title="Date of birth"

            value={userDetail?.ngaySinh}
            type="date"
            disabled={false} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngaySinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Place of birth"

            value={userDetail?.noiSinh || ''}
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, noiSinh: event.target.value })
            }}
          />
          <CustomInputField
            title="Home town"

            value={userDetail?.queQuan || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, queQuan: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Nationality"

            value={userDetail?.quocTichID}
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

            value={userDetail?.diaChiThuongTru || ''}
            type="text"
            require={true}
            disabled={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiThuongTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Temporary residence address"

            value={userDetail?.diaChiTamTru || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, diaChiTamTru: event.target.value })
            }}
          />
          <CustomInputField
            title="Phone number"

            value={userDetail?.soDienThoai || ''}
            type="text"
            disabled={false}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai: event.target.value })
            }}
          />
          <p className="check">{checSoDienThoai}</p>
          <CustomInputField
            title="Phone number 2"

            value={userDetail?.soDienThoai2 || ''}
            type="text"
            disabled={false}
            require={false}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, soDienThoai2: event.target.value })
            }}
          />
          <CustomInputField
            title="Email"
            value={userDetail?.email || ''}
            type="text"
            disabled={true}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, email: event.target.value })
            }}
          />
          <CustomSelectBox
            title="Marital status"

            value={userDetail?.tinhTrangHonNhanID}
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

            value={userDetail?.ngayNghiViec}
            type="date"
            disabled={true} //yyyy-mm-dd
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, ngayNghiViec: event.target.value })
            }}
          />
          <CustomInputField
            title="Reason for leaving job"

            value={userDetail?.lyDoNghi || ''}
            type="text"
            disabled={true}
            require={true}
            handleChange={(event) => {
              setUserDetail({ ...userDetail, lyDoNghi: event.target.value })
            }}
          />
        </div>
      </div>
      <div>
        {submitError.status && <div style={{ color: 'red' }}>{submitError.error}</div>}
      </div>
      <div>
        <button className="save-button" disabled={isSubmit} onClick={() => handleUpdate()}>
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">Save</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
