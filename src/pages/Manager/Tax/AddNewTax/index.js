import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerTaxAPI from "../../../../api/Manager/tax";
import InsuranceAPI from "../../../../api/insurance";
import { useParams, useNavigate } from "react-router-dom";


export default function AddManagerTax() {
    const [managerTaxDetail, setManagerTaxDetail] = useState([])
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const navigate = useNavigate();
    const [checkThue, setCheckThue] = useState('')
    
    var valiThue = /^[0-9]{12}$/;
    

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log(maNv)
            console.log(managerTaxDetail);
            if (!managerTaxDetail.maSoThue.trim().length ) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else
                if (!valiThue.test(managerTaxDetail.maSoThue) ) {
                    setSubmitError({ status: true, error: 'Thông tin không đúng định dạng' })
                }
                else {
                    setIsSubmit(true)
                    const updateRes1 = await ManagerTaxAPI.addNewManagerTax({ idLoaiThue: "1", maSoThue: managerTaxDetail.maSoThue, maNV: maNv })
                    if (updateRes1?.status === 200) {
                        navigate(`/manager/viewuser/${maNv}`)
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
                    <div className="title">Add Information of Tax</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        disabled={true}
                        value={maNv}
                        type="text"
                        handleChange={(event) => {
                            setManagerTaxDetail({ ...managerTaxDetail, maNV: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title='Thuế Thu Nhập Cá Nhân'
                        type="text"
                        disabled={false}
                        require={true}
                        
                        handleChange={(event) => {
                            if ((event.target.value) && !valiThue.test(event.target.value)) {
                                setCheckThue('Mã Số Thuế incorrect format')

                            }
                            else {

                                setCheckThue('')
                                setManagerTaxDetail({ ...managerTaxDetail, maSoThue: event.target.value })
                            }
                        }}
                    />
                    <span style={{ fontSize: '10px', color: 'red', }}>{checkThue}</span>
                    
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
