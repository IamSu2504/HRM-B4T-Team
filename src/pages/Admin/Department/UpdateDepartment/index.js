import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DepartmentAPI from "../../../../api/department";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateTax() {
    const [departmentDetail, setDepartmentDetail] = useState({ maPhongBan: '', tenPhongBan: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { departmentId } = useParams()

    const getDepartmentDetail = async () => {
        if (departmentId) {
            const departmentRes = await DepartmentAPI.getDepartmentById(departmentId)
            if (departmentRes?.status === 200) {
                setDepartmentDetail(departmentRes?.data)
            }
        }
    }

    useEffect(() => {
        getDepartmentDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maPhongBan, tenPhongBan } = departmentDetail

            if (!maPhongBan.trim().length || !tenPhongBan.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await DepartmentAPI.updateDepartment({ id: departmentId, ...departmentDetail })
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
                    <div className="title">Edit Information of Department</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>

                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={departmentId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Department code"
                        require={true}
                        value={departmentDetail?.maPhongBan || ''}
                        type="text"
                        handleChange={(event) => {
                            setDepartmentDetail({ ...departmentDetail, maPhongBan: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Department name"
                        require={true}
                        value={departmentDetail?.tenPhongBan || ''}
                        type="text"
                        handleChange={(event) => {
                            setDepartmentDetail({ ...departmentDetail, tenPhongBan: event.target.value })
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
