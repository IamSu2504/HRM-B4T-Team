import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerInsuranceAPI from "../../../../api/Manager/Insurance";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewInsurance() {
    const [listInsurance, setListInsurance] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllInsurance = async() => {
        const insuranceRes = await ManagerInsuranceAPI.getAll()
        if ( insuranceRes?.status === 200 ){
            setListInsurance(insuranceRes?.data)
        }
    }

    useEffect(() => {
        getAllInsurance()
    }, [])


    return (
        <div className="homepage">
            <div className="title">Danh sách bảo Hiểm</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Số Nhân Viên</th>
                            <th scope="col">Loại Bảo Hiểm</th>
                            <th scope="col">Mã Số Bảo Hiểm</th>
                            <th scope="col">Tiền Bảo Hiểm</th>
                            
                            <th scope="col">Sửa</th>
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
                                        <div onClick={()=>navigate(`/manager/updateinsurance/${insuranceItem?.id}`)}>
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

            <div>
                <button className="save-button" onClick={()=>navigate(`/manager/addinsurance`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm Mới</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
