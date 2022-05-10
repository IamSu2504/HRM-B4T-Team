import React, { useState, useEffect, useRef } from "react";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterShiftAPI from '../../../api/registerShift'
import ShiftAPI from "../../../api/shift";
import DepartmentAPI from "../../../api/department";
import ClassRoomAPI from "../../../api/classRoom";
import UserAPI from "../../../api/user";
import ReactHtmlTableToExcel from "react-html-table-to-excel";


export default function RegisterShift() {
    const [registerShiftDetail, setRegisterShiftDetail] = useState({ userID: '', shiftCategoryID: '', roomID: '', date: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const [userDetail, setUserDetail] = useState([])
    const [shiftDetail, setListShift] = useState([])
    const [listDepartment, setListDepartment] = useState([])
    const [listClassRoom, setListClassRoom] = useState([])
    // const registerShiftRef = useRef({ user: {}, shiftCategory: {}, room: {}, date: '' })
    //use view table
    const [listviewShift, setlistviewShift] = useState([]);
    const [idPhong, setIdPhong] = useState()
    const [i, setI] = useState()

    // var curr = new Date();
    // var ngayTu1 = new Date(curr.setDate(curr.getDate() - curr.getDay())).toLocaleDateString();
    // var ngayDen1 = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)).toLocaleDateString();
    const [ngayTu, setNgayTu] = useState()
    const [ngayDen, setNgayDen] = useState()
    const [dayOfWeek, setDayOfWeek] = useState(['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'])
    var t = -1;


    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { userID, shiftCategoryID, roomID, date } = registerShiftDetail
            console.log('registerShiftDetail >>>>> ', registerShiftDetail)
            if (!userID?.trim()?.length || !shiftCategoryID?.trim()?.length || !roomID.toString().trim()?.length || !date?.trim()?.length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)
                const addRes = await RegisterShiftAPI.addNewRegisterShift({ ...registerShiftDetail })
                console.log('da vao day 2')
                if (addRes?.status === 200) {
                    toast.success(addRes?.data)
                    getlistviewShift()
                }
            }
        } catch (error) {
            console.log('error', error)
            if (error.response) {
                setSubmitError({ status: true, error: error.response.data })
            }
        } finally {
            setIsSubmit(false)
        }
    }

    const getUserDetail = async () => {
        if (localStorage.getItem('maNv')) {
            const userRes = await UserAPI.getAll()
            if (userRes?.status === 200) {
                setUserDetail(userRes?.data)
                // setRegisterShiftDetail({ ...registerShiftDetail, user: userRes?.data || {} })
                // registerShiftRef.current = { ...registerShiftRef.current, user: userRes?.data || {} }
            }
        }
    }



    const getAllShift = async () => {
        const shiftRes = await ShiftAPI.getAll()
        if (shiftRes?.status === 200) {
            setListShift(shiftRes?.data)
            // setRegisterShiftDetail({ ...registerShiftDetail, shiftCategory: shiftRes?.data?.length ? shiftRes?.data[0] : {} })
            // registerShiftRef.current = { ...registerShiftRef.current, shiftCategory: shiftRes?.data?.length ? shiftRes?.data[0] : {} }
        }
    }

    // const getAllDepartment = async () => {
    //     const departmentRes = await DepartmentAPI.getAll()
    //     if (departmentRes?.status === 200) {
    //         setListDepartment(departmentRes?.data)
    //         if ( departmentRes?.data?.length ){
    //             setRegisterShiftDetail({...registerShiftDetail, roomID: departmentRes?.data[0]?.id})
    //             setIdPhong(departmentRes?.data[0]?.id)
    //         }
    //         // setRegisterShiftDetail({ ...registerShiftDetail, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} })
    //         // registerShiftRef.current = { ...registerShiftRef.current, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} }
    //     }
    // }

    const getAllClassRoom = async () => {
        const classRoomRes = await ClassRoomAPI.getAll()
        if (classRoomRes?.status === 200) {
            setListClassRoom(classRoomRes?.data)
            if (classRoomRes?.data?.length) {
                setRegisterShiftDetail({ ...registerShiftDetail, roomID: classRoomRes?.data[0]?.id })
                setIdPhong(classRoomRes?.data[0]?.id)
            }
            // setRegisterShiftDetail({ ...registerShiftDetail, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} })
            // registerShiftRef.current = { ...registerShiftRef.current, room: departmentRes?.data?.length ? departmentRes?.data[0] : {} }
        }
    }


    // console.log('>>>>idPhong', idPhong)
    // console.log('>>>>ngayTu', ngayTu)
    // console.log('>>>>ngayDen', ngayDen)

    const getlistviewShift = async () => {
        console.log(idPhong, ngayTu, ngayDen)
        const registerShiftByTimeRes = await RegisterShiftAPI.getRegisterShiftByTime({ idPhong, ngayTu, ngayDen })
        if (registerShiftByTimeRes?.status === 200) {
            setlistviewShift(registerShiftByTimeRes?.data)
        }

    }

    useEffect(() => {
        getUserDetail()
        getAllShift()
        getAllClassRoom()
        getlistviewShift()
    }, [])

    useEffect(() => {
        //    console.log(idPhong)
        getlistviewShift()
    }, [idPhong]);

    useEffect(() => {
        //    console.log(idPhong)
        getlistviewShift()
    }, [ngayTu]);

    useEffect(() => {
        //    console.log(idPhong)
        getlistviewShift()
    }, [ngayDen]);

    useEffect(() => {
        setRegisterShiftDetail({ ...registerShiftDetail, date: i })
        console.log(registerShiftDetail?.date)
    }, [i]);

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Register Shift</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Classroom"
                        option={listClassRoom.map((classRoomItem) => {
                            return (
                                { label: `${classRoomItem.maPhongHoc}-${classRoomItem.tenPhongHoc}`, value: classRoomItem?.id }
                            )
                        })}
                        value={idPhong}
                        require={true}
                        handleChange={(event) => {
                            const id = event.currentTarget.value
                            setIdPhong(id)
                            setRegisterShiftDetail({ ...registerShiftDetail, roomID: id })
                        }}
                    />
                    <CustomInputField
                        title="Working day"
                        require={true}
                        type="date"
                        disabled={false}
                        handleChange={(event) => {
                            // setRegisterShiftDetail({ ...registerShiftDetail, date: event.target.value })
                            // console.log(event.target.value)
                            var curr = new Date(event.target.value);
                            setI(curr.toLocaleDateString())
                            setRegisterShiftDetail({ ...registerShiftDetail, date: curr.toLocaleDateString() })

                            var ngayTu = new Date(curr.setDate(curr.getDate() - curr.getDay())).toLocaleDateString();
                            var ngayDen = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)).toLocaleDateString();
                            setNgayTu(ngayTu)
                            setNgayDen(ngayDen)

                            // console.log(registerShiftDetail?.date)
                        }}
                    />
                    {
                        idPhong && ngayDen && ngayTu ?
                            <div>
                                <CustomSelectBox
                                    title="Working shift"
                                    option={shiftDetail.map((shiftItem) => {
                                        return (
                                            { label: `${shiftItem.tenCa} Start: ${shiftItem.gioBatDau}-End: ${shiftItem.gioKetThuc} `, value: shiftItem.id }
                                        )
                                    })}
                                    require={true}
                                    handleChange={(event) => {
                                        // const value = event.currentTarget.value
                                        // const shiftCategory = JSON.parse(value)
                                        setRegisterShiftDetail({ ...registerShiftDetail, shiftCategoryID: event.currentTarget.value })
                                        // registerShiftRef.current = { ...registerShiftRef.current, shiftCategory: shiftCategory }
                                    }}
                                />
                                <CustomSelectBox
                                    title="Employee code"
                                    option={userDetail.map((userItem) => {
                                        return (
                                            { label: `${userItem.id} -- ${userItem.tenNv}`, value: userItem.id }
                                        )
                                    })}
                                    require={true}
                                    handleChange={(event) => {
                                        setRegisterShiftDetail({ ...registerShiftDetail, userID: event.currentTarget.value })
                                    }}
                                />
                            </div> : <div></div>}



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
                    <span class="text">Register</span>
                </button>
            </div>
            {console.log('lisst view', listviewShift)}
            {idPhong && ngayDen && ngayTu ?
                <div>
                    <div className="table-frame">
                        <table class="table table-bordered" id="userTable">
                            <thead>
                                <tr className="head">
                                    <th scope="col"></th>
<<<<<<< HEAD
                                    
                                    <th scope="col">Thứ 2</th>
                                    <th scope="col">Thứ 3</th>
                                    <th scope="col">Thứ 4</th>
                                    <th scope="col">Thứ 5</th>
                                    <th scope="col">Thứ 6</th>
                                    <th scope="col">Thứ 7</th>
                                    <th scope="col">Chủ Nhật</th>
                                    
=======
                                    <th scope="col">Sunday</th>
                                    <th scope="col">Monday</th>
                                    <th scope="col">Tuesday</th>
                                    <th scope="col">Wednesday</th>
                                    <th scope="col">Thursday</th>
                                    <th scope="col">Friday</th>
                                    <th scope="col">Saturday </th>

>>>>>>> 80678713916747c943fac48661764b7116a0d064
                                </tr>
                            </thead>
                            {
                                <tbody>
                                    {
                                        shiftDetail.map((shiftItem, shiftIndex) => {
                                            return (
                                                <tr>
                                                    <th>
                                                        {shiftItem?.tenCa}
                                                    </th>
                                                    {dayOfWeek.map((dayOfWeekItem, dayOfWeekIndex) => {
                                                        { t++ }
                                                        return (
                                                            <td>
                                                                <a>{listviewShift[t]?.room?.maPhongHoc}</a><br></br>
                                                                <a>{listviewShift[t]?.employee?.id}-{listviewShift[t]?.employee?.tenNv}</a>
                                                                {/* {console.log((shiftIndex+1)*(dayOfWeekIndex+1) -1)} */}

                                                            </td>

                                                        )
                                                    })}
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            }
                        </table>
                        <ReactHtmlTableToExcel
                            className="btn btn-info"
                            table="userTable"
                            filename="RegisterShift Excel file"
                            sheet="Sheet"
                            buttonText="Export to Excel"
                        />
                    </div>
                </div> : <div></div>
            }

            <ToastContainer />
        </div>
    );
}
