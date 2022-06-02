import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NationAPI from "../../../../api/nation";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateNation() {
    const [nationDetail, setNationDetail] = useState({ quocTich: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { nationId } = useParams()

    const getNationDetail = async () => {
        if (nationId) {
            const nationIdRes = await NationAPI.getNationById(nationId)
            if (nationIdRes?.status === 200) {
                setNationDetail(nationIdRes?.data)
            }
        }
    }

    useEffect(() => {
        getNationDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { quocTich } = nationDetail

            if (!quocTich.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await NationAPI.updateNation({ id: nationId, ...nationDetail })
                if (updateRes?.status === 200) {
                    toast.success('Successfully updated')
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
                    <div className="title">Edit Information of Nationality</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={nationId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Nationality"
                        require={true}
                        value={nationDetail?.quocTich || ''}
                        type="text"
                        handleChange={(event) => {
                            setNationDetail({ ...nationDetail, quocTich: event.target.value })
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
            <ToastContainer />
        </div>
    );
}
