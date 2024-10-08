import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerWorkingProcessAPI from "../../../../api/Manager/workingProcess";
import DepartmentAPI from "../../../../api/department";
import PositionAPI from "../../../../api/position";
import { useParams, useNavigate } from "react-router-dom";


export default function AddWorkingProcess() {
    const [haveNewWorkingProcess, setHaveNewWorkingProcess] = useState()
    const [workingProcessDetail, setWorkingProcessDetail] = useState({ idPhongBan: '1', idChucVu: '1', ngayVao: '', ngayRa: '', trangThai: "true", maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const navigate = useNavigate()
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log('>>>>>', workingProcessDetail)
            workingProcessDetail.maNV = maNv
            const { idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV } = workingProcessDetail

            if (!idPhongBan.trim().length || !idChucVu.trim().length || !ngayVao.trim().length || !ngayRa.trim().length || !trangThai.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagerWorkingProcessAPI.addNewManagerWorkingProcess({ ...workingProcessDetail })
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
                    setHaveNewWorkingProcess(maNv)
                    //navigate(`/manager/addcertificate/${maNv}`)
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
                        value={workingProcessDetail.idPhongBan || 1}
                        option={listDepartment.map((departmentItem) => {
                            return (
                                { label: departmentItem.tenPhongBan, value: departmentItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, idPhongBan: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Position"
                        value={workingProcessDetail.idChucVu || 1}
                        option={listPosition.map((positionItem) => {
                            return (
                                { label: positionItem.tenChucVu, value: positionItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, idChucVu: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Date start work"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, ngayVao: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Date end work"
                        require={true}
                        type="date"
                        handleChange={(event) => {

                            setWorkingProcessDetail({ ...workingProcessDetail, ngayRa: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Status"
                        value={workingProcessDetail.trangThai || true}
                        option={
                            [{ label: "Working", value: true }, { label: "Leaved", value: false }]
                        }
                        require={true}
                        handleChange={(event) => {
                            setWorkingProcessDetail({ ...workingProcessDetail, trangThai: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        type="text"
                        value={maNv}
                        disabled={true}
                    />
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div className="list-button">
                {
                    haveNewWorkingProcess ?
                        <div>
                            <button className="add-contract" onClick={() => navigate(`/manager/addcertificate/${maNv}`)}>
                                <span class="image">
                                    <img src="/home/save-icon.svg" />
                                </span>
                                <span class="text"> Add Certificate For {maNv}</span>
                            </button>
                        </div> :
                        <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                            <span class="image">
                                <img src="/home/save-icon.svg" />
                            </span>
                            <span class="text">Add</span>
                        </button>
                }

            </div>
            <ToastContainer />
        </div>
    );
}
