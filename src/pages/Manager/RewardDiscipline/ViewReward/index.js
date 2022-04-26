import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerRewardDisciplineAPI from "../../../../api/Manager/rewardDiscipline";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewReward() {
    const [listReward, setListReward] = useState([])

    const navigate = useNavigate()

    const getAllReward = async() => {
        const RewardRes = await ManagerRewardDisciplineAPI.getAllReward()
        if ( RewardRes?.status === 200 ){
            setListReward(RewardRes?.data)
        }
    }

    useEffect(() => {
        getAllReward()
    }, [])

    return (
        <div className="homepage">
            <div className="title">Danh sách Khen Thưởng</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Nhân Viên</th>
                            <th scope="col">Tên Nhân Viên</th>
                            <th scope="col">Chức Vụ</th>
                            <th scope="col">Phân Loại</th>
                            <th scope="col">Lý Do</th>
                            <th scope="col">Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listReward.map((rewardItem, RewardIndex) => {
                            return (
                                <tr key={`tax-item-${RewardIndex}`}>
                                    <th scope="row">{RewardIndex + 1}</th>
                                    <td>{rewardItem?.user?.id}</td>
                                    <td>{rewardItem?.user?.tenNv}</td>
                                    <td>{rewardItem?.user?.chucVu?.tenChucVu}</td>
                                    <td>{rewardItem?.phanLoai?.danhMuc}</td>
                                    <td>{rewardItem?.lyDo}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/manager/updatereward/${rewardItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
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
