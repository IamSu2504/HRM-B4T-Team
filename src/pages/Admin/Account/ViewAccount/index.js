import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountAPI from "../../../../api/account";

export default function ViewAccount() {
    const [listAccount, setListAccount] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllAccount = async () => {
        const accountRes = await AccountAPI.getAll()
        if (accountRes?.status === 200) {
            setListAccount(accountRes?.data)
        }
    }

    useEffect(() => {
        getAllAccount()
    }, [])


    return (
        <div className="homepage">
            <div className="title">Danh sách tài khoản</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Số Nhân Viên</th>
                            <th scope="col">Tên Đăng Nhập</th>
                            <th scope="col">Quyền Hạn</th>
                            <th scope="col">Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listAccount.map((accountItem, accountIndex) => {
                            return (
                                <tr key={`tax-item-${accountIndex}`}>
                                    <th scope="row">{accountIndex + 1}</th>
                                    <td>{accountItem?.maNv}</td>
                                    <td>{accountItem?.username}</td>

                                    <td>{accountItem?.role?.tenRole}</td>
                                    <td>
                                        <div onClick={() => navigate(`/admin/updateaccount/${accountItem?.id}`)}>
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

            <div>
                <button className="save-button" onClick={() => navigate(`/admin/addaccount`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm Mới</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
