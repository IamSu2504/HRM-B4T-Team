import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TaxAPI from "../../../../api/tax";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewTax() {
    const [listTax, setListTax] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllTax = async() => {
        const taxRes = await TaxAPI.getAll()
        if ( taxRes?.status === 200 ){
            setListTax(taxRes?.data)
        }
    }

    useEffect(() => {
        getAllTax()
    }, [])

    const deleteTax = async(taxId) => {
        try{
            const deleteRes = await TaxAPI.deleteTax(taxId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllTax()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh sách Thuế</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Phân Loại</th>
                            <th scope="col">Tên Loại Thuế</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {listTax.map((taxItem, taxIndex) => {
                            return (
                                <tr key={`tax-item-${taxIndex}`}>
                                    <th scope="row">{taxIndex + 1}</th>
                                    <td>{taxItem?.maPhanLoai}</td>
                                    <td>{taxItem?.tenLoaiThue}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatetax/${taxItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    <td>                
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
                <button className="save-button" onClick={()=>navigate(`/admin/addtax`)}>
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
