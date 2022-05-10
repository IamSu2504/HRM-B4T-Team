import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ManagerRewardDisciplineAPI from "../../../../api/Manager/rewardDiscipline";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewDiscipline() {
    const [listDiscipline, setListDiscipline] = useState([])

    const navigate = useNavigate()

    const getAllDiscipline = async() => {
        const DisciplineRes = await ManagerRewardDisciplineAPI.getAllDiscipline()
        if ( DisciplineRes?.status === 200 ){
            setListDiscipline(DisciplineRes?.data)
        }
    }

    useEffect(() => {
        getAllDiscipline()
    }, [])

    return (
        <div className="homepage">
            <div className="title">Danh sách Kỉ Luật</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Nhân Viên</th>
                            <th scope="col">Tên Nhân Viên</th>
                            <th scope="col">Phân Loại</th>
                            <th scope="col">Lý Do</th>
                            <th scope="col">Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDiscipline.map((disciplineItem, DisciplineIndex) => {
                            return (
                                <tr key={`tax-item-${DisciplineIndex}`}>
                                    <th scope="row">{DisciplineIndex + 1}</th>
                                    <td>{disciplineItem?.user?.id}</td>
                                    <td>{disciplineItem?.user?.tenNv}</td>
                                    <td>{disciplineItem?.phanLoai?.danhMuc}</td>
                                    <td>{disciplineItem?.lyDo}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/manager/updatediscipline/${disciplineItem?.id}`)}>
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
                <button className="save-button" onClick={()=>navigate(`/manager/adddiscipline`)}>
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
