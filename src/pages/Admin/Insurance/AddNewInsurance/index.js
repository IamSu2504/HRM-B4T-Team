import React, { useState } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InsuranceAPI from "../../../../api/insurance";

export default function AddInsurance() {
    const [insuranceDetail, setInsuranceDetail] = useState({ maBH: '', tenBH: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maBH, tenBH } = insuranceDetail

            if (!maBH.trim().length || !tenBH.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await InsuranceAPI.addNewInsurance({ ...insuranceDetail })
                if (updateRes?.status === 200) {
                    toast.success('Add new successful information')
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
                    <div className="title">Add Information of Insurance</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Insurance code"
                        require={true}
                        value={insuranceDetail?.maBH || ''}
                        type="text"
                        handleChange={(event) => {
                            setInsuranceDetail({ ...insuranceDetail, maBH: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Insurance name"
                        require={true}
                        value={insuranceDetail?.tenBH || ''}
                        type="text"
                        handleChange={(event) => {
                            setInsuranceDetail({ ...insuranceDetail, tenBH: event.target.value })
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
