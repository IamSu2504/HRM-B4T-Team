import React, { useState } from "react";
import CustomInputField from "../../../../components/customInputField";
import { useNavigate } from "react-router-dom";

import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalaryGradeAPI from "../../../../api/SalaryGrade";

export default function AddSalaryGrade() {
    const [salaryGradeDetail, setSalaryGradeDetail] = useState({ maBacLuong: '', tenBacLuong: '', khoangLuongTu: '', khoangLuongDen: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen } = salaryGradeDetail

            if (!maBacLuong.trim().length || !tenBacLuong.trim().length || !khoangLuongTu.trim().length || !khoangLuongDen.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)
                console.log('da vao day 1')
                const updateRes = await SalaryGradeAPI.addNewSalaryGrade({ ...salaryGradeDetail })
                if (updateRes?.status === 200) {
                    console.log('da vao day 2')
                    toast.success(updateRes?.data)
                }
                else {
                    toast.error('aaaa')
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
                    <div className="title">Add Information of Salary Grade</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Salary grade code"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, maBacLuong: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="Salary grade name"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, tenBacLuong: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="From"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, khoangLuongTu: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="To"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, khoangLuongDen: event.target.value })
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
            <div>
                <button className="save-button" disabled={isSubmit} onClick={() => navigate(`/admin/viewsalarygrade`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">List Account</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
