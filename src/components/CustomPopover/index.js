import React from "react";
import { Popover } from "react-tiny-popover";

export default function CustomPopover(props) {
  const { open, onClose, handleSubmit, noti } = props;
  return (
    <Popover
      isOpen={open}
      positions={['top', 'left']}
      onClickOutside={onClose}
      content={
        <div
          style={{
            background: "#ebf7fa",
            padding: "10px",
            marginBottom: "50px",
            marginLeft: '-150px',
            width: "220px",
            borderRadius: "8px",
            border: "gray 0.5px solid",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {noti ? noti : 'Bạn có chắc chắn muốn xóa không?'}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                padding: "5px 20px",
                border: "#1976D2 1px solid",
                color: "#1976D2",
              }}
              onClick={handleSubmit}
            >
              Đồng ý
            </button>
            <button
              style={{ padding: "5px 20px", border: "gray 1px solid" }}
              onClick={onClose}
            >
              Huỷ
            </button>
          </div>
        </div>
      }
    >
      {props.children}
    </Popover>
  );
}
