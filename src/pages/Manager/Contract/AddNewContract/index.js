import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagercontractAPI from "../../../../api/Manager/contract";
import ContractAPI from "../../../../api/contract";


export default function AddContract() {
    const [contractDetail, setContractDetail] = useState({ maHD: '', loaiHopDong: '', ngayHieuLuc: '', ngayHetHan: '', ghiChu: '', trangThai: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV } = contractDetail
            console.log(contractDetail)
            if (!maHD.trim().length || !loaiHopDong.trim().length || !ngayHieuLuc.trim().length || !ngayHetHan.trim().length || !ghiChu.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagercontractAPI.addNewManagercontract({ ...contractDetail })
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
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

    const [listContract, setListContract] = useState([])

    const getAllContract = async () => {
        const contractRes = await ContractAPI.getAll()
        if (contractRes?.status === 200) {
            setListContract(contractRes?.data)
        }
    }

    useEffect(() => {
        getAllContract()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Contract Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Contract code"
                        require={true}
                        type="text"
                        placeholder="VD: HD000xyz"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, maHD: event.target.value })
                        }}
                    />

                    <CustomSelectBox
                        title="Type of contract"
                        require={true}
                        option={listContract.map((contractItem) => {
                            return (
                                { label: `${contractItem.maLoaiHopDong} - ${contractItem.tenLoaiHopDong}`, value: contractItem.id }
                            )
                        })}
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, loaiHopDong: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Effective date"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            var mydate = new Date(event.target.value).toLocaleDateString();
                            setContractDetail({ ...contractDetail, ngayHieuLuc: mydate })
                        }}
                    />
                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            var mydate = new Date(event.target.value).toLocaleDateString();
                            setContractDetail({ ...contractDetail, ngayHetHan: mydate })
                        }}
                    />
                    <CustomInputField
                        title="Note"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, ghiChu: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="Employee code"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, maNV: event.target.value })
                        }}
                    />
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
