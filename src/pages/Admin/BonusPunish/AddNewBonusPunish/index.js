import React from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";

export default function AddBonusPunish() {
    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Contract Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
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
                        title="Category"
                        value=""
                        type="text"
                        disabled={false}
                        require={true}
                    />
                    <CustomInputField
                        title="Title"
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
                    <span class="text">Add</span>
                </button>
            </div>
        </div>
    );
}
