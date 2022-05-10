import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ShiftAPI from "../../../../api/shift";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewShift() {
    const [listShift, setListShift] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllShift = async() => {
        const shiftRes = await ShiftAPI.getAll()
        if ( shiftRes?.status === 200 ){
            setListShift(shiftRes?.data)
        }
    }

    useEffect(() => {
        getAllShift()
    }, [])

    const deleteShift = async(shiftId) => {
        try{
            const deleteRes = await ShiftAPI.deleteShift(shiftId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllShift()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Shift</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addshift`)}>
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
                            <th scope="col">Shift name</th>
                            <th scope="col">Start time</th>
                            <th scope="col">End timec</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listShift.map((shiftItem, shiftIndex) => {
                            return (
                                <tr key={`tax-item-${shiftIndex}`}>
                                    <th scope="row">{shiftIndex + 1}</th>
                                    <td>{shiftItem?.tenCa}</td>
                                    <td>{shiftItem?.gioBatDau}</td>
                                    <td>{shiftItem?.gioKetThuc}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updateshift/${shiftItem?.id}`)}>
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
