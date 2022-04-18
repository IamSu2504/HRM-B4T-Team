import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DegreeAPI from "../../../../api/degree";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewDegree() {
    const [listDegree, setListDegree] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllDegree = async() => {
        const degreeRes = await DegreeAPI.getAll()
        if ( degreeRes?.status === 200 ){
            setListDegree(degreeRes?.data)
        }
    }

    useEffect(() => {
        getAllDegree()
    }, [])

    const deleteNation = async(degreeId) => {
        try{
            const deleteRes = await DegreeAPI.deleteDegree(degreeId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllDegree()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh Sách Bằng Cấp</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Loại Bằng Cấp</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDegree.map((degreeItem, degreeIndex) => {
                            return (
                                <tr key={`tax-item-${degreeIndex}`}>
                                    <th scope="row">{degreeIndex + 1}</th>
                                    <td>{degreeItem?.loaiBangCap}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatedegree/${degreeItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    <td>                
                                        <CustomPopover
                                            open={popoverId === degreeItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteNation(degreeItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== degreeItem?.id) {
                                                        setPopoverId(degreeItem?.id);
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
                <button className="save-button" onClick={()=>navigate(`/admin/adddegree`)}>
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
