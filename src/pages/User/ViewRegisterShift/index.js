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
import { useParams } from "react-router-dom";


export default function RegisterShift() {
    const [registerShiftDetail, setRegisterShiftDetail] = useState({ userID: '', shiftCategoryID: '', roomID: '1', date: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [shiftDetail, setListShift] = useState([])
    const [listDepartment, setListDepartment] = useState([])
    const [listClassRoom, setListClassRoom] = useState([])

    const [listviewShift, setlistviewShift] = useState([]);
    const [idPhong, setIdPhong] = useState()
    const [i, setI] = useState()
    
    const [ngayTu, setNgayTu] = useState()
    const [ngayDen, setNgayDen] = useState()
    const [dayOfWeek, setDayOfWeek] = useState(['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'])
    var t = -1;

    const { maNv } = useParams();

    const getAllShift = async () => {
        const shiftRes = await ShiftAPI.getAll()
        if (shiftRes?.status === 200) {
            setListShift(shiftRes?.data)
           
        }
    }

    // const getAllDepartment = async () => {
    //     const departmentRes = await DepartmentAPI.getAll()
    //     if (departmentRes?.status === 200) {
    //         setListDepartment(departmentRes?.data)
           
    //     }
    // }

    const getAllClassRoom = async () => {
        const classRoomRes = await ClassRoomAPI.getAll()
        if (classRoomRes?.status === 200) {
            setListClassRoom(classRoomRes?.data)
            setIdPhong(classRoomRes?.data[0]?.id)
        }
    }

    const getlistviewShift = async () => {
        console.log(idPhong, ngayTu, ngayDen)
        const registerShiftByTimeRes = await RegisterShiftAPI.getRegisterShiftByMaNv({ idPhong, ngayTu, ngayDen, maNv })
        if (registerShiftByTimeRes?.status === 200) {
            console.log('da vao day', idPhong)
            setlistviewShift(registerShiftByTimeRes?.data)

        }
    }

    useEffect(() => {
        getAllShift()
        getAllClassRoom()
        getlistviewShift()
    }, [])

    useEffect(() => {
       
        getlistviewShift()
    }, [idPhong]);
    useEffect(() => {
      
        getlistviewShift()
    }, [ngayTu]);
    useEffect(() => {
  
        getlistviewShift()
    }, [ngayDen]);
    useEffect(() => {
          
        setRegisterShiftDetail({...registerShiftDetail, date: i})
        console.log(registerShiftDetail?.date)
    }, [i]);

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
                    <CustomSelectBox
                        title="Phòng Làm Việc *:"
                        option={listClassRoom.map((classRoomItem) => {
                            return (
                                { label: `${classRoomItem.maPhongHoc}-${classRoomItem.tenPhongHoc}`, value: classRoomItem?.id  }
                            )
                        })}
                        value={idPhong}
                        require={true}
                        handleChange={(event) => {
                            const id = event.currentTarget.value
                            setIdPhong(id)
                            setRegisterShiftDetail({...registerShiftDetail, roomID: id})
                        }}
                    />
                    <CustomInputField
                        title="Ngày Làm Việc *:"
                        type="date"
                        disabled={false}
                        handleChange={(event) => {
                
                            var curr = new Date(event.target.value);
                            setI(curr.toLocaleDateString())
                            setRegisterShiftDetail({...registerShiftDetail, date: curr.toLocaleDateString()})
                            
                            var ngayTu = new Date(curr.setDate(curr.getDate() - curr.getDay())).toLocaleDateString();
                            var ngayDen = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)).toLocaleDateString();
                            setNgayTu(ngayTu)
                            setNgayDen(ngayDen)
                            
                          
                        }}
                    />
                    


                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            {idPhong && ngayDen && ngayTu ?
                <div>
                    <div className="table-frame">
                        <table class="table table-bordered" id="userTable">
                            <thead>
                                <tr className="head">
                                    <th scope="col"></th>
                                    <th scope="col">Chủ Nhật</th>
                                    <th scope="col">Thứ 2</th>
                                    <th scope="col">Thứ 3</th>
                                    <th scope="col">Thứ 4</th>
                                    <th scope="col">Thứ 5</th>
                                    <th scope="col">Thứ 6</th>
                                    <th scope="col">Thứ 7</th>
                                    
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
                            filename="User Excel file"
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
