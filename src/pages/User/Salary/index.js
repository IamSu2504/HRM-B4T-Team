import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import employeeContractAndSalaryAPI from "../../../api/employeeContractAndSalary";
import ManagerSalaryAPI from "../../../api/Manager/salary";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ViewSalary() {
    const [salaryDetail, setSalaryDetail] = useState([])
    const navigate = useNavigate();
    const { maHd } = useParams()
    const { maNv } = useParams()

    const getSalaryDetail = async () => {
        if (maHd) {
            const Res = await ManagerSalaryAPI.getManagerSalaryByHD(maHd)
            if (Res?.status === 200) {
                console.log('>>>>', maHd)
                console.log('>>>>', Res?.data)
                setSalaryDetail(Res?.data)
            }
        }
    }

    useEffect(() => {
        getSalaryDetail()
    }, []);

    const Delete = async (id) => {
        try{
            const deleteRes = await ManagerSalaryAPI.Delete(id)

            if (deleteRes?.status === 200){
                toast.success('Xóa thành công')
                getSalaryDetail()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }
    return (

        <div className="view-contract-page">
            <div className="row">
                <div className="col-12">
                    <div class="title">Salary Of {maHd}</div>
                </div>
            </div>
            {localStorage.getItem('role') == 'Manager' ? <div>
                <button className="save-button" onClick={() => navigate(`/manager/addSalary/${maNv}&&${maHd}`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text"> Add Salary</span>
                </button>
            </div> : <div></div>}

            {
                salaryDetail.map((salaryItem) => {
                    return (
                        <div class="list-contract">
                            <h5>Salary </h5>
                            <div id="contract1">
                                <div data-toggle="collapse" href="#collapse1" aria-expanded="true">
                                    <div aria-expanded="true" class="title-list">
                                        <h5>Salary </h5>
                                    </div>
                                </div>
                                <div id="collapse1" data-parent="#contract1" class="collapse">
                                    <div class="row fied-data-row">
                                        <div>
                                            <div class="title-sub">Salary detail</div>
                                            <table>
                                                <tr>
                                                    <th>Contact code:</th>
                                                    <td>{maHd || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Salary Grade:</th>
                                                    <td>{salaryItem.idBacLuong?.tenBacLuong || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Basic Salary:</th>
                                                    <td>{salaryItem.luongCoBan || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Phụ Cấp Khác:</th>
                                                    <td>{salaryItem.phuCapKhac || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Ngày Hiệu Lực:</th>
                                                    <td>{salaryItem.ngayHieuLuc || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Ngày kết Thúc:</th>
                                                    <td>{salaryItem.ngayKetThuc || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Ghi Chú:</th>
                                                    <td>{salaryItem.ghiChu || ''}</td>
                                                </tr>
                                                <tr>
                                                    <th>Tổng Lương:</th>
                                                    <td>{salaryItem.tongLuong || ''}</td>
                                                </tr>
                                            </table>
                                        </div>


                                    </div>
                                    {
                                        localStorage.getItem('role') == 'Manager' ? <div>
                                            <button className="save-button" onClick={() => Delete(salaryItem.id)}>
                                                <span class="image">
                                                    <img src="/home/save-icon.svg" />
                                                </span>
                                                <span class="text"> Delete</span>
                                            </button>

                                        </div> : <div></div>


                                    }

                                </div>
                            </div>


                        </div>
                    )
                })
            }




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