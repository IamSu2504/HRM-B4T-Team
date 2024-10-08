import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountAPI from "../../../../api/account";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoleAPI from "../../../../api/role";

export default function UpdateAccount() {
    const [accountDetail, setAccountDetail] = useState({ username: '', password: '', maNv: '', roleID: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { accountId } = useParams()
    const navigate = useNavigate()
    const getAccountDetail = async () => {
        if (accountId) {
            const accountRes = await AccountAPI.getAccountById(accountId)
            if (accountRes?.status === 200) {
                setAccountDetail(accountRes?.data)
            }
        }
    }

    useEffect(() => {
        getAccountDetail()
    }, [])

    const [listRole, setListRole] = useState([])

    const getAllRole = async () => {
        const roleRes = await RoleAPI.getAll()
        if (roleRes?.status === 200) {
            setListRole(roleRes?.data)
        }
    }

    useEffect(() => {
        getAllRole()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { username, password, maNv, roleID } = accountDetail

            if (!username.trim().length || !password.trim().length || !maNv.trim().length) {
                setSubmitError({ status: true, error: 'Information cannot be left blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await AccountAPI.updateAccount({ id: accountId, ...accountDetail })
                if (updateRes?.status === 200) {
                    toast.success('New account successfully added')
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

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Edit Account Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={accountId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Username"
                        value={accountDetail?.username || ''}
                        type="text"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, username: event.target.value })
                        }}
                        require={true}
                    />
                    <CustomInputField
                        title="Password"
                        value={accountDetail?.password || ''}
                        type="password"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, password: event.target.value })
                        }}
                        require={true}
                    />
                    <CustomInputField
                        title="Employee code"
                        value={accountDetail?.maNv || ''}
                        type="text"
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, maNv: event.target.value })
                        }}
                        require={true}
                    />
                    <CustomSelectBox
                        title="Role" 
                        option={listRole.map((roleItem) => {
                            return (
                                { label: roleItem.tenRole, value: roleItem.id }
                            )
                        })}
                        require={true}
                        value={accountDetail?.roleID || 1}
                        handleChange={(event) => {
                            setAccountDetail({ ...accountDetail, roleID: event.currentTarget.value })
                        }}
                    />

                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={() => handleUpdate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Save</span>
                </button>
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={() => navigate(`/admin/viewaccount`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">List Account</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
