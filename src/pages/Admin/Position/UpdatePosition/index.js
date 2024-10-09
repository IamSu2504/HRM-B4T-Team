import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PositionAPI from "../../../../api/position";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdatePosition() {
    const [positionDetail, setPositionDetail] = useState({ maChucVu: '', tenChucVu: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { positionId } = useParams()

    const getPositionDetail = async () => {
        if (positionId) {
            const positionRes = await PositionAPI.getPositionById(positionId)
            if (positionRes?.status === 200) {
                setPositionDetail(positionRes?.data)
            }
        }
    }

    useEffect(() => {
        getPositionDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maChucVu, tenChucVu } = positionDetail

            if (!maChucVu.trim().length || !tenChucVu.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await PositionAPI.updatePosition({ id: positionId, ...positionDetail })
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
                    <div className="title">Edit Information of Position</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={positionId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Position code"
                        require={true}
                        value={positionDetail?.maChucVu || ''}
                        type="text"
                        handleChange={(event) => {
                            setPositionDetail({ ...positionDetail, maChucVu: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Position name"
                        require={true}
                        value={positionDetail?.tenChucVu || ''}
                        type="text"
                        handleChange={(event) => {
                            setPositionDetail({ ...positionDetail, tenChucVu: event.target.value })
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
