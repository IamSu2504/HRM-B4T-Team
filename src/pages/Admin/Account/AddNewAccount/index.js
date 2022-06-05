import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountAPI from "../../../../api/account";
import RoleAPI from "../../../../api/role";

export default function AddAccount() {
    const [accountDetail, setAccountDetail] = useState({ username: '', password: '', maNv: '', roleID: '1' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const [addusername, setAddusername ] = useState([])
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            accountDetail.username = addusername
            const { username, password, maNv, roleID } = accountDetail

            console.log('>>>>>',accountDetail)

            if (!username.toString()?.trim()?.length || !password.toString()?.trim()?.length || !maNv.toString()?.trim()?.length) {
                setSubmitError({ status: true, error: 'Information cannot be left blank' })

            } else {
                setIsSubmit(true)

                const updateRes = await AccountAPI.addNewAccount({ ...accountDetail })
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


    const [listUserNotCreated, setListUserNotCreated] = useState([])

    const getListUserNotCreated = async () => {
        const roleRes = await AccountAPI.getUsernotCreated()
        if (roleRes?.status === 200) {
            setListUserNotCreated(roleRes?.data)
        }
    }

    useEffect(() => {
        getListUserNotCreated()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Account Information</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>

                    <CustomSelectBox
                        title="Employee Code"
                        option={listUserNotCreated.map((userNotCreatedItem) => {
                            return (
                                { label: userNotCreatedItem.id, value: new Array(userNotCreatedItem.id, userNotCreatedItem.email)}
                            )
                        })}
                        require={true}
                        //value={accountDetail?.maNv || ''}
                        handleChange={(event) => {
                            
                            let arr = event.target.value.toString().split(",");

                            console.log('....', arr)
                            setAccountDetail({ ...accountDetail, maNv: arr[0] })
                            setAddusername( arr[1] )
                            
                            
                        }}
                    />

                    <CustomInputField
                        title="Username"
                        value={addusername || ''}
                        type="text"
                        disabled={true}
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
                <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
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
