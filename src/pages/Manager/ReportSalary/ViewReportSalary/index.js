import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagerSalaryAPI from "../../../../api/Manager/salary";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactHtmlTableToExcel from "react-html-table-to-excel";

export default function ViewReportSalary() {
    const [listReportSalary, setListReportSalary] = useState([])
    // const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllReportSalary = async () => {
        console.log('da vao day 1')
        const reportSalaryRes = await ManagerSalaryAPI.getReportSalary()
        if (reportSalaryRes?.status === 200) {
            console.log('reportSalaryRes?.data: ', reportSalaryRes?.data)
            setListReportSalary(reportSalaryRes?.data)
        }
    }

    useEffect(() => {
        getAllReportSalary()
    }, [])

    return (
        <div className="homepage">
           
            <div className="title">List of Report Salary</div>
            <ReactHtmlTableToExcel
                className="btn btn-info"
                table="reportSalaryTable"
                filename="Report Salary Report Excel file"
                sheet="Sheet"
                buttonText="Export to Excel"
            />
            <div className="table-frame">
                <table class="table table-bordered" id="reportSalaryTable">
                    <thead>
                        <tr className="head">
                            <th scope="col">Employee Code</th>
                            <th scope="col">Empolyee Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Department</th>
                            <th scope="col">Basic Salary</th>
                            <th scope="col">Family Allowances</th>
                            <th scope="col">Minimum Number Of Shifts</th>
                            <th scope="col">Number of Shifts Worked</th>
                            <th scope="col">Number of Overtime Shifts</th>
                            <th scope="col">Overtime Salary</th>
                            <th scope="col">Gross Income</th>
                            <th scope="col">Taxable Salary</th>
                            <th scope="col">Personal Income tax</th>
                            <th scope="col">Social Insurance</th>
                            <th scope="col">Health Insurance</th>
                            <th scope="col">Trade Union Fees</th>
                            <th scope="col">Total Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listReportSalary.map((reportSalaryItem, reportSalaryIndex) => {
                            return (
                                <tr key={`tax-item-${reportSalaryIndex}`}>
                                    {/* <th scope="row">{reportSalaryIndex + 1}</th> */}
                                    <td>{reportSalaryItem?.maNv}</td>

                                    <td>{reportSalaryItem?.tenNV}</td>
                                    <td>{reportSalaryItem?.chucVu}</td>
                                    <td>{reportSalaryItem?.phongBan}</td>
                                    <td>{reportSalaryItem?.luongCoBan}</td>
                                    <td>{reportSalaryItem?.giamTruGiaCanh}</td>
                                    <td>{reportSalaryItem?.soCaToiThieu}</td>
                                    <td>{reportSalaryItem?.soCa}</td>
                                    <td>{reportSalaryItem?.soCaLamThem}</td>
                                    <td>{reportSalaryItem?.luongOT}</td>
                                    <td>{reportSalaryItem?.luongTruocThue}</td>
                                    <td>{reportSalaryItem?.luongChiuThueTNCN}</td>
                                    <td>{reportSalaryItem?.thueTNCN}</td>
                                    <td>{reportSalaryItem?.baoHiemXaHoi}</td>
                                    <td>{reportSalaryItem?.baoHiemYte}</td>
                                    <td>{reportSalaryItem?.congDoan}</td>
                                    <td>{reportSalaryItem?.tong}</td>
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
