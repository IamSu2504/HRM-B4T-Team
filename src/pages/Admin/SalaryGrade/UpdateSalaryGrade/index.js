import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalaryGradeAPI from "../../../../api/SalaryGrade";
import { useNavigate } from "react-router-dom";


export default function UpdateSalaryGrade() {
    const [salaryGradeDetail, setSalaryGradeDetail] = useState({ maBacLuong: '', tenBacLuong: '', khoangLuongTu: '', khoangLuongDen: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { salaryGradeId } = useParams()
    const navigate = useNavigate()
    const getSalaryGradeDetail = async () => {
        if (salaryGradeId) {
            const salaryGradeRes = await SalaryGradeAPI.getSalaryGradeById(salaryGradeId)
            if (salaryGradeRes?.status === 200) {
                setSalaryGradeDetail(salaryGradeRes?.data)
            }
        }
    }

    useEffect(() => {
        getSalaryGradeDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen } = salaryGradeDetail
            if (!maBacLuong.toString().trim().length || !tenBacLuong.toString().trim().length || !khoangLuongTu.toString().trim().length || !khoangLuongDen.toString().trim().length) {
                console.log('da vao day 1')
                setSubmitError({ status: true, error: 'Information is not blank' })

            } else {
                setIsSubmit(true)
                console.log('da vao day 2')
                const updateRes = await SalaryGradeAPI.updateSalaryGrade({ id: salaryGradeId, ...salaryGradeDetail })
                console.log('da vao day 3', updateRes)
                if (updateRes?.status === 200) {
                    toast.success(updateRes?.data)
                }
            }
        } catch (error) {
            console.log('da vao err')
            if (error.response) {
                console.log(error.response)
                setSubmitError({ status: true, error: error.response.data })
            }
        } finally {
            console.log('da ket thuc')
            setIsSubmit(false)
        }
    }
    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Edit Information of Salary Grade</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>

                    <CustomInputField
                        title="Salary grade code"
                        require={true}
                        value={salaryGradeDetail?.maBacLuong || ''}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, maBacLuong: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="Salary grade name"
                        require={true}
                        value={salaryGradeDetail?.tenBacLuong || ''}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, tenBacLuong: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="From"
                        require={true}
                        value={salaryGradeDetail?.khoangLuongTu || ''}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGradeDetail({ ...salaryGradeDetail, khoangLuongTu: event.target.value })
                        }}
                    />

                    <CustomInputField
                        title="To"
                        require={true}
                        value={salaryGradeDetail?.khoangLuongDen || ''}
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
                <button className="save-button" disabled={isSubmit} onClick={() => handleUpdate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Edit</span>
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
