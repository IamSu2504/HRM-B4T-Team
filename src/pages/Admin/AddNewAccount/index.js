import React from "react";
import CustomInput from "./components/CusomInput";
import StatisticalAccount from "./components/StatisticalAccount";
import "./style.css";

export default function AddNewAccount() {
  return (
    <div className="admin-page-add-account">
      <div className="list-statistical">
        <StatisticalAccount
          imageLink="/admin/all-account.svg"
          rightBgColor="#00C0EF"
          title="All Account"
          data={50}
        />

        <StatisticalAccount
          imageLink="/admin/active-account.svg"
          rightBgColor="#20CF46"
          title="Account Working"
          data={50}
        />

        <StatisticalAccount
          imageLink="/admin/new-account.svg"
          rightBgColor="#F7D317"
          title="New Member"
          data={50}
        />
      </div>

      <div className="add-account-frame">
        <div className="title">Thêm Tài Khoản</div>
        <div className="input-field-frame">
          <CustomInput placeHolder="ID" />
        </div>
        <div className="input-field-frame">
          <CustomInput placeHolder="Mã số nhân viên" />
        </div>
        <div className="input-field-frame">
          <CustomInput placeHolder="Tên đăng nhập" />
        </div>
        <div className="input-field-frame">
          <CustomInput placeHolder="Mật khẩu" />
        </div>
        <div className="button-frame">
          <button>Tạo Tài Khoản</button>
        </div>
      </div>
    </div>
  );
}
