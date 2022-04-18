import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "../../../api/user";
import CustomPopover from "../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewAllEmployee() {

  const [listUser, setListUser] = useState([])
  const [popoverId, setPopoverId] = useState("");

  const navigate = useNavigate()

  const getAllUser = async () => {
    const userRes = await UserAPI.getAll()
    if (userRes?.status === 200) {
      setListUser(userRes?.data)
    }
  }

  useEffect(() => {
    getAllUser()
  }, [])

  const deleteUser = async (userId) => {
    try {
      const deleteRes = await UserAPI.deleteUser(userId)

      if (deleteRes?.status === 200) {
        toast('Xóa thành công')
        getAllUser()
      }
    } catch (error) {
      if (error.response) {
        toast(error.response.data)
      }
    }
  }

  return (
    <div className="homepage">
      <div className="title">Danh sách nhân viên</div>
      <div className="table-frame">
        <table class="table table-bordered">
          <thead>
            <tr className="head">
              <th scope="col">STT</th>
              <th scope="col">Mã nhân viên</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên nhân viên</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Ngày sinh</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Trang thái</th>
              <th scope="col">Xem</th>
              <th scope="col">Sửa</th>
              <th scope="col">Xoá</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((userItem, userIndex) => {
              return (
                <tr key={`user-item-${userIndex}`}>
                  <th scope="row">{userIndex + 1}</th>
                  <td>{userItem?.id}</td>
                  <td>
                    <img src="/home/user-avatar.svg" />
                  </td>
                  <td>{userItem?.tenNv}</td>
                  <td>{userItem?.gioiTinh}</td>
                  <td>{userItem?.ngaySinh}</td>
                  <td>{userItem?.soDienThoai}</td>
                  <td className="active-status">
                      <div className="active">Hoạt động</div> 
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/viewuser`)}>
                      <img src="/home/watch-icon.svg" />
                    </div>
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/updateuser`)}>
                      <img src="/home/update-icon.svg" />
                    </div>

                  </td>
                  <td>
                    <img src="/home/delete-icon.svg" />
                  </td>
                </tr>

              )
            })}

          </tbody>
        </table>
      </div>
      {/* <div className="pagination-frame">
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
      </div> */}
    </div>
  );
}
