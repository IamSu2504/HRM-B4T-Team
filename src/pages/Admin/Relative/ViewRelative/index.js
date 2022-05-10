import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import RelativeAPI from "../../../../api/relative";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewRelative() {
    const [listRelative, setListRelative] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllRelative = async() => {
        const relativeRes = await RelativeAPI.getAll()
        if ( relativeRes?.status === 200 ){
            setListRelative(relativeRes?.data)
        }
    }

    useEffect(() => {
        getAllRelative()
    }, [])

    const deleteRelative = async(relativeId) => {
        try{
            const deleteRes = await RelativeAPI.deleteRelative(relativeId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllRelative()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh sách Quan Hệ</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Quan Hệ</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listRelative.map((relativeItem, relativeIndex) => {
                            return (
                                <tr key={`tax-item-${relativeIndex}`}>
                                    <th scope="row">{relativeIndex + 1}</th>
                                    <td>{relativeItem?.quanHe}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updaterelative/${relativeItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    <td>                
                                        <CustomPopover
                                            open={popoverId === relativeItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteRelative(relativeItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== relativeItem?.id) {
                                                        setPopoverId(relativeItem?.id);
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
                <button className="save-button" onClick={()=>navigate(`/admin/addrelative`)}>
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
