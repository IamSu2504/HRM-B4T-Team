import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerWorkingProcessAPI from "../../../../api/Manager/workingProcess";
import DepartmentAPI from "../../../../api/department";
import PositionAPI from "../../../../api/position";


export default function AddWorkingProcess() {
    const [workingProcessDetail, setWorkingProcessDetail] = useState({ idPhongBan: '', idChucVu: '', ngayVao: '', ngayRa: '', trangThai: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV } = workingProcessDetail

            if (!idPhongBan.trim().length || !idChucVu.trim().length || !ngayVao.trim().length || !ngayRa.trim().length || !trangThai.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagerWorkingProcessAPI.addNewManagerWorkingProcess({ ...workingProcessDetail })
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
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

    const [listDepartment, setListDepartment] = useState([])

    const getAllDepartment = async () => {
        const departmentRes = await DepartmentAPI.getAll()
        if (departmentRes?.status === 200) {
            setListDepartment(departmentRes?.data)
        }
    }

    useEffect(() => {
        getAllDepartment()
    }, [])

    const [listPosition, setListPosition] = useState([])

    const getAllPosition = async () => {
        const positionRes = await PositionAPI.getAll()
        if (positionRes?.status === 200) {
            setListPosition(positionRes?.data)
        }
    }

    useEffect(() => {
        getAllPosition()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Information of Working Process</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Department"
                        option={listDepartment.map((departmentItem) => {
                            return (
                                { label: departmentItem.tenPhongBan, value: departmentItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, idPhongBan: event.currentTarget.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Position"
                        option={listPosition.map((positionItem) => {
                            return (
                                { label: positionItem.tenChucVu, value: positionItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, idChucVu: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Date start work"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            const parts = event.target.value.split('-');
                            const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            setWorkingProcessDetail({ ...workingProcessDetail, ngayVao: mydate })
                        }}
                    />
                    <CustomInputField
                        title="Date end work"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            const parts = event.target.value.split('-');
                            const mydate = parts[2] + '/' + parts[1] + '/' + parts[0]
                            setWorkingProcessDetail({ ...workingProcessDetail, ngayRa: mydate })
                        }}
                    />
                    <CustomSelectBox
                        title="Status"
                        option={
                            [{ label: "Working", value: true }, { label: "Finished", value: false }]
                        }
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, trangThai: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, maNV: event.target.value })
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
