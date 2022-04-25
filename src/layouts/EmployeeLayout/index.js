import React, { useEffect, useState } from "react";
import "./style.css";
import { Popover } from "react-tiny-popover";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function EmployeeLayout(props) {
    const [visibleInfoPopover, setVisibleInfoPopover] = useState(false);
    let navigate = useNavigate();

    return (
        <div className="employee-page-layout">
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
                                            <div onClick={() => {
                                                navigate(`/admin/viewuser/${localStorage.getItem('maNv')}`);
                                            }}>Thông tin tài khoản</div>
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
                                            <img src="/menu/user.svg" alt="user-avatar" />
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
                                    <img src="/menu/user.svg" alt="user-avatar" />
                                </div>
                                <div className="right">
                                    <div className="name">{localStorage.getItem('name')}</div>
                                    <div className="active">
                                        <img src="/menu/active.svg" />
                                        Nhân Viên
                                    </div>
                                </div>
                            </div>

                            <div className="search-input">
                                <div className="input-icon">
                                    <img src="/home/search-icon.png" alt="login-img" />
                                </div>
                                <input placeholder="Tìm kiếm" />
                            </div>

                            <hr className="user-info-hr" />
                            <div className="text-sub">Quản lí thông tin</div>
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
                                                    <div className="content2">Thông tin hợp đồng</div>
                                                </div>
                                                <div className="content3">
                                                    <img src="/menu/down-arrow.svg" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseOne"
                                        className="collapse show"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div onClick={() => navigate(`/employee/viewcontract/${localStorage.getItem('maNv')}`)}>
                                                <img src="/menu/list-icon.svg" />
                                                <span style={{ marginLeft: '15px' }}>Hợp đồng lao động</span>
                                            </div>

                                        </div>
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
                                                    <div className="content2">Chấm công</div>
                                                </div>
                                                <div className="content3">
                                                    <img src="/menu/down-arrow.svg" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        className="collapse show"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <div onClick={() => navigate('/employee/timeKeeping')}>
                                                <img src="/menu/list-icon.svg" />
                                                <span style={{ marginLeft: '15px' }}>Chấm công</span>
                                            </div>
                                            <div>
                                                <img src="/menu/list-icon.svg" />
                                                <span style={{ marginLeft: '15px' }}>Nghỉ phép</span>
                                            </div>
                                            <div onClick={() => navigate('/admin/registerShift')}>
                                                <img src="/menu/list-icon.svg" />
                                                <span style={{ marginLeft: '15px' }}>Đăng Kí Ca Làm</span>
                                            </div>
                                        </div>
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
