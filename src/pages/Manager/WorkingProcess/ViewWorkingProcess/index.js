import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerWorkingProcessAPI from "../../../../api/Manager/workingProcess";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewWorkingProcess() {
    const [listWorkingProcess, setListWorkingProcess] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllWorkingProcess = async() => {
        const workingProcessRes = await ManagerWorkingProcessAPI.getAll()
        if ( workingProcessRes?.status === 200 ){
            setListWorkingProcess(workingProcessRes?.data)
        }
    }

    useEffect(() => {
        getAllWorkingProcess()
    }, [])


    return (
        <div className="homepage">
            <div className="title">Danh sách Qúa Trình Làm Việc</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Số Nhân Viên</th>
                            <th scope="col">Phòng Ban Làm Việc</th>
                            <th scope="col">Chức Vụ Làm Việc</th>
                            <th scope="col">Ngày Bắt Đầu Làm Việc</th>
                            <th scope="col">Ngày Kết Thúc</th>
                            <th scope="col">Trạng Thái</th>
                            <th scope="col">Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listWorkingProcess.map((workingProcessItem, workingProcessIndex) => {
                            return (
                                <tr key={`tax-item-${workingProcessIndex}`}>
                                    <th scope="row">{workingProcessIndex + 1}</th>
                                    <td>{workingProcessItem?.maNV}</td>
                                    <td>{workingProcessItem?.idPhongBan?.tenPhongBan}</td>
                                    <td>{workingProcessItem?.idChucVu?.tenChucVu}</td>
                                    <td>{workingProcessItem?.ngayVao}</td>
                                    <td>{workingProcessItem?.ngayRa}</td>
                                    <td>{workingProcessItem?.trangThai? "Đang Làm Việc" : "Đã Kết Thúc"}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/manager/updateworkingProcess/${workingProcessItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === specializItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteSpecialize(specializItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== specializItem?.id) {
                                                        setPopoverId(specializItem?.id);
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
                <button className="save-button" onClick={()=>navigate(`/manager/addworkingProcess`)}>
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
