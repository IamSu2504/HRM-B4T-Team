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
            <div className="title">List of Discipline</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/manager/adddiscipline`)}>
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
                            <th scope="col">Employee code</th>
                            <th scope="col">Employee name</th>
                            <th scope="col">Type of Discipline</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Edit</th>
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
 


            <ToastContainer />
        </div>
    );
}
