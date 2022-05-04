import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManagercontractAPI from "../../../../api/Manager/contract";
import ContractAPI from "../../../../api/contract";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UpdateContract() {
    const [contractDetail, setContractDetail] = useState({maHD:'', loaiHopDong: '', ngayHieuLuc: '', ngayHetHan: '', ghiChu: '', trangThai: '', maNV: ''})
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maHD } = useParams()

    const getContractDetail = async () => {
        if (maHD) {
            const contractRes = await ManagercontractAPI.getManagerContractById(maHD)
            
            if (contractRes?.status === 200) {
                setContractDetail({
                    
                    loaiHopDong: contractRes?.data?.loaiHopDong?.id,
                    ngayHieuLuc: contractRes?.data?.ngayHieuLuc,
                    ngayHetHan: contractRes?.data?.ngayHetHan,
                    ghiChu: contractRes?.data?.ghiChu,
                    trangThai: contractRes?.data?.trangThai,
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
           
            if ( !contractDetail?.loaiHopDong.toString()?.trim()?.length
                || !contractDetail?.ngayHieuLuc.toString()?.trim()?.length || !contractDetail?.ngayHetHan.toString()?.trim()?.length || !contractDetail?.ghiChu.toString()?.trim()?.length
                || !contractDetail?.trangThai.toString()?.trim()?.length || !contractDetail?.maNV.toString()?.trim()?.length) {

                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)       
                
                const updateRes = await ManagercontractAPI.updateManagerContract({ maHD: maHD, ...contractDetail })
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
                    <div className="title">Chỉnh Sửa Thông Tin Hợp Đồng</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Mã Hợp Đồng* :"
                        value = {maHD}
                        disabled = {true}
                        type="text"
                        // handleChange={(event) => {
                        //     setContractDetail({ ...contractDetail, maHD: event.target.value })
                        // }}
                    />

                    <CustomSelectBox
                        title="Loại Hợp Đồng :"
                        value = {contractDetail?.loaiHopDong}
                        option={listContract.map((contractItem) => {
                            return (
                                { label: `${contractItem.maLoaiHopDong} - ${contractItem.tenLoaiHopDong}`, value: contractItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, loaiHopDong: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Ngày Hiệu Lực* :"
                        value = {contractDetail?.ngayHieuLuc}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            var mydate = new Date(event.target.value).toLocaleDateString();
                            setContractDetail({ ...contractDetail, ngayHieuLuc: mydate })
                        }}
                    />
                    <CustomInputField
                        title="Ngày Hết Hạn* :"
                        value = {contractDetail?.ngayHetHan}
                        type="date"
                        handleChange={(event) => {
                            // const parts = event.target.value.split('-');
                            // const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            var mydate = new Date(event.target.value).toLocaleDateString();
                            setContractDetail({ ...contractDetail, ngayHetHan: mydate })
                        }}
                    />
                    <CustomInputField
                        title="Ghi Chú* :"
                        value = {contractDetail?.ghiChu}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, ghiChu: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Trạng Thái* :"
                        value = {contractDetail?.trangThai}
                        option={
                            [{ label: "Đang Hiệu Lực", value: true }, { label: "Đã Hết Hiệu Lực", value: false }]
                        }
                        require={true}
                        handleChange={(event) => {
                            setContractDetail({ ...contractDetail, trangThai: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Mã Nhân Viên* :"
                        disabled = {true}
                        value = {contractDetail?.maNV}
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
