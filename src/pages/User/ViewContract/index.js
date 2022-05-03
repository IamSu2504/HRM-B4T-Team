import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import employeeContractAndSalaryAPI from "../../../api/employeeContractAndSalary";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ViewContract() {
    const [userContractDetail, setUserContractDetail] = useState([])

    const {maNv} = useParams()
    console.log(">>>>>",maNv)
    const getUserContractDetail = async() => {
        if(maNv){
            const employeeContractRes = await employeeContractAndSalaryAPI.getContract(maNv)
            if ( employeeContractRes?.status === 200){
                setUserContractDetail(employeeContractRes?.data)
            }
        }      
    }

    useEffect(() => {
        getUserContractDetail()
    }, [])



    return (
        <div className="view-contract-page">
            <div className="row">
                <div className="col-12">
                    <div class="title">Hợp đồng</div>
                </div>
            </div>
            <div class="list-contract">
                <div id="contract1">
                    <div data-toggle="collapse" href="#collapse1" aria-expanded="true">
                        <div aria-expanded="true" class="title-list">
                            <h5>Hợp đồng mã</h5>
                            <p>{userContractDetail[0]?.id || ''}</p>
                            {console.log("id",userContractDetail[0]?.id)}
                        </div>
                    </div>
                    <div id="collapse1" data-parent="#contract1" class="collapse">
                        <div class="row fied-data-row">
                            <div>
                                <div class="title-sub">Chi tiết hợp đồng</div>
                                <table>
                                    <tr>
                                        <th>Mã nhân viên:</th>
                                        <td>{userContractDetail[0]?.maNV || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Mã hợp đồng:</th>
                                        <td>{userContractDetail[0]?.loaiHopDong?.maLoaiHopDong || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Tên hợp đồng:</th>
                                        <td>{userContractDetail[0]?.loaiHopDong?.tenLoaiHopDong || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hiệu lực:</th>
                                        <td>{userContractDetail[0]?.ngayHieuLuc || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hết hạn:</th>
                                        <td>{userContractDetail[0]?.ngayHetHan || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng thái:</th>
                                        <td>{userContractDetail[0]?.trangThai ? 'Đang Hoạt Động' : 'Đã Nghỉ Việc'}</td>
                                    </tr>
                                </table>
                            </div>
                            {/* <div>
                                <div class="title-sub">Chi tiết lương</div>
                                <table>
                                    <tr>
                                        <th>Lương cơ bản:</th>
                                        <td>{employeeContractAndSalaryDetail?.luongCoBan || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Bậc lương:</th>
                                        <td>{employeeContractAndSalaryDetail?.idBacLuong?.tenBacLuong || ''}</td>
                                    </tr><tr>
                                        <th>Phụ cấp khác:</th>
                                        <td>{employeeContractAndSalaryDetail?.phuCapKhac || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hiệu lực:</th>
                                        <td>{employeeContractAndSalaryDetail?.ngayHieuLuc || ''}</td></tr>
                                    <tr>
                                        <th>Ngày hết hạn:</th>
                                        <td>{employeeContractAndSalaryDetail?.ngayKetThuc || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Tổng lương:</th>
                                        <td>{employeeContractAndSalaryDetail?.tongLuong || ''}</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng thái:</th>
                                        <td>{employeeContractAndSalaryDetail?.trangThai ? 'Đang Hiệu Lực' : 'Hết Hiệu Lực'}</td>
                                    </tr>
                                    <tr>
                                        <th>Ghi chú:</th>
                                        <td>{employeeContractAndSalaryDetail?.ghiChu || ''}</td>
                                    </tr>
                                </table>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="list-contract">
                <div id="contract2">
                    <div data-toggle="collapse" href="#collapse2" aria-expanded="true">
                        <div aria-expanded="true" class="title-list">
                            <h5>Hợp đồng mã</h5>
                            <p>HĐ-B4T0002</p>
                        </div>
                    </div>
                    <div id="collapse2" data-parent="#contract2" class="collapse">
                        <div class="row fied-data-row">
                            <div>
                                <div class="title-sub">Chi tiết hợp đồng</div>
                                <table>
                                    <tr>
                                        <th>Mã nhân viên:</th>
                                        <td>NV0002</td>
                                    </tr>
                                    <tr>
                                        <th>Mã hợp đồng:</th>
                                        <td>HĐ-B4T0002</td>
                                    </tr>
                                    <tr>
                                        <th>Loại hợp đồng:</th>
                                        <td>Hợp đồng lao động không xác định thời hạn</td>
                                    </tr>
                                    <tr>
                                        <th>Chức vụ:</th>
                                        <td>Giám đốc</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hiệu lực:</th>
                                        <td>01/01/2022</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hết hạn:</th>
                                        <td>Vô hạn</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng thái:</th>
                                        <td>Đang hiệu lực</td>
                                    </tr>
                                    <tr>
                                        <th>Ghi chú:</th>
                                        <td>Không</td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <div class="title-sub">Chi tiết lương</div>
                                <table>
                                    <tr>
                                        <th>Lương cơ bản:</th>
                                        <td>3.500.000</td>
                                    </tr>
                                    <tr>
                                        <th>Bậc lương:</th>
                                        <td>1</td>
                                    </tr><tr>
                                        <th>Phụ cấp khác:</th>
                                        <td>200.000</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày hiệu lực:</th>
                                        <td>01/01/2022</td></tr>
                                    <tr>
                                        <th>Ngày hết hạn:</th>
                                        <td>01/01/2025</td>
                                    </tr>
                                    <tr>
                                        <th>Tổng lương:</th>
                                        <td>3.700.000</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng thái:</th><td>Đang hiệu lực</td>
                                    </tr>
                                    <tr>
                                        <th>Ghi chú:</th>
                                        <td>Không</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}