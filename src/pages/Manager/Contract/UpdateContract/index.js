import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ManagercontractAPI from "../../../../api/Manager/contract";
import ContractAPI from "../../../../api/contract";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UpdateContract() {
    const [contractDetail, setContractDetail] = useState({ maHD: '', loaiHopDong: '1', ngayHieuLuc: '', ngayHetHan: '', giamTruGiaCanh: '', ghiChu: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maHd } = useParams()
    const [ngayhethan2, setngayhethan2] = useState('')
    const navigate = useNavigate();
    const getContractDetail = async () => {
        if (maHd) {
            const contractRes = await ManagercontractAPI.getManagerContractById(maHd)
            console.log()
            if (contractRes?.status === 200) {
                setContractDetail({

                    loaiHopDong: contractRes?.data?.loaiHopDong?.id,
                    ngayHieuLuc: contractRes?.data?.ngayHieuLuc,
                    ngayHetHan: contractRes?.data?.ngayHetHan,
                    ghiChu: contractRes?.data?.ghiChu,
                    giamTruGiaCanh: contractRes?.data?.giamTruGiaCanh,
                    maNV: contractRes?.data?.maNV
                })
            }
        }
    }

    useEffect(() => {
        getContractDetail()
    }, [])

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

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            // const { loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV } = contractDetail
            console.log('>>>>', contractDetail)
            // if (contractDetail?.loaiHopDong == 6)
            //     contractDetail.ngayHetHan = null
            if (!contractDetail?.loaiHopDong.toString()?.trim()?.length
                || !contractDetail?.ngayHieuLuc.toString()?.trim()?.length || !contractDetail?.ngayHetHan.toString()?.trim()?.length ||
                !contractDetail?.maNV.toString()?.trim()?.length) {

                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)
                console.log("maHD", maHd)
                console.log("user", contractDetail)
                const updateRes = await ManagercontractAPI.updateManagerContract({ maHD: maHd, ...contractDetail })
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
                    <div className="title">Edit Contract Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Contract code"
                        require={true}
                        value={maHd}
                        disabled={true}
                        type="text"
                    // handleChange={(event) => {
                    //     setContractDetail({ ...contractDetail, maHD: event.target.value })
                    // }}
                    />
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        disabled={true}
                        value={contractDetail?.maNV}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, maNV: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Type of contract"
                        require={true}
                        value={contractDetail?.loaiHopDong}
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
                        value={contractDetail?.ngayHieuLuc}
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
                        value={contractDetail?.ngayHetHan || ngayhethan2}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]

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
                        value={contractDetail?.ghiChu}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, ghiChu: event.target.value })
                        }}
                    />
                    {/* <CustomSelectBox
                        title="Status"
                        value={contractDetail?.trangThai}
                        option={
                            [{ label: "Đang Hiệu Lực", value: true }, { label: "Đã Hết Hiệu Lực", value: false }]
                        }
                        require={true}
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, trangThai: event.currentTarget.value })
                        }}
                    /> */}



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
                <button className="save-button" onClick={() => navigate(`/manager/viewcontract/${contractDetail.maNV}`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Contract {contractDetail.maNV}</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
