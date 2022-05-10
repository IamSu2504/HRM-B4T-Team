import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagerInsuranceAPI from "../../../../api/Manager/Insurance";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactHtmlTableToExcel from "react-html-table-to-excel";

export default function ViewInsurance() {
    const [listInsurance, setListInsurance] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllInsurance = async () => {
        const insuranceRes = await ManagerInsuranceAPI.getAll()
        if (insuranceRes?.status === 200) {
            setListInsurance(insuranceRes?.data)
        }
    }

    useEffect(() => {
        getAllInsurance()
    }, [])


    return (
        <div className="homepage">
            <div className="title">List of Insurance</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/manager/addinsurance`)}>
                        <span class="image">
                            <img src="/home/save-icon.svg" />
                        </span>
                        <span class="text">Add</span>
                    </button>
                </div>
                <table class="table table-bordered" id="insurancetable">
                    <thead>
                        <tr className="head">
                            <th scope="col">No.</th>
                            <th scope="col">Employee code</th>
                            <th scope="col">Type of Insurance</th>
                            <th scope="col">Insurance code</th>
                            <th scope="col">Insurance money</th>

                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listInsurance.map((insuranceItem, insuranceIndex) => {
                            return (
                                <tr key={`tax-item-${insuranceIndex}`}>
                                    <th scope="row">{insuranceIndex + 1}</th>
                                    <td>{insuranceItem?.maNV}</td>
                                    <td>{insuranceItem?.idLoaiBH?.tenBH}</td>
                                    <td>{insuranceItem?.maSoBH}</td>
                                    <td>{insuranceItem?.tienBH}</td>
                                    <td>
                                        <div onClick={() => navigate(`/manager/updateinsurance/${insuranceItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === taxItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteTax(taxItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== taxItem?.id) {
                                                        setPopoverId(taxItem?.id);
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
                <ReactHtmlTableToExcel
                    className="btn btn-info"
                    table="insurancetable"
                    filename="Insurance Excel file"
                    sheet="Sheet"
                    buttonText="Export to Excel"
                />
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
