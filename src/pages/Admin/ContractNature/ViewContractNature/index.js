import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ContractNatureAPI from "../../../../api/contractNature";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewContractNature() {
    const [listContractNature, setListContractNature] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllContractNature = async() => {
        const ContractNatureRes = await ContractNatureAPI.getAll()
        if ( ContractNatureRes?.status === 200 ){
            setListContractNature(ContractNatureRes?.data)
        }
    }

    useEffect(() => {
        getAllContractNature()
    }, [])

    const deleteContractNature = async(contractNatureId) => {
        try{
            const deleteRes = await ContractNatureAPI.deleteContractNature(contractNatureId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllContractNature()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Contract Nature</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addcontractNature`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
<<<<<<< HEAD
                            <th scope="col">STT</th>
                            <th scope="col">Tính Chất Hợp Đồng</th>
                            <th scope="col">Sửa</th>
                            {/* <th scope="col">Xoá</th> */}
=======
                            <th scope="col">No.</th>
                            <th scope="col">Contract Nature</th>
                            <th scope="col">Edit</th>
>>>>>>> 80678713916747c943fac48661764b7116a0d064
                        </tr>
                    </thead>
                    <tbody>
                        {listContractNature.map((contractNatureItem, contractNatureIndex) => {
                            return (
                                <tr key={`tax-item-${contractNatureIndex}`}>
                                    <th scope="row">{contractNatureIndex + 1}</th>
                                    <td>{contractNatureItem?.tinhChatHopDong}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatecontractNature/${contractNatureItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
<<<<<<< HEAD
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === contractNatureItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteContractNature(contractNatureItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== contractNatureItem?.id) {
                                                        setPopoverId(contractNatureItem?.id);
                                                    } else {
                                                        setPopoverId("");
                                                    }
                                                }}
                                            >
                                                <img src="/home/delete-icon.svg" />
                                            </div>
                                        </CustomPopover>
                                    </td> */}
=======
>>>>>>> 80678713916747c943fac48661764b7116a0d064
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
