import React, { useState, useEffect } from "react";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import { useNavigate } from "react-router-dom";
import UserAPI from "../../../api/user";
import CustomPopover from "../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LeaveRequest() {

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
    <div>
      {/* Đăng kí */}
      <div className="homepage">
        <div className="title">Đăng kí nghỉ</div>
        <div className="request">
          <div className="title-sub">Nhập thông tin</div>
          <CustomSelectBox
            title="Hình thức nghỉ: "
            option={["Đẻ"]}
            require={true}
          />
          <CustomInputField
            title="Lý do:"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomSelectBox
            title="Ca: "
            option={["Phòng 204"]}
            require={true}
          />
          <CustomInputField
            title="Ngày:"
            type="date"
            disabled={false}
            require={true}
          />
          <button type="button" class="btn btn-primary">Send request</button>
        </div>
      </div>

      {/* Danh sách */}
      <div className="homepage">

        <div className="title">List of request</div>
        <div className="table-frame">
          <table class="table table-bordered">
            <thead>
              <tr className="head">
                <th scope="col">No.</th>
                <th scope="col">Type of leave</th>
                <th scope="col">Reason</th>
                <th scope="col">Approveder</th>
                <th scope="col">Shift</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
              {/* ****************** Ví dụ ***********************/}
              <tr>
                <td>1</td>
                <td>Nghỉ ốm</td>
                <td>Covid</td>
                <td>La Ngọc Tín</td>
                <td>Ca 1</td>
                <td>12/5/2022</td>
                <td className="active-status">
                  <div className="accept">Đã xét duyệt</div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nghỉ đẻ</td>
                <td>Đẻ</td>
                <td>La Ngọc Tín</td>
                <td>Ca 1</td>
                <td>12/7/2022</td>
                <td className="active-status">
                  <div className="wait">Chờ xét duyệt</div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nghỉ đẻ</td>
                <td>Đẻ</td>
                <td>La Ngọc Tín</td>
                <td>Ca 1</td>
                <td>12/7/2022</td>
                <td className="active-status">
                  <div className="reject">Không xét duyệt</div>
                </td>
              </tr>
              {/* *****************************************/}
            </thead>
            <tbody>
              {listUser.map((userItem, userIndex) => {
                return (
                  <tr key={`user-item-${userIndex}`}>
                    <th scope="row">{userIndex + 1}</th>
                    <td>{userItem?.id}</td>
                    <td>{userItem?.gioiTinh}</td>
                    <td>{userItem?.ngaySinh}</td>
                    <td>{userItem?.soDienThoai}</td>
                    <td className="active-status">
                      <div className="active">Hoạt động</div>
                    </td>
                    <td>
                      <div onClick={() => navigate(`#`)}>
                        <img src="/home/watch-icon.svg" />
                      </div>
                    </td>
                    <td>
                      <div onClick={() => navigate(`#`)}>
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
    </div>
  );
}
