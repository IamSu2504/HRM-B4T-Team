import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagercontractAPI from "../../../../api/Manager/contract";
import ContractAPI from "../../../../api/contract";
import { useParams, useNavigate } from "react-router-dom";


export default function AddContract() {
    const [haveNewContract, setHaveNewContract] = useState()
    const navigate = useNavigate();
    const [ngayhethan2, setngayhethan2] = useState('')
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

    const [contractDetail, setContractDetail] = useState({ maHD: '', loaiHopDong: '1', ngayHieuLuc: '', ngayHetHan: '', giamTruGiaCanh: '', ghiChu: '', maNV: '' })
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            contractDetail.maHD = newMaHd
            contractDetail.maNV = maNv
            console.log(contractDetail)
            const { maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, giamTruGiaCanh, ghiChu, maNV } = contractDetail

            if (!maHD.toString().trim()?.length || !loaiHopDong.toString().trim()?.length || !ngayHieuLuc.toString().trim()?.length
                || !ngayHetHan.toString().trim()?.length || !maNV.toString().trim()?.length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagercontractAPI.addNewManagercontract({ ...contractDetail })
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
                    setHaveNewContract(maNV)
                    // setTimeout(navigate(`/manager/addSalary/${maNv}&&${maHD}`), 4000)

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

    const getngayhethan = async () => {
        let numberdate = 0;

        if (contractDetail.loaiHopDong == 1)
            numberdate = 365
        else
            if (contractDetail.loaiHopDong == 2)
                numberdate = 730
            else
                if (contractDetail.loaiHopDong == 3)
                    numberdate = 1095
                else
                    if (contractDetail.loaiHopDong == 4)
                        numberdate = 60
                    else
                        if (contractDetail.loaiHopDong == 5)
                            numberdate = 60
                        else
                            if (contractDetail.loaiHopDong == 6)
                                numberdate = 36500

        let date = new Date(contractDetail.ngayHieuLuc)
        date = date.setDate(date.getDate() + numberdate)
        let date2 = new Date(date).toISOString().split('T')[0]
        setngayhethan2(date2)
        setContractDetail({ ...contractDetail, ngayHetHan: date2 })
    }

    useEffect(() => {
        getngayhethan()
    }, [contractDetail.loaiHopDong, contractDetail.ngayHieuLuc])
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
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        value={maNv}
                        type="text"
                        disabled={true}

                    />
                    <CustomSelectBox
                        title="Type of contract"
                        require={true}
                        value={contractDetail?.loaiHopDong || 1}
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
                            setContractDetail({ ...contractDetail, ngayHieuLuc: event.target.value })

                        }}
                    />

                    <CustomInputField
                        title="Expiration date"
                        require={true}
                        type="date"
                        disabled={false}
                        value={ngayhethan2}
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, ngayHetHan: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Family Allowances"
                        require={false}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, giamTruGiaCanh: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Note"
                        require={false}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, ghiChu: event.target.value })
                        }}
                    />


                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div className="list-button">
                {haveNewContract ?
                    <div>
                        <button className="add-contract" onClick={() => navigate(`/manager/addSalary/${maNv}&&${newMaHd}`)}>
                            <span class="image">
                                <img src="/home/save-icon.svg" />
                            </span>
                            <span class="text"> Add Salary For {maNv}</span>
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
