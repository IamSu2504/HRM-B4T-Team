import React, { useState, useEffect, useRef } from "react";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterShiftAPI from '../../../api/registerShift'
import ShiftAPI from "../../../api/shift";
import DepartmentAPI from "../../../api/department";
import UserAPI from "../../../api/user";



export default function RegisterShift() {
    const [registerShiftDetail, setRegisterShiftDetail] = useState({ user:{}, shiftCategory:{}, room:{}, date:'' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const [userDetail, setUserDetail] = useState([])
    const [shiftDetail, setListShift] = useState([])
    const [listDepartment, setListDepartment] = useState([])
    const registerShiftRef = useRef({ user:{}, shiftCategory:{}, room:{}, date:'' })
    // const { maNv } = localStorage.getItem('maNv')

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { user, shiftCategory, room, date } = registerShiftRef.current
            console.log('registerShiftDetail >>>>> ', registerShiftRef.current)
            if (Object.keys(user).length === 0  || Object.keys(shiftCategory).length === 0 || Object.keys(room).length === 0 || Object.keys(date).length === 0) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)
                const addRes = await RegisterShiftAPI.addNewRegisterShift({ ...registerShiftDetail })
                console.log('addRes >>>>>>> ', addRes)
                if (addRes?.status === 200) {
                    toast.success('Thêm mới ca làm thành công')
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

    const getUserDetail = async () => {
        if (localStorage.getItem('maNv')) {
            const userRes = await UserAPI.getUserById(localStorage.getItem('maNv'))
            if (userRes?.status === 200) {
                setUserDetail(userRes?.data)
                setRegisterShiftDetail({...registerShiftDetail, user: userRes?.data || {}})
                registerShiftRef.current = {...registerShiftRef.current, user: userRes?.data || {}}
            }
        }
    }

    useEffect(() => {
        (async() => {
            await getUserDetail()
            await getAllShift()
            await getAllDepartment()
        })()
    }, [])

    const getAllShift = async () => {
        const shiftRes = await ShiftAPI.getAll()
        if (shiftRes?.status === 200) {
            setListShift(shiftRes?.data)
            setRegisterShiftDetail({...registerShiftDetail, shiftCategory: shiftRes?.data?.length ? shiftRes?.data[0] : {} })
            registerShiftRef.current={...registerShiftRef.current, shiftCategory: shiftRes?.data?.length ? shiftRes?.data[0] : {} }
        }
    }

    const getAllDepartment = async () => {
        const departmentRes = await DepartmentAPI.getAll()
        if (departmentRes?.status === 200) {
            setListDepartment(departmentRes?.data)
            setRegisterShiftDetail({...registerShiftDetail, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} })
            registerShiftRef.current={...registerShiftRef.current, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} }
        }
    }

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Đăng Kí Ca Làm</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Mã Nhân Viên *:"
                        value={userDetail?.id || ''}
                        type="text"
                        disabled={true}
                    />
                    <CustomSelectBox
                        title="Ca Làm Việc *:"
                        option={shiftDetail.map((shiftItem) => {
                            return (
                                { label: `${shiftItem.tenCa} Bắt Đầu: ${shiftItem.gioBatDau}-Kết Thúc: ${shiftItem.gioKetThuc} `, value: JSON.stringify(shiftItem) }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            const value = event.currentTarget.value
                            const shiftCategory = JSON.parse(value)
                            setRegisterShiftDetail({ ...registerShiftDetail, shiftCategory: shiftCategory})
                            registerShiftRef.current={ ...registerShiftRef.current, shiftCategory: shiftCategory}
                        }}
                    />
                    <CustomSelectBox
                        title="Phòng Làm Việc *:"
                        option={listDepartment.map((departmentItem) => {
                            return (
                                { label: `${departmentItem.tenPhongBan}-${departmentItem.maPhongBan}`, value: JSON.stringify(departmentItem) }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            const value = event.currentTarget.value
                            const room = JSON.parse(value)
                            setRegisterShiftDetail({ ...registerShiftDetail, room: room })
                            registerShiftRef.current={ ...registerShiftRef.current, room: room }
                        }}
                    />
                    <CustomInputField
                        title="Ngày Làm Việc *:"
                        type="date"
                        disabled={false}
                        handleChange={(event) => {
                            setRegisterShiftDetail({ ...registerShiftDetail, date: event.target.value })
                            registerShiftRef.current={ ...registerShiftRef.current, date: event.target.value }
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
                    <span class="text">Đăng Kí</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
