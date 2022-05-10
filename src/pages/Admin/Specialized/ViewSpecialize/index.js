import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpecializeAPI from "../../../../api/specialize";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewSpecialize() {
    const [listSpecialize, setListSpecialize] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllSpecialize = async () => {
        const specializeRes = await SpecializeAPI.getAll()
        if (specializeRes?.status === 200) {
            setListSpecialize(specializeRes?.data)
        }
    }

    useEffect(() => {
        getAllSpecialize()
    }, [])

    const deleteSpecialize = async (specializeId) => {
        try {
            const deleteRes = await SpecializeAPI.deleteSpecialize(specializeId)

            if (deleteRes?.status === 200) {
                toast('Xóa thành công')
                getAllSpecialize()
            }
        } catch (error) {
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Specialize</div>
            <div className="table-frame">

                <div>
                    <button className="save-button" onClick={() => navigate(`/admin/addspecialize`)}>
                        <span class="image">
                            <img src="/home/save-icon.svg" />
                        </span>
                        <span class="text">Add</span>
                    </button>
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
<<<<<<< HEAD
                            <th scope="col">STT</th>
                            <th scope="col">Mã Chuyên Môn</th>
                            <th scope="col">Chuyên Môn</th>
                            <th scope="col">Sửa</th>
                            {/* <th scope="col">Xoá</th> */}
=======
                            <th scope="col">No.</th>
                            <th scope="col">Specialize code</th>
                            <th scope="col">Specialize name</th>
                            <th scope="col">Edit</th>
>>>>>>> 80678713916747c943fac48661764b7116a0d064
                        </tr>
                    </thead>
                    <tbody>
                        {listSpecialize.map((specializItem, specializIndex) => {
                            return (
                                <tr key={`tax-item-${specializIndex}`}>
                                    <th scope="row">{specializIndex + 1}</th>
                                    <td>{specializItem?.maChuyenMon}</td>
                                    <td>{specializItem?.chuyenMon}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updatespecialize/${specializItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
<<<<<<< HEAD
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === specializItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteSpecialize(specializItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== specializItem?.id) {
                                                        setPopoverId(specializItem?.id);
                                                    } else {
                                                        setPopoverId("");
                                                    }
                                                }}
                                            >
                                                <img src="/home/delete-icon.svg" />
                                            </div>
                                        </CustomPopover>
                                    </td> */}
=======
>>>>>>> 80678713916747c943fac48661764b7116a0d064
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
