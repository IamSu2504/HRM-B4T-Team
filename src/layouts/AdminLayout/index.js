import React, { useEffect, useState } from "react";
import "./style.css";
import { Popover } from "react-tiny-popover";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function AdminLayout(props) {
  const [visibleInfoPopover, setVisibleInfoPopover] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="admin-page-layout">
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
                      <div onClick={() => navigate(`/admin/viewuser/${localStorage.getItem('maNv')}`)}>Personal information</div>
                      <hr />
                      <div onClick={() => {
                        localStorage.clear()
                        navigate("/login");
                      }}>Logout</div>
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
                      {/* <img src="/menu/user.svg" alt="user-avatar" /> */}
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
                    <img src="/menu/active.svg" /> Admin
                  </div>
                </div>
              </div>

              {/* <div className="search-input">
                <div className="input-icon">
                  <img src="/home/search-icon.png" alt="login-img" />
                </div>
                <input placeholder="Tìm kiếm" />
              </div> */}

              <hr className="user-info-hr" />
              <div className="text-sub">Account Management</div>
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
                            <img src="/menu/account.svg" />
                          </div>
                          <div className="content2">Account</div>
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
                      <div onClick={() => navigate('/admin/viewaccount')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>List Account</span>
                      </div>
                      {/* <div onClick={()=>navigate('/admin/forgot')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Quên Mật Khẩu</span>
                      </div> */}
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
                            <img src="/menu/list.svg" />
                          </div>
                          <div className="content2">Categories</div>
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
                      <div onClick={() => navigate('/admin/viewsalarygrade')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Salary grade</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewtax')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Tax</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewshift')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Shifts</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewposition')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Position</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewspecialize')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Specialize</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewrewardDiscipline')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Rewards and Discipline</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewrelative')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Relationship</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewsalaryGroup')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Salary group</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewnation')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Nationality</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewmarriage')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Marital status</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewdegree')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Degree</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewinsurance')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Insurance</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewcertificate')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Certificate</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewcontract')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Contract</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewcontractNature')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Nature of contract</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewclassRoom')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Classroom</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewholiday')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Holiday</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewdayOff')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Day off</span>
                      </div>
                      <div onClick={() => navigate('/admin/viewdepartment')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Department</span>
                      </div>
                      <div onClick={() => navigate('/admin/vieweduLevel')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Academic level</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sub">Information management</div>
              <br />
              <div id="accordion1" className="menu-accordion menu-accordion2">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseaThree"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/hopdong.svg" />
                          </div>
                          <div className="content2">Contract information</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseaThree"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <div>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Labor contract</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseaFour"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/employer.svg" />
                          </div>
                          <div className="content2">Timekeeping</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseaFour"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <div>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Timekeeping</span>
                      </div>
                      <div>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Leave</span>
                      </div>
                      <div onClick={() => navigate('/admin/registerShift')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Register for Shifts</span>
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
