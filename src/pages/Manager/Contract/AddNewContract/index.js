import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagercontractAPI from "../../../../api/Manager/contract";
import ContractAPI from "../../../../api/contract";
import { useParams , useNavigate} from "react-router-dom";


export default function AddContract() {

    
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const [newMaHd, setNewMaHd] = useState('')
    const getNewMaNv = async () => {
        const newMaNvRes = await ManagercontractAPI.getnewID()
        if (newMaNvRes?.status === 200) {
            setNewMaHd(newMaNvRes?.data)
        }
    }

    const [contractDetail, setContractDetail] = useState({ maHD: '', loaiHopDong: '', ngayHieuLuc: '', ngayHetHan: '', ghiChu: '', maNV: '' })
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            contractDetail.maHD = newMaHd
            contractDetail.maNV = maNv
            console.log(contractDetail)
            const { maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, maNV } = contractDetail
            
            if (!maHD.toString().trim()?.length || !loaiHopDong.toString().trim()?.length || !ngayHieuLuc.toString().trim()?.length
                || !ngayHetHan.toString().trim()?.length || !ghiChu.toString().trim()?.length || !maNV.toString().trim()?.length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagercontractAPI.addNewManagercontract({ ...contractDetail })
                if (addRes?.status === 200) {
                    navigate(`/manager/addInsurance/${maNv}`)
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
        getNewMaNv()
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
                        value={newMaHd}
                        disabled={true}
                    />

                    <CustomSelectBox
                        title="Type of contract"
                        require={true}
                        value = {contractDetail?.loaiHopDong || 1}
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

                            setContractDetail({ ...contractDetail, ngayHieuLuc: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            setContractDetail({ ...contractDetail, ngayHetHan: event.target.value })
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
                        value={maNv}
                        type="text"
                        disabled={true}
                        
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
