import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ContractAPI from "../../../../api/contract";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewContract() {
    const [listContract, setListContract] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllContract = async() => {
        const contractRes = await ContractAPI.getAll()
        if ( contractRes?.status === 200 ){
            setListContract(contractRes?.data)
        }
    }

    useEffect(() => {
        getAllContract()
    }, [])

    const deleteContract = async(contractId) => {
        try{
            const deleteRes = await ContractAPI.deleteContract(contractId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllContract()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh sách Hợp Đồng</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Hợp Đồng</th>
                            <th scope="col">Tên Loại Hợp Đồng</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContract.map((contractItem, contractIndex) => {
                            return (
                                <tr key={`tax-item-${contractIndex}`}>
                                    <th scope="row">{contractIndex + 1}</th>
                                    <td>{contractItem?.maLoaiHopDong}</td>
                                    <td>{contractItem?.tenLoaiHopDong}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatecontract/${contractItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    <td>                
                                        <CustomPopover
                                            open={popoverId === contractItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteContract(contractItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== contractItem?.id) {
                                                        setPopoverId(contractItem?.id);
                                                    } else {
                                                        setPopoverId("");
                                                    }
                                                }}
                                            >
                                                <img src="/home/delete-icon.svg" />
                                            </div>
                                        </CustomPopover>
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

            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addcontract`)}>
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
