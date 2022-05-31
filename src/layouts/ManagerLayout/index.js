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
                      <div onClick={() => navigate(`/manager/viewuser/${localStorage.getItem('maNv')}`)}>Personal information</div>
                      <hr />
                      <div onClick={() => {
                        localStorage.clear()
                        navigate("/login");
                      }}>Log  out</div>
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
                    <img src="/menu/active.svg" /> Manager
                  </div>
                </div>
              </div>
              <hr className="user-info-hr" />
              <div className="text-sub">Human Resource Management</div>
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
                          <div className="content2">Personnel</div>
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
                        <span style={{ marginLeft: '15px' }}>List of employee</span>
                      </div>
                      <div onClick={() => navigate(`/manager/adduser`)}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Add new employee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sub">Manage categories</div>
              <br />
              <div id="accordion1" className="menu-accordion menu-accordion2">
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
                            <img src="/menu/report.svg" />
                          </div>
                          <div className="content2">Report</div>
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
                      <div>
                        <a href="https://app.powerbi.com/groups/me/reports/587e8395-c40c-4405-b452-5a2f230f2329/ReportSection2e579c81c5bd288a8287" style={{color: 'unset', textDecoration: 'unset'}} target='_blank'>
                          <img src="/menu/list-icon.svg" />
                          <span style={{ marginLeft: '15px' }}>
                            Overview
                          </span>
                        </a>  
                      </div>
                      <div>
                        <a href="https://app.powerbi.com/groups/me/reports/587e8395-c40c-4405-b452-5a2f230f2329/ReportSection63438c805d4b6ea33c12" style={{color: 'unset', textDecoration: 'unset'}} target='_blank'>
                          <img src="/menu/list-icon.svg" />
                          <span style={{ marginLeft: '15px' }}>Teacher
                          </span>
                        </a>
                      </div>
                      <div >
                        <a href="https://app.powerbi.com/groups/me/reports/587e8395-c40c-4405-b452-5a2f230f2329/ReportSection227818c02b928ad9c8fa" style={{color: 'unset', textDecoration: 'unset'}} target='_blank'>
                          <img src="/menu/list-icon.svg" />
                          <span style={{ marginLeft: '15px' }}>Employee salary
                          </span>
                        </a>
                      </div>
                      <div onClick={() => navigate('/manager/outdated')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Expiring Employee</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" onClick={() => navigate(`/manager/viewallcontract`)}>
                    <a className="card-link" data-toggle="collapse">
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/hopdong.svg" />
                          </div>
                          <div className="content2">Contract</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                    // href="#collapseOne"
                    >
                      <div className="card-head-content" onClick={() => navigate(`/manager/viewallworkingProcess`)}>
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/lichlamviec.svg" />
                          </div>
                          <div className="content2">Working process</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                {/* <div className="card">
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
                          <div className="content2">Salary</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                {/* <div className="card">
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
                          <div className="content2">Insurance</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseThree"
                    >
                      <div className="card-head-content">
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/reward.svg" />
                          </div>
                          <div className="content2">Rewards and Discipline</div>
                        </div>
                        <div className="content3">
                          <img src="/menu/down-arrow.svg" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <div onClick={() => navigate('/manager/viewallreward')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Rewards</span>
                      </div>
                      <div onClick={() => navigate('/manager/viewalldiscipline')}>
                        <img src="/menu/list-icon.svg" />
                        <span style={{ marginLeft: '15px' }}>Discipline</span>
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
                      <div className="card-head-content" onClick={() => navigate(`/manager/registershifts`)}>
                        <div className="left">
                          <div className="content1">
                            <img src="/menu/chamcong.svg" />
                          </div>
                          <div className="content2">Register for Shifts</div>
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
