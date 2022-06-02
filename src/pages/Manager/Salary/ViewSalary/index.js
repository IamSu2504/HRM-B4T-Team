import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerContractAPI from "../../../../api/Manager/contract";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewSalary() {
    const [listContract, setListContract] = useState([])
    // const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllContract = async() => {
        const contractRes = await ManagerContractAPI.getAll()
        if ( contractRes?.status === 200 ){
            setListContract(contractRes?.data)
        }
    }

    useEffect(() => {
        getAllContract()
    }, [])

    return (
        <div className="homepage">
            <div className="title">List of Contract</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/manager/addcontract`)}>
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
                            <th scope="col">Contract code</th>
                            <th scope="col">Employee code</th>
                            <th scope="col">Type of Contract</th>
                            <th scope="col">Effective date</th>
                            <th scope="col">Expiration date</th>
                            <th scope="col">Note</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContract.map((contractItem, contractIndex) => {
                            return (
                                <tr key={`tax-item-${contractIndex}`}>
                                    <th scope="row">{contractIndex + 1}</th>
                                    <td>{contractItem?.maHD}</td>
                                    
                                    <td>{contractItem?.maNV}</td>
                                    <td>{contractItem?.loaiHopDong?.maLoaiHopDong}-{contractItem?.loaiHopDong?.tenLoaiHopDong}</td>
                                    <td>{contractItem?.ngayHieuLuc}</td>
                                    <td>{contractItem?.ngayHetHan}</td>
                                    <td>{contractItem?.ghiChu}</td>
                                    <td>{contractItem?.trangThai? "Effect" : "Expire"}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/manager/updatecontract/${contractItem?.maHD}`)}>
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
