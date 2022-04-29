import React, { useEffect, useState } from "react";
import "./style.css";
import { Popover } from "react-tiny-popover";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function ManagerLayout(props) {
  const [visibleInfoPopover, setVisibleInfoPopover] = useState(false);
  let navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="manager-page-layout">
      <div className="container-fluid fixed-top py-3 top-menu">
        <div className="row collapse show no-gutters d-flex h-100 position-relative">
          <div className="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
            <div ><img style={{ height: '38px', width: '200px' }} src="../../b4tLogo.png"></img></div>
          </div>
          <div className="col px-3 px-md-0">
            <div className="header-frame">
              <div className="drawer-icon">
                <a
                  data-toggle="collapse"
                  href="#"
                  data-target=".collapse"
                  role="button"
                  className="p-1"
                >
                  <img src="/menu/menu-drawer.svg" />
                </a>
              </div>
              <div className="user-info">
                <div className="noti-icon">
                  <img src="/menu/noti-icon.svg" />
                </div>
                <Popover
                  isOpen={visibleInfoPopover}
                  positions="bottom"
                  onClickOutside={() => setVisibleInfoPopover(false)}
                  content={
                    <div className="header-popover-content">
                      <div onClick={() => navigate(`/manager/viewuser/${localStorage.getItem('maNv')}`)}>Thông tin tài khoản</div>
                      <hr />
                      <div onClick={() => {
                        localStorage.clear()
                        navigate("/login");
                      }}>Đăng xuất</div>
                    </div>
                  }
                >
                  <div
                    className="user-info-frame"
                    onClick={() => {
                      setVisibleInfoPopover(!visibleInfoPopover);
                    }}
                  >
                    <div className="user-avatar">
                      <img src={`http://localhost:8080/user/${localStorage.getItem('maNv')}/image`} alt="avatar" />
                    </div>
                    <div className="user-name">{localStorage.getItem('name')}</div>
                  </div>
                </Popover>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 h-100">
        <div className="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
          <div className="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
            <div className="navbar-dark bg-dark position-fixed h-100 w-sidebar left-bar">
              <div className="user-info">
                <div className="left">
                  <img src={`http://localhost:8080/user/${localStorage.getItem('maNv')}/image`} alt="avatar" />
                </div>
                <div className="right">
                  <div className="name">{localStorage.getItem('name')}</div>
                  <div className="active">
                    <img src="/menu/active.svg" /> Quản Lý
                  </div>
                </div>
              </div>
              <hr className="user-info-hr" />
              <div className="text-sub">Quản lí nhân sự</div>
              <br />
              <div id="accordion" className="menu-accordion menu-accordion1">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseOne"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/employer.svg" />
                          </div>
                          <div className="content2">Nhân sự</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div onClick={() => navigate(`/manager/viewallUser`)}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Danh sách nhân viên</span>
                      </div>
                      <div onClick={() => navigate(`/manager/adduser`)}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Thêm mới nhân viên</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sub">Quản lí danh mục</div>
              <br />
              <div id="accordion1" className="menu-accordion menu-accordion2">
                <div className="card">
                  <div className="card-header">
                    <a className="card-link" data-toggle="collapse">
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/baocao.svg" />
                          </div>
                          <div className="content2">Báo cáo</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a className="card-link" data-toggle="collapse">
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/hopdong.svg" />
                          </div>
                          <div className="content2">Hợp đồng</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                    // href="#collapseOne"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/lichlamviec.svg" />
                          </div>
                          <div className="content2">Lịch làm việc</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                    // href="#collapseOne"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/luong.svg" />
                          </div>
                          <div className="content2">Lương</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                    // href="#collapseOne"
                    >
                      <div className="card-head-content" onClick={() => navigate(`/manager/viewallInsurance`)}>
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/baohiem.svg" />
                          </div>
                          <div className="content2">Bảo hiểm</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseTwo"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/employer.svg" />
                          </div>
                          <div className="content2">Khen Thưởng Kỉ Luật</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <div onClick={() => navigate('/manager/viewallreward')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Khen Thưởng</span>
                      </div>
                      <div onClick={() => navigate('/manager/viewalldiscipline')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Kỉ Luật</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                    // href="#collapseOne"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/chamcong.svg" />
                          </div>
                          <div className="content2">Chấm công</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-3 content">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
