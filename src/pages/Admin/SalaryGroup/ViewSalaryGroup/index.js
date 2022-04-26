import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import SalaryGroupAPI from "../../../../api/salaryGroup";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewSalaryGroup() {
    const [listSalaryGroup, setListSalaryGroup] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllSalaryGroup = async() => {
        const salaryGroupRes = await SalaryGroupAPI.getAll()
        if ( salaryGroupRes?.status === 200 ){
            setListSalaryGroup(salaryGroupRes?.data)
        }
    }

    useEffect(() => {
        getAllSalaryGroup()
    }, [])

    const deleteSalaryGroup = async(salaryGroupId) => {
        try{
            const deleteRes = await SalaryGroupAPI.deleteSalaryGroup(salaryGroupId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllSalaryGroup()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh sách Nhóm Lương</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Nhóm Lương</th>
                            <th scope="col">Tên Nhóm Lương</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listSalaryGroup.map((salaryGroupItem, salaryGroupIndex) => {
                            return (
                                <tr key={`tax-item-${salaryGroupIndex}`}>
                                    <th scope="row">{salaryGroupIndex + 1}</th>
                                    <td>{salaryGroupItem?.maNhomLuong}</td>
                                    <td>{salaryGroupItem?.tenNhomLuong}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatesalaryGroup/${salaryGroupItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    <td>                
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
                <button className="save-button" onClick={()=>navigate(`/admin/addsalaryGroup`)}>
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
