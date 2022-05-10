import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagerWorkingProcessAPI from "../../../../api/Manager/workingProcess";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewWorkingProcess() {
    const [listWorkingProcess, setListWorkingProcess] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllWorkingProcess = async () => {
        const workingProcessRes = await ManagerWorkingProcessAPI.getAll()
        if (workingProcessRes?.status === 200) {
            setListWorkingProcess(workingProcessRes?.data)
        }
    }

    useEffect(() => {
        getAllWorkingProcess()
    }, [])


    return (
        <div className="homepage">
            <div className="title">List of Working Process</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/manager/addworkingProcess`)}>
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
                            <th scope="col">Employee code</th>
                            <th scope="col">Department</th>
                            <th scope="col">Position</th>
                            <th scope="col">Date start work</th>
                            <th scope="col">Date end work</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listWorkingProcess.map((workingProcessItem, workingProcessIndex) => {
                            return (
                                <tr key={`tax-item-${workingProcessIndex}`}>
                                    <th scope="row">{workingProcessIndex + 1}</th>
                                    <td>{workingProcessItem?.maNV}</td>
                                    <td>{workingProcessItem?.idPhongBan?.tenPhongBan}</td>
                                    <td>{workingProcessItem?.idChucVu?.tenChucVu}</td>
                                    <td>{workingProcessItem?.ngayVao}</td>
                                    <td>{workingProcessItem?.ngayRa}</td>
                                    <td>{workingProcessItem?.trangThai ? "Working" : "Finished"}</td>
                                    <td>
                                        <div onClick={() => navigate(`/manager/updateworkingProcess/${workingProcessItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === specializItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteSpecialize(specializItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== specializItem?.id) {
                                                        setPopoverId(specializItem?.id);
                                                    } else {
                                                        setPopoverId("");
                                                    }
                                                }}
                                            >
                                                <img src="/home/delete-icon.svg" />
                                            </div>
                                        </CustomPopover>
                                    </td> */}
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
