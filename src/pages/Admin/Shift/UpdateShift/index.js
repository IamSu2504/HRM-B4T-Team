import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShiftAPI from "../../../../api/shift";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateShift() {
    const [shiftDetail, setShiftDetail] = useState({ tenCa: '', gioBatDau: '', gioKetThuc: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { shiftId } = useParams()

    const getShiftDetail = async () => {
        if (shiftId) {
            const taxRes = await ShiftAPI.getShiftById(shiftId)
            if (taxRes?.status === 200) {
                setShiftDetail(taxRes?.data)
            }
        }
    }

    useEffect(() => {
        getShiftDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { tenCa, gioBatDau, gioKetThuc } = shiftDetail

            if (!tenCa.trim().length || !gioBatDau.trim().length || !gioKetThuc.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await ShiftAPI.updateShift({ id: shiftId, ...shiftDetail })
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
                    <div className="title">Edit Information of Shift</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={shiftId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Shift name"
                        require={true}
                        value={shiftDetail?.tenCa || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({ ...shiftDetail, tenCa: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Start time"
                        require={true}
                        value={shiftDetail?.gioBatDau || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({ ...shiftDetail, gioBatDau: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="End time"
                        require={true}
                        value={shiftDetail?.gioKetThuc || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({ ...shiftDetail, gioKetThuc: event.target.value })
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
