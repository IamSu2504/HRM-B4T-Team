import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalaryGradeAPI from "../../../../api/SalaryGrade";

export default function ViewSalaryGrade() {
    const [listSalaryGrade, setListSalaryGrade] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllSalaryGrade = async () => {
        const salaryGradeRes = await SalaryGradeAPI.getAll()
        if (salaryGradeRes?.status === 200) {
            setListSalaryGrade(salaryGradeRes?.data)
        }
    }

    useEffect(() => {
        getAllSalaryGrade()
    }, [])
    return (
        <div className="homepage">
            <div className="title">List of Salary Grade</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addsalarygrade`)}>
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
                            <th scope="col">Salary grade code</th>
                            <th scope="col">Salary grade name</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSalaryGrade.map((salaryGradeItem, salaryGradeIndex) => {
                            return (
                                <tr key={`tax-item-${salaryGradeIndex}`}>
                                    <th scope="row">{salaryGradeIndex + 1}</th>
                                    <td>{salaryGradeItem?.maBacLuong}</td>
                                    <td>{salaryGradeItem?.tenBacLuong}</td>
                                    <td>{salaryGradeItem?.khoangLuongTu}</td>
                                    <td>{salaryGradeItem?.khoangLuongDen}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updatesalarygrade/${salaryGradeItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === salaryGroupItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteSalaryGroup(salaryGroupItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== salaryGroupItem?.id) {
                                                        setPopoverId(salaryGroupItem?.id);
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
            {/* <div className="pagination-frame">
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
            </div> */}


            <ToastContainer />
        </div>
    );
}
