import React from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";

export default function AddBonusPunish() {
    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Thêm Thông Tin Thuế</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value=""
                        type="text"
                        disabled={true}
                        require={true}
                    />

                    <CustomInputField
                        title="Danh Mục"
                        value=""
                        type="text"
                        disabled={false}
                        require={true}
                    />
                    <CustomInputField
                        title="Tiêu Đề"
                        value=""
                        type="text"
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
