import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagercontractAPI from "../../../../api/Manager/contract";
import ManagerSalaryAPI from "../../../../api/Manager/salary";
import SalaryAPI from "../../../../api/SalaryGrade";
import { useParams , useNavigate} from "react-router-dom";

export default function UpdateSalary() {
    const [salaryDetail, setSalaryDetail] = useState({ maHD: '', idBacLuong: '1', luongCoBan: '', phuCapKhac: '', ngayHieuLuc: '', ngayKetThuc: '' , ghiChu: ''})
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { id } = useParams()

    const getSalaryDetail = async () => {
        if (id) {
            const contractRes = await ManagerSalaryAPI.getManagerSalaryById(id)

            if (contractRes?.status === 200) {
                setSalaryDetail(contractRes?.data)
            }
        }
    }

    useEffect(() => {
        getSalaryDetail()
    }, [])

    // const [listContract, setListContract] = useState([])

    // const getAllContract = async () => {
    //     const contractRes = await ContractAPI.getAll()
    //     if (contractRes?.status === 200) {
    //         setListContract(contractRes?.data)
    //     }
    // }

    // useEffect(() => {
    //     getAllContract()
    // }, [])

    const [listSalary, setListSalary] = useState([])

    const getAllSalary = async () => {
        const contractRes = await SalaryAPI.getAll()
        if (contractRes?.status === 200) {
            setListSalary(contractRes?.data)
        }
    }

    useEffect(() => {
       
        getAllSalary()
    }, [])
    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            // const { loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV } = contractDetail
            console.log('da vao day 1')
            console.log('>>>>',salaryDetail)
            salaryDetail.maHD = salaryDetail?.hopDong?.maHD
            
            if (!salaryDetail?.maHD.toString()?.trim()?.length
                || !salaryDetail?.idBacLuong.toString()?.trim()?.length || !salaryDetail?.luongCoBan.toString()?.trim()?.length
                 || !salaryDetail?.phuCapKhac.toString()?.trim()?.length
                || !salaryDetail?.ngayHieuLuc.toString()?.trim()?.length || !salaryDetail?.ngayKetThuc.toString()?.trim()?.length
                ) {

                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                console.log('da vao day 2 ')
                setIsSubmit(true)
               
              
                const updateRes = await ManagerSalaryAPI.updateManagerSalary({ id: id, ...salaryDetail })
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
                    <div className="title">Update Salary Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
            <div>
                    <CustomInputField
                        title="Contract code"
                        require={true}
                        type="text"
                        value={salaryDetail?.hopDong?.maHD}
                        disabled={true}
                    />

                    <CustomSelectBox
                        title="Salary Grade"
                        require={true}
                        value = {salaryDetail?.idBacLuong || 1}
                        option={listSalary.map((salaryItem) => {
                            return (
                                { label: `${salaryItem.maBacLuong} - ${salaryItem.tenBacLuong}`, value: salaryItem.id }
                            )
                        })}
                        handleChange={(event) => {
                            setSalaryDetail({ ...salaryDetail, idBacLuong: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Basic Salary"
                        require={true}
                        type="text"
                        value = {salaryDetail?.luongCoBan || ''}
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]

                            setSalaryDetail({ ...salaryDetail, luongCoBan: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Allowance"
                        require={true}
                        type="text"
                        value = {salaryDetail?.phuCapKhac || ''}
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]

                            setSalaryDetail({ ...salaryDetail, phuCapKhac: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        value = {salaryDetail?.ngayHieuLuc}
                        disabled = {false}
                        handleChange={(event) => {
                           
                            setSalaryDetail({ ...salaryDetail, ngayHieuLuc: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        value = {salaryDetail?.ngayKetThuc}
                        disabled = {false}
                        handleChange={(event) => {
                           
                            setSalaryDetail({ ...salaryDetail, ngayKetThuc: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Note"
                        require={false}
                        type="text"
                        value = {salaryDetail?.ghiChu}
                        handleChange={(event) => {
                            setSalaryDetail({ ...salaryDetail, ghiChu: event.target.value })
                        }}
                    />

                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
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
