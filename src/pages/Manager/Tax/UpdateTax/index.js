import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManagerInsuranceAPI from "../../../../api/Manager/Insurance";
import InsuranceAPI from "../../../../api/insurance";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateManagerInsurance() {
    const [managerInsuranceDetail, setManagerInsuranceDetail] = useState({ idLoaiBH: {}, maSoBH: '', tienBH: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { managerInsuranceId } = useParams()

    const getManagerInsuranceDetail = async () => {
        if (managerInsuranceId) {
            const insuranceRes = await ManagerInsuranceAPI.getManagerInsuranceById(managerInsuranceId)
            if (insuranceRes?.status === 200) {
                setManagerInsuranceDetail(insuranceRes?.data)
            }
        }
    }

    useEffect(() => {
        getManagerInsuranceDetail()
    }, [])

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

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { idLoaiBH, maSoBH, tienBH, maNV } = managerInsuranceDetail

            if (!idLoaiBH.trim().length || !maSoBH.trim().length || !tienBH.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await ManagerInsuranceAPI.updateManagerInsurance({ id: managerInsuranceId, ...managerInsuranceDetail })
                if (updateRes?.status === 200) {
                    toast.success('Successfully updated')
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
                    <div className="title">Edit Contract Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={managerInsuranceId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Employee code"
                        require={true}
                        value={managerInsuranceDetail?.maNV || ''}
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, maNV: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                         title="Type of Insurance"
                         require={true}
                        option={listInsurance.map((InsuranceItem) => {
                            return (
                                { label: InsuranceItem.tenBH, value: InsuranceItem }
                            )
                        })}
                       
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, idLoaiBH: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                         title="Insurance code"
                         require={true}
                        value={managerInsuranceDetail?.maSoBH || ''}
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, maSoBH: event.target.value })
                        }}
                    />
                    <CustomInputField
                           title="Insurance money"
                           require={true}
                        value={managerInsuranceDetail?.tienBH || ''}
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
