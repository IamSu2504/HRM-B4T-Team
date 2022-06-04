import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManagerWorkingProcessAPI from "../../../../api/Manager/workingProcess";
import DepartmentAPI from "../../../../api/department";
import PositionAPI from "../../../../api/position";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UpdateWorkingProcess() {
    const [workingProcessDetail, setWorkingProcessDetail] = useState({ idPhongBan: '', idChucVu: '', ngayVao: '' , ngayRa: ''  , trangThai: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { workingProcessId } = useParams()

    const getWorkingProcessDetail = async () => {
        if (workingProcessId) {
            const workingProcessRes = await ManagerWorkingProcessAPI.getManagerWorkingProcessById(workingProcessId)
            if (workingProcessRes?.status === 200) {
                setWorkingProcessDetail({
                    idPhongBan: workingProcessRes?.data?.idPhongBan?.id,
                    idChucVu: workingProcessRes?.data?.idChucVu?.id,
                    ngayVao: workingProcessRes?.data?.ngayVao,
                    ngayRa: workingProcessRes?.data?.ngayRa,
                    trangThai: workingProcessRes?.data?.trangThai,
                    maNV: workingProcessRes?.data?.maNV
                })
            }
        }
    }

    useEffect(() => {
        getWorkingProcessDetail()
    }, [])

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

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV } = workingProcessDetail
            console.log(workingProcessDetail)
            
            if (!idPhongBan.toString()?.trim()?.length || !idChucVu.toString()?.trim()?.length
                || !ngayVao.toString()?.trim()?.length || !ngayRa.toString()?.trim()?.length || !trangThai.toString()?.trim()?.length || !maNV.toString()?.trim()?.length) {
                
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)
              
                const updateRes = await ManagerWorkingProcessAPI.updateManagerWorkingProcess({ id: workingProcessId, ...workingProcessDetail })
                if (updateRes?.status === 200) {
                    toast.success(updateRes?.data)
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
                    <div className="title">Edit Information of Working Process</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Department"
                        value={workingProcessDetail?.idPhongBan}
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
                        value={workingProcessDetail?.idChucVu}
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
                        handleChange={(event) => {
                            const parts =event.target.value.split('-');
                            const mydate = parts[2]+'/'+ parts[1]+'/'+ parts[0] 
                            setWorkingProcessDetail({ ...workingProcessDetail, ngayVao: mydate})
                        }}
                    />
                    <CustomInputField
                        title="Date end work"
                        require={true}
                        type="date"

                        handleChange={(event) => {
                            const parts =event.target.value.split('-');
                            const mydate = parts[2]+'/'+ parts[1]+'/'+ parts[0] 
                            setWorkingProcessDetail({ ...workingProcessDetail, ngayRa: mydate})
                        }}
                    />
                    <CustomSelectBox
                         title="Status"
                        value={workingProcessDetail?.trangThai}
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
                        disabled={true}
                        value={workingProcessDetail?.maNV}
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
