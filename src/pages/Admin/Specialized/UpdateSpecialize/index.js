import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpecializeAPI from "../../../../api/specialize";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateSpecialize() {
    const [specializeDetail, setSpecializeDetail] = useState({ maChuyenMon: '', chuyenMon: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { specializeId } = useParams()

    const getSpecializeDetail = async () => {
        if (specializeId) {
            const specializeRes = await SpecializeAPI.getSpecializeById(specializeId)
            if (specializeRes?.status === 200) {
                setSpecializeDetail(specializeRes?.data)
            }
        }
    }

    useEffect(() => {
        getSpecializeDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { maChuyenMon, chuyenMon } = specializeDetail

            if (!maChuyenMon.trim().length || !chuyenMon.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const updateRes = await SpecializeAPI.updateSpecialize({ id: specializeId, ...specializeDetail })
                if (updateRes?.status === 200) {
                    toast.success('Cập nhật thông tin thành công')
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
                    <div className="title">Chỉnh Sửa Thông Tin Chuyên Môn</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={specializeId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Mã Chuyên Môn *:"
                        value={specializeDetail?.maChuyenMon || ''}
                        type="text"
                        handleChange={(event) => {
                            setSpecializeDetail({ ...specializeDetail, maChuyenMon: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Chuyên Môn *:"
                        value={specializeDetail?.chuyenMon || ''}
                        type="text"
                        handleChange={(event) => {
                            setSpecializeDetail({ ...specializeDetail, chuyenMon: event.target.value })
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
                    <span class="text">Lưu thông tin</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
