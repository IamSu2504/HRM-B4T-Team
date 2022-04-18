import React from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";

export default function AddSalaryGrade() {
    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Chỉnh Sửa Thông Tin Bậc Lương</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value="1"
                        type="text"
                        disabled={true}
                        require={true}
                    />

                    <CustomSelectBox
                        title="Nhóm Lương"
                        option={["GV1", "GV2", "GV3", "NV1", "NV2", "NV3", "QL"]}
                        require={true}
                    />

                    <CustomSelectBox
                        title="Nhóm Lương"
                        option={["GVK1", "GVK2", "GVK3", "GVT1", "GVT2", "GVT3", "GVG1", "GVG2", "GVG3", "NVL1", "NVL2", "NVL3", "NVP1", "NVP2", "NVT1", "NVT2", "PGD", "GD"]}
                        require={true}
                    />
                    <CustomInputField
                        title="Tên Bậc Lương"
                        value=""
                        type="text"
                        disabled={false}
                        require={true}
                    />
                    <CustomInputField
                        title="Khoảng Lương Từ"
                        value=""
                        type="text"
                        disabled={false}
                        require={true}
                    />
        
                    <CustomInputField
                        title="Khoảng Lương Đến"
                        type="text"
                        value=""
                        disabled={false}
                        require={true}
                    />
                    
                </div>

            </div>
            <div>
                <button className="save-button">
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm</span>
                </button>
            </div>
        </div>
    );
}
