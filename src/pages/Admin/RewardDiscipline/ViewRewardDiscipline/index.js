import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewRewardDiscipline() {
    const [listRewardDiscipline, setListRewardDiscipline] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllRewardDiscipline = async () => {
        const rewardDisciplineRes = await RewardDisciplineAPI.getAll()
        if (rewardDisciplineRes?.status === 200) {
            setListRewardDiscipline(rewardDisciplineRes?.data)
        }
    }

    useEffect(() => {
        getAllRewardDiscipline()
    }, [])

    const deleteRewardDiscipline = async (rewardDisciplineId) => {
        try {
            const deleteRes = await RewardDisciplineAPI.deleteRewardDiscipline(rewardDisciplineId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllRewardDiscipline()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Reward and Disciplinary</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addrewardDiscipline`)}>
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
                            <th scope="col">Category</th>
                            {/* <th scope="col">Title</th> */}
                            <th scope="col">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listRewardDiscipline.map((rewardDisciplineItem, rewardDisciplineIndex) => {
                            return (
                                <tr key={`tax-item-${rewardDisciplineIndex}`}>
                                    <th scope="row">{rewardDisciplineIndex + 1}</th>
                                    <td>{rewardDisciplineItem?.danhMuc}</td>
                                    {/* <td>{rewardDisciplineItem?.tieuDe}</td> */}
                                    <td>
                                        <div onClick={() => navigate(`/admin/updaterewardDiscipline/${rewardDisciplineItem?.id}`)}>
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
