import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NationAPI from "../../../../api/nation";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewNation() {
    const [listNation, setListNation] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllNation = async () => {
        const nationRes = await NationAPI.getAll()
        if (nationRes?.status === 200) {
            setListNation(nationRes?.data)
        }
    }

    useEffect(() => {
        getAllNation()
    }, [])

    const deleteNation = async (nationId) => {
        try {
            const deleteRes = await NationAPI.deleteNation(nationId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllNation()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Nationality</div>
            <div className="table-frame">
                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addnation`)}>
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
                            <th scope="col">Nationality</th>
                            <th scope="col">Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listNation.map((nationItem, nationIndex) => {
                            return (
                                <tr key={`tax-item-${nationIndex}`}>
                                    <th scope="row">{nationIndex + 1}</th>
                                    <td>{nationItem?.quocTich}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updatenation/${nationItem?.id}`)}>
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
