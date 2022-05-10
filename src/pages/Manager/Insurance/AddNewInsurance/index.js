import React, {useState, useEffect} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerInsuranceAPI from "../../../../api/Manager/Insurance";
import InsuranceAPI from "../../../../api/insurance";


export default function AddManagerInsurance() {
    const [managerInsuranceDetail, setManagerInsuranceDetail] = useState({ idLoaiBH: {}, maSoBH: '', tienBH: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { idLoaiBH, maSoBH, tienBH, maNV } = managerInsuranceDetail
            console.log(idLoaiBH)
            console.log(maSoBH)
            console.log(tienBH)
            console.log(maNV)
            if (!idLoaiBH.trim().length || !maSoBH.trim().length || !tienBH.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)
                console.log(managerInsuranceDetail)
                const updateRes = await ManagerInsuranceAPI.addNewManagerInsurance({ ...managerInsuranceDetail })
                if (updateRes?.status === 200) {
                    toast.success('Thêm mới thông tin thành công')
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

    const [listInsurance, setListInsurance] = useState([])

    const getAllInsurance = async () => {
        const insuranceRes = await InsuranceAPI.getAll()
        if (insuranceRes?.status === 200) {
            setListInsurance(insuranceRes?.data)
        }
    }

    useEffect(() => {
        getAllInsurance()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Thêm Thông Tin Bảo Hiểm</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Mã Nhân Viên *:"
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, maNV: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Loại Bảo Hiểm"
                        option={listInsurance.map((insuranceItem) => {
                            return (
                                { label: insuranceItem.tenBH, value: insuranceItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, idLoaiBH: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Mã Số Bảo Hiểm *:"
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, maSoBH: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Tiền Bảo Hiểm *:"
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, tienBH: event.target.value })
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
                    <span class="text">Thêm</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
