import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "../../../api/user";
import CustomPopover from "../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TablePagination from '@mui/material/TablePagination';
import ReactHtmlTableToExcel from "react-html-table-to-excel";


export default function ViewAllUser() {
  const [listUser, setListUser] = useState([])
  const [popoverId, setPopoverId] = useState("");
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [allUser, setAllUser] = useState([])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getAllUser = async () => {
    const userRes = await UserAPI.getAll()
    if (userRes?.status === 200) {
      const userData = userRes?.data || []
      const spliceUserData = [...userData].splice(page * rowsPerPage, (page + 1) * rowsPerPage)
      setListUser(spliceUserData)
      setAllUser(userData)
    }
  }

  useEffect(() => {
    getAllUser()
  }, [])

  useEffect(() => {
    const userData = [...allUser]
    const spliceUserData = userData.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    setListUser(spliceUserData)
  }, [page, rowsPerPage])

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


{/* search */}

      {/* <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
        <span class="input-group-text">Bộ lọc</span>
          <select class="input-group-text" id="sel1" name="sellist1">
            <option>Mã nhân viên</option>
            <option>Tên nhân viên</option>
          </select>
        </div>
        <input type="text" class="form-control" placeholder="Tìm kiếm" />
        <div class="input-group-append">
          <button class="btn btn-success" type="submit">Go</button>
        </div>
      </div> */}
{/* ******** */}

      <div className="table-frame">
        <table class="table table-bordered" >
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
            </tr>
          </thead>
          <tbody>
            {listUser.map((userItem, userIndex) => {
              return (
                <tr key={`user-item-${userIndex}`}>
                  <th scope="row">{userIndex + 1}</th>
                  <td>{userItem?.id}</td>
                  <td>
                    <img src={`http://localhost:8080/user/${userItem?.id}/image`} alt="avatar" width={220} height={180} />
                  </td>
                  <td>{userItem?.tenNv}</td>
                  <td>{userItem?.gioiTinh ? 'Nam' : 'Nữ'}</td>
                  <td>{userItem?.ngaySinh}</td>
                  <td>{userItem?.soDienThoai}</td>
                  <td>
                    <div>{userItem?.trangThai == 'Đang làm việc' ? <a className="jobactive">Đang làm việc</a> : <a className="jobdeactive">Đã Nghỉ Việc</a>}</div>
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/viewuser/${userItem.id}`)}>
                      <img src="/home/watch-icon.svg" />
                    </div>
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/updateuser/${userItem.id}`)}>
                      <img src="/home/update-icon.svg" />
                    </div>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
        <table   class="table2" id="userTable" >
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
       
            </tr>
          </thead>
          <tbody>
            {allUser.map((userItem, userIndex) => {
              return (
                <tr key={`user-item-${userIndex}`}>
                  <th scope="row">{userIndex + 1}</th>
                  <td>{userItem?.id}</td>
                  <td>
                    <img src={`http://localhost:8080/user/${userItem?.id}/image`} alt="avatar" width={220} height={180} />
                  </td>
                  <td>{userItem?.tenNv}</td>
                  <td>{userItem?.gioiTinh ? 'Nam' : 'Nữ'}</td>
                  <td>{userItem?.ngaySinh}</td>
                  <td>{userItem?.soDienThoai}</td>
                  <td>
                    <div>{userItem?.trangThai == 'Đang làm việc' ? <a className="jobactive">Đang làm việc</a> : <a className="jobdeactive">Đã Nghỉ Việc</a>}</div>
                  </td>
                  {/* <td>
                    <div>{userItem?.trangThaiLaoDong ? <a className="jobactive">Đang Hoạt Động</a> : <a className="jobdeactive">Đã Nghỉ Việc</a>}</div>
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/viewuser/${userItem.id}`)}>
                      <img src="/home/watch-icon.svg" />
                    </div>
                  </td>
                  <td>
                    <div onClick={() => navigate(`/manager/updateuser/${userItem.id}`)}>
                      <img src="/home/update-icon.svg" />
                    </div>
                  </td> */}
                </tr>
              )
            })}

          </tbody>
        </table>
        <ReactHtmlTableToExcel
          className="btn btn-info"
          table="userTable"
          filename="User Excel file"
          sheet="Sheet"
          buttonText="Export to Excel"
        />
      </div>

      <TablePagination
        component="div"
        count={allUser.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Người dùng trong trang'
      />
    </div>
  );
}
