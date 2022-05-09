import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DepartmentAPI from "../../../../api/department";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewDepartment() {
    const [listDepartment, setListDepartment] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllDepartment = async() => {
        const departmentRes = await DepartmentAPI.getAll()
        if ( departmentRes?.status === 200 ){
            setListDepartment(departmentRes?.data)
        }
    }

    useEffect(() => {
        getAllDepartment()
    }, [])

    const deleteDepartment = async(departmentId) => {
        try{
            const deleteRes = await DepartmentAPI.deleteDepartment(departmentId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllDepartment()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Department</div>
            <div className="table-frame">




                
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/adddepartment`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Department code</th>
                            <th scope="col">Department name</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDepartment.map((departmentItem, departmentIndex) => {
                            return (
                                <tr key={`tax-item-${departmentIndex}`}>
                                    <th scope="row">{departmentIndex + 1}</th>
                                    <td>{departmentItem?.maPhongBan}</td>
                                    <td>{departmentItem?.tenPhongBan}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatedepartment/${departmentItem?.id}`)}>
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
