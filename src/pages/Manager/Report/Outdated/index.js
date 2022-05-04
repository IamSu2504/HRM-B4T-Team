import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerOutdatedAPI from "../../../../api/Manager/outdated";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewOutdated() {
    const [listOutdated, setListOutdated] = useState([])

    const navigate = useNavigate()

    const getAllOutdated = async() => {
        const outdatedRes = await ManagerOutdatedAPI.getAll()
        if ( outdatedRes?.status === 200 ){
            setListOutdated(outdatedRes?.data)
        }
    }

    useEffect(() => {
        getAllOutdated()
    }, [])

    return (
        <div className="homepage">
            <div className="title">Danh sách Nhân Viên Sắp Hết Hạn</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Mã Nhân Viên</th>
                            <th scope="col">Tên Nhân Viên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Căn Cước Công Dân</th>
                            <th scope="col">Hộ Chiếu</th>
                            <th scope="col">Ngày Hiệu Lực</th>
                            <th scope="col">Ngày Hết Hạn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOutdated.map((outdatedItem, outdatedIndex) => {
                            return (
                                <tr key={`tax-item-${outdatedIndex}`}>
                                    <th scope="row">{outdatedIndex + 1}</th>
                                    <td>{outdatedItem?.image}</td>
                                    <td>{outdatedItem?.maNv}</td>
                                    <td>{outdatedItem?.tenNv}</td>
                                    <td>{outdatedItem?.email}</td>
                                    <td>{outdatedItem?.cccd}</td>
                                    <td>{outdatedItem?.hoChieu}</td>
                                    <td>{outdatedItem?.ngayHieuLuc}</td>
                                    <td>{outdatedItem?.ngayHetHan}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
 

            <div>
                <button className="save-button" onClick={()=>navigate(`/manager/addreward`)}>
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
