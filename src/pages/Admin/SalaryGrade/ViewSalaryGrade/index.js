import React from "react";
import "./style.css";

export default function ViewSalaryGrade() {
    return (
        <div className="homepage">
            <div className="title">Danh sách bậc lương</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Nhóm Lương</th>
                            <th scope="col">Mã Bậc Lương</th>
                            <th scope="col">Tên Bậc Lương</th>
                            <th scope="col">Khoảng Lương Từ</th>
                            <th scope="col">Khoảng Lương Đến</th>
                            <th scope="col">Sửa</th>
                            <th scope="col">Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>
                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>

                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>

                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>

                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">5</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>

                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td>GV1</td>
                            <td>GVK1</td>
                            <td>Lương giáo viên khá loại 1</td>
                            <td>7000000</td>
                            <td>10000000</td>

                            <td>
                                <img src="/home/update-icon.svg" />
                            </td>
                            <td>
                                <img src="/home/delete-icon.svg" />
                            </td>
                        </tr>
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
                <button className="save-button">
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm Mới</span>
                </button>
            </div>
        </div>
    );
}
