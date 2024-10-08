import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagercontractAPI from "../../../../api/Manager/contract";
import ManagerSalaryAPI from "../../../../api/Manager/salary";
import SalaryAPI from "../../../../api/SalaryGrade";
import { useParams, useNavigate } from "react-router-dom";


export default function AddSalary() {

    const [haveNewSalary, setHaveNewSalary] = useState()
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const { maHd } = useParams()
    const [contractDetail, setContractDetail] = useState()

    const getContractById = async () => {
        if (maHd) {
            const newMaNvRes = await ManagercontractAPI.getManagerContractById(maHd)
            if (newMaNvRes?.status === 200) {
                setContractDetail(newMaNvRes?.data)
            }
        }

    }

    const [listSalary, setListSalary] = useState([])

    const getAllSalary = async () => {
        const contractRes = await SalaryAPI.getAll()
        if (contractRes?.status === 200) {
            setListSalary(contractRes?.data)
        }
    }

    useEffect(() => {
        getContractById()
        getAllSalary()
    }, [])


    const [salaryDetail, setSalaryDetail] = useState({ maHD: '', idBacLuong: '1', luongCoBan: '', phuCapKhac: '', ngayHieuLuc: '', ngayKetThuc: '', ghiChu: '' })
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log('da vao day 1')
            console.log('da vao day 2')

            console.log('da vao day 3')
            salaryDetail.maHD = maHd
            salaryDetail.ngayHieuLuc = contractDetail.ngayHieuLuc
            salaryDetail.ngayKetThuc = contractDetail.ngayHetHan
            const { maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu } = salaryDetail
            console.log('>>>>', salaryDetail)
            console.log('>>>>', salaryDetail.maHD)
            if (!maHD.toString().trim()?.length || !idBacLuong.toString().trim()?.length || !luongCoBan.toString().trim()?.length
                || !phuCapKhac.toString().trim()?.length || !ngayHieuLuc.toString().trim()?.length || !ngayKetThuc.toString().trim()?.length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)
                console.log('da vao day 4')
                const addRes = await ManagerSalaryAPI.addNewManagerSalary({ ...salaryDetail })
                console.log('da vao day 5')
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
                    setHaveNewSalary(maNv)
                    // navigate(`/manager/addInsurance/${maNv}`)
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
                    <div className="title">Add Salary Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Contract code"
                        require={true}
                        type="text"
                        value={maHd}
                        disabled={true}
                    />

                    <CustomSelectBox
                        title="Salary Grade"
                        require={true}
                        value={salaryDetail?.idBacLuong || 1}
                        option={listSalary.map((salaryItem) => {
                            return (
                                { label: `${salaryItem.maBacLuong} - ${salaryItem.tenBacLuong} - Khoảng: ${salaryItem.khoangLuongTu} - ${salaryItem.khoangLuongDen}`, value: salaryItem.id }
                            )
                        })}
                        handleChange={(event) => {
                            setSalaryDetail({ ...salaryDetail, idBacLuong: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Basic Salary"
                        require={true}
                        type="text"
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
                        value={contractDetail?.ngayHieuLuc}
                        disabled={false}
                    />
                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        value={contractDetail?.ngayHetHan}
                        disabled={true}
                    // handleChange={(event) => {
                    //     // const parts = event.target.value.split('-');
                    //     // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                    //     setSalaryDetail({ ...salaryDetail, ngayKetThuc: event.target.value })
                    // }}
                    />
                    <CustomInputField
                        title="Note"
                        require={false}
                        type="text"
                        handleChange={(event) => {
                            setSalaryDetail({ ...salaryDetail, ghiChu: event.target.value })
                        }}
                    />


                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div className="list-button">
                {haveNewSalary ?
                    <div>
                        <button className="add-contract" onClick={() => navigate(`/manager/addInsurance/${maNv}`)}>
                            <span class="image">
                                <img src="/home/save-icon.svg" />
                            </span>
                            <span class="text"> Add Insurance For {maNv}</span>
                        </button>
                    </div> : 
                    <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                        <span class="image">
                            <img src="/home/save-icon.svg" />
                        </span>
                        <span class="text">Add</span>
                    </button>}

                {/* <button className="save-button" onClick={() => navigate(`/manager/viewcontract/${maNv}`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">View Contract</span>
                </button> */}
            </div>
            <ToastContainer />
        </div>
    );
}
