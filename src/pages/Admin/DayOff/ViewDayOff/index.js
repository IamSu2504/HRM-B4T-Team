import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DayOffAPI from "../../../../api/dayOff";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewDayOff() {
    const [listDayOff, setListDayOff] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllDayOff = async() => {
        const dayOffRes = await DayOffAPI.getAll()
        if ( dayOffRes?.status === 200 ){
            setListDayOff(dayOffRes?.data)
        }
    }

    useEffect(() => {
        getAllDayOff()
    }, [])

    const deleteDayOff = async(dayOffId) => {
        try{
            const deleteRes = await DayOffAPI.deleteDayOff(dayOffId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllDayOff()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Day Off</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/adddayOff`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">No. </th>
                            <th scope="col">Type of day off</th>
                            <th scope="col">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listDayOff.map((dayOffItem, dayOffIndex) => {
                            return (
                                <tr key={`tax-item-${dayOffIndex}`}>
                                    <th scope="row">{dayOffIndex + 1}</th>
                                    <td>{dayOffItem?.loaiNghi}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatedayOff/${dayOffItem?.id}`)}>
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
