import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import employeeContractAndSalaryAPI from "../../../api/employeeContractAndSalary";
import ManagerSalaryAPI from "../../../api/Manager/salary";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ViewContract() {
    const [userContractDetail, setUserContractDetail] = useState([])
    const navigate = useNavigate();
    const { maNv } = useParams()
    console.log(">>>>>", maNv)
    const getUserContractDetail = async () => {
        if (maNv) {
            const employeeContractRes = await employeeContractAndSalaryAPI.getContract(maNv)
            if (employeeContractRes?.status === 200) {

                setUserContractDetail(employeeContractRes?.data)
            }
        }
    }

    useEffect(() => {
        getUserContractDetail()
    }, [])


    
    return (
        <div className="view-contract-page">
            <div className="row">
                <div className="col-12">
                    <div class="title">Contract</div>
                </div>
            </div>
            {localStorage.getItem('role') == 'Manager' ? <div>
                <button className="save-button" onClick={() => navigate(`/manager/addcontract/${maNv}`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text"> Add Contract {maNv}</span>
                </button>
            </div> : <div></div>}
            {userContractDetail.map((contractItem, contractIndex) => {
                return (
                    <div class="list-contract">
                        <div id="contract1">
                            <div data-toggle="collapse" href="#collapse1" aria-expanded="true">
                                <div aria-expanded="true" class="title-list">
                                    <h5>Contract code</h5>
                                    <p>{contractItem.maHD || ''}</p>

                                </div>
                            </div>
                            <div id="collapse1" data-parent="#contract1" class="collapse">
                                <div class="row fied-data-row">
                                    <div>
                                        <div class="title-sub">Contract detail</div>
                                        <table>
                                            <tr>
                                                <th>Employee code:</th>
                                                <td>{contractItem.maNV || ''}</td>
                                            </tr>
                                            <tr>
                                                <th>Type of Contract:</th>
                                                <td>{contractItem.loaiHopDong?.maLoaiHopDong || ''}</td>
                                            </tr>
                                            <tr>
                                                <th>Contract name:</th>
                                                <td>{contractItem.loaiHopDong?.tenLoaiHopDong || ''}</td>
                                            </tr>
                                            <tr>
                                                <th>Effective date:</th>
                                                <td>{contractItem.ngayHieuLuc || ''}</td>
                                            </tr>
                                            <tr>
                                                <th>Expiration date:</th>
                                                <td>{contractItem.ngayHetHan || ''}</td>
                                            </tr>
                                            <tr>
                                                <th>Status:</th>
                                                <td>{contractItem.trangThai ? 'Working' : 'Leaved'}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    

                                </div>
                                {
                                    localStorage.getItem('role') == 'Manager' ? <div>
                                        <button className="save-button" onClick={() => navigate(`/manager/updatecontract/${contractItem.maHD}`)}>
                                            <span class="image">
                                                <img src="/home/save-icon.svg" />
                                            </span>
                                            <span class="text"> Update {contractItem.maHD}</span>
                                        </button>

                                    </div> : <div></div>


                                }
                                <div onClick={() => {
                                    if (localStorage.getItem('role') === 'Admin') {
                                        navigate(`/admin/viewSalary/${contractItem.maNV}&&${contractItem.maHD}`)
                                    }
                                    else
                                        if (localStorage.getItem('role') === 'Manager') {
                                            navigate(`/manager/viewSalary/${contractItem.maNV}&&${contractItem.maHD}`)
                                        }
                                        else {
                                            navigate(`/employee/viewSalary/${contractItem.maNV}&&${contractItem.maHD}`)
                                        }
                                }}>
                                    <button className="save-button">
                                        <span class="image">
                                            <img src="/home/save-icon.svg" />
                                        </span>
                                        <span class="text">View Salary</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                )
            })}




            <div>
                <button className="save-button" onClick={() => {
                    if (localStorage.getItem('role') === 'Admin') {
                        navigate(`/admin/viewUser/${maNv}`)
                    }
                    else
                        if (localStorage.getItem('role') === 'Manager') {
                            navigate(`/manager/viewUser/${maNv}`)
                        }
                        else {
                            navigate(`/employee/viewUser/${maNv}`)
                        }
                }}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text"> View User</span>
                </button>
            </div>
        </div>
    );
}