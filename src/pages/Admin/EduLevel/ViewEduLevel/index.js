import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EduLevelAPI from "../../../../api/eduLevel";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewEduLevel() {
    const [listEduLevel, setListEduLevel] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllEduLevel = async () => {
        const eduLevelRes = await EduLevelAPI.getAll()
        if (eduLevelRes?.status === 200) {
            setListEduLevel(eduLevelRes?.data)
        }
    }

    useEffect(() => {
        getAllEduLevel()
    }, [])

    const deleteEduLevel = async (eduLevelId) => {
        try {
            const deleteRes = await EduLevelAPI.deleteEduLevel(eduLevelId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllEduLevel()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Education Level</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addeduLevel`)}>
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
                            <th scope="col">Level</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listEduLevel.map((eduLevelItem, eduLevelIndex) => {
                            return (
                                <tr key={`tax-item-${eduLevelIndex}`}>
                                    <th scope="row">{eduLevelIndex + 1}</th>
                                    <td>{eduLevelItem?.trinhDo}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updateeduLevel/${eduLevelItem?.id}`)}>
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
