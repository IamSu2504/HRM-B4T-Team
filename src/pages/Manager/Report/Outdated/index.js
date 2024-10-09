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
            <div>
                <button className="save-button" onClick={()=>navigate(`/manager/addreward`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Employee code</th>
                            <th scope="col">Employee name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Citizen ID</th>
                            <th scope="col">Passport</th>
                            <th scope="col">Effective date</th>
                            <th scope="col">Expiration date</th>
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
 

            
            <ToastContainer />
        </div>
    );
}
