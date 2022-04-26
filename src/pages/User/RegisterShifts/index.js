import React from "react";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import "./style.css";

export default function RegisterShifts() {
    return (
        <div className="register-shifts-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Đăng kí ca làm</div>
                </div>
            </div>
            <div className="row fied-data-row">
                <div>
                    <div className="title-sub">Nhập thông tin đăng kí</div>
                    <CustomSelectBox
                        title="Ca làm: "
                        option={["Ca 1", "Ca 2", "Ca 3", "Ca 4", "Ca 5", "Ca 6", "Ca 7"]}
                        require={true}
                    />
                    <CustomSelectBox
                        title="Phòng học: "
                        option={["Phòng 101", "Phòng 102", "Phòng 103", "Phòng 104", "Phòng 201", "Phòng 202", "Phòng 203", "Phòng 204"]}
                        require={true}
                    />
                    <CustomInputField
                        title="Ngày:"
                        type="date"
                        disabled={false}
                        require={true}
                    />
                    <div id="success">
                        <div class="alert alert-success">
                            <strong>Hợp lệ!</strong> Bạn có thể đăng kí ca làm này.
                        </div>
                    </div>
                    <div id="fail">
                        <div class="alert alert-danger">
                            <strong>Không hợp lệ!</strong> Bạn không thể đăng kí ca làm này.
                        </div>
                    </div>
                    <button type="button" class="btn btn-success">Kiểm tra</button>
                    <button type="button" class="btn btn-primary">Đăng kí</button>
                </div>
                <div>
                    <div className="title-sub">Danh sách đã đăng kí</div>
                    <div>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Ca làm</th>
                                <th>Phòng học</th>
                                <th>Ngày</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td>Phòng 102</td>
                                <td>1/4/2022</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2</td>
                                <td>Phòng 104</td>
                                <td>2/4/2022</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>4</td>
                                <td>Phòng 202</td>
                                <td>2/4/2022</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2</td>
                                <td>Phòng 101</td>
                                <td>3/4/2022</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>2</td>
                                <td>Phòng 104</td>
                                <td>4/4/2022</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}