import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClassRoomAPI from "../../../../api/classRoom";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewClassRoom() {
    const [listClassRoom, setListClassRoom] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllClassRoom = async () => {
        const classRoomRes = await ClassRoomAPI.getAll()
        if (classRoomRes?.status === 200) {
            setListClassRoom(classRoomRes?.data)
        }
    }

    useEffect(() => {
        getAllClassRoom()
    }, [])

    const deleteClassRoom = async (classRoomId) => {
        try {
            const deleteRes = await ClassRoomAPI.deleteClassRoom(classRoomId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllClassRoom()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Classroom</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addclassRoom`)}>
                        <span class="image">
                            <img src="/home/save-icon.svg" />
                        </span>
                        <span class="text">Add</span>
                    </button>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">No.</th>
                            <th scope="col">Classroom code</th>
                            <th scope="col">Classroom name</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listClassRoom.map((classRoomItem, classRoomIndex) => {
                            return (
                                <tr key={`tax-item-${classRoomIndex}`}>
                                    <th scope="row">{classRoomIndex + 1}</th>
                                    <td>{classRoomItem?.maPhongHoc}</td>
                                    <td>{classRoomItem?.tenPhongHoc}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updateclassRoom/${classRoomItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="pagination-frame">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


            <ToastContainer />
        </div>
    );
}
