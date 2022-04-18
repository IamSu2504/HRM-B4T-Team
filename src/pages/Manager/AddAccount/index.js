import React from "react";
import CustomInputField from "../../../components/customInputField";
import CustomSelectBox from "../../../components/customSelectbox";
import "./style.css";

export default function AddAccount() {
  return (
    <div className="update-account-page">
      <div className="row">
        <div className="col-12">
          <div className="title">Thêm Nhân Viên</div>
          <div className="title-sub">Những ô có dấu * không được để trống</div>
        </div>
      </div>

      <div className="row avatar-row">
        {/* <div>
          <img src="/home/user-avatar.svg" alt="avatar" />
        </div> */}

        <div>
          <CustomInputField
            title="Mã Số Nhân Viên"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Họ và tên"
            type="text"
            disabled={false}
            require={true}
          />
        </div>
      </div>

      <div className="row fied-data-row">
        <div>
          <CustomInputField
            title="Ảnh 3*4"
            type="file"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Giới tính"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Số điện thoại"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Email"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField title="Skype: " type="text" disabled={false} />
          <CustomInputField
            title="Nơi cấp căn cước công dân"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Hộ chiếu"
            type="text"
            disabled={false}
          />
          <CustomInputField
            title="Ngày cấp hộ chiếu"
            type="date"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Địa chỉ thường trú"
            type="text"
            require={true}
            disabled={false}
          />
          <CustomInputField
            title="Chức vụ hiện tại"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Số ATM"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Ngày nghỉ việc: "
            type="date"
            disabled={false}
          />
          <CustomSelectBox
            title="Tính Chất Hợp Đồng"
            option={["Đang trong thời hạn", "Hết thời hạn"]}
            require={true}
          />

          <CustomSelectBox
            title="ID Quốc Tịch"
            option={["1", "2"]}
            require={true}
          />
        </div>

        <div>
          <CustomInputField
            title="Ngày sinh"
            type="date"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Quốc tịch"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Số điện thoại 2: "
            type="text"
            disabled={false}
          />
          <CustomInputField
            title="Facebook: "
            type="text"
            disabled={false}
          />
          <CustomInputField
            title="Căn cước công dân"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Ngày cấp căn cước"
            type="date"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Ngày hết hạn căn cước"
            type="date"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Nơi cấp hộ chiếu"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Ngày hết hạn hộ chiếu"
            type="date"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Địa chỉ tạm trú"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="ATM ngân hàng"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Trạng thái lao động"
            type="text"
            disabled={false}
            require={true}
          />
          <CustomInputField
            title="Lí do nghỉ: "
            type="text"
            disabled={false}
          />
          <CustomSelectBox
            title="Tình trạng hôn nhân: "
            option={["Độc thân", "Đã kết hôn"]}
            require={true}
          />
        </div>
      </div>
      <div>
        <button className="save-button">
          <span class="image">
            <img src="/home/save-icon.svg" />
          </span>
          <span class="text">Thêm Nhân Viên</span>
        </button>
      </div>
    </div>
  );
}
