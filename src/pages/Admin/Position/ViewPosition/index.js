import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PositionAPI from "../../../../api/position";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewPosition() {
    const [listPosition, setListPosition] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllPosition = async () => {
        const positionRes = await PositionAPI.getAll()
        if (positionRes?.status === 200) {
            setListPosition(positionRes?.data)
        }
    }

    useEffect(() => {
        getAllPosition()
    }, [])

    const deletePosition = async (positionId) => {
        try {
            const deleteRes = await PositionAPI.deletePosition(positionId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllPosition()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Position</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addposition`)}>
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
                            <th scope="col">Position code</th>
                            <th scope="col">Position name</th>
                            <th scope="col">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listPosition.map((positionItem, positionIndex) => {
                            return (
                                <tr key={`tax-item-${positionIndex}`}>
                                    <th scope="row">{positionIndex + 1}</th>
                                    <td>{positionItem?.maChucVu}</td>
                                    <td>{positionItem?.tenChucVu}</td>

                                    <td>
                                        <div onClick={() => navigate(`/admin/updateposition/${positionItem?.id}`)}>
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
