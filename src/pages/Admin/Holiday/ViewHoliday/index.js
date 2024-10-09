import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HolidayAPI from "../../../../api/holiday";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewHoliday() {
    const [listHoliday, setListHoliday] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllHoliday = async() => {
        const holidayRes = await HolidayAPI.getAll()
        if ( holidayRes?.status === 200 ){
            setListHoliday(holidayRes?.data)
        }
    }

    useEffect(() => {
        getAllHoliday()
    }, [])

    const deleteHoliday = async(holidayId) => {
        try{
            const deleteRes = await HolidayAPI.deleteHoliday(holidayId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllHoliday()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Holiday</div>
            <div className="table-frame">
                
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addholiday`)}>
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
                            <th scope="col">Date</th>
                            <th scope="col">Holiday name</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listHoliday.map((holidayItem, holidayIndex) => {
                            return (
                                <tr key={`tax-item-${holidayIndex}`}>
                                    <th scope="row">{holidayIndex + 1}</th>
                                    <td>{holidayItem?.ngay}</td>
                                    <td>{holidayItem?.tenNgayLe}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updateholiday/${holidayItem?.id}`)}>
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
