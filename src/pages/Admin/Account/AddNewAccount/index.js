import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountAPI from "../../../../api/account";
import RoleAPI from "../../../../api/role";

export default function AddAccount() {
    const [accountDetail, setAccountDetail] = useState({ username: '', password: '', maNv: '', roleID: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { username, password, maNv, roleID } = accountDetail

            if (!username.trim().length || !password.trim().length || !maNv.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const updateRes = await AccountAPI.addNewAccount({ ...accountDetail })
                if (updateRes?.status === 200) {
                    toast.success('Thêm mới tài khoản thành công')
                }
            }
        } catch (error) {
            if (error.response) {
                setSubmitError({ status: true, error: error.response.data })
            }
        } finally {
            setIsSubmit(false)
        }
    }

    const [listRole, setListRole] = useState([])

    const getAllRole = async() => {
        const roleRes = await RoleAPI.getAll()
        if ( roleRes?.status === 200 ){
            setListRole(roleRes?.data)
        }
    }

    useEffect(() => {
        getAllRole()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Thêm Thông Tin Tài Khoản</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Tên Đăng Nhập *:"
                        value={accountDetail?.username || ''}
                        type="text"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, username: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Mật Khẩu *:"
                        value={accountDetail?.password || ''}
                        type="password"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, password: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Mã Nhân Viên *:"
                        value={accountDetail?.maNv || ''}
                        type="text"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, maNv: event.target.value })
                        }}
                    />
                    <CustomSelectBox
                        title="Quyền Hạn :"
                        option = {listRole.map((roleItem) =>{
                            return(
                                {label: roleItem.tenRole, value: roleItem.id}
                            )
                        })}
                        require={true}
                        value={accountDetail?.roleID || 1}
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, roleID: event.currentTarget.value})
                        }}
                    />
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
