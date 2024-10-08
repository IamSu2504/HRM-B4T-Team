import React, { useState } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RewardDisciplineAPI from "../../../../api/rewardDiscipline";
import { useNavigate } from "react-router-dom";


export default function AddRewardDiscipline() {
    const [rewardDisciplineDetail, setRewardDisciplineDetail] = useState({ danhMuc: '', tieuDe: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { danhMuc, tieuDe } = rewardDisciplineDetail

            if (!danhMuc.trim().length || !tieuDe.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await RewardDisciplineAPI.addNewRewardDiscipline({ ...rewardDisciplineDetail })
                if (updateRes?.status === 200) {
                    toast.success('Add new successful information')
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
                    <div className="title">Add Information of Reward and Disciplinary</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Category"
                        require={true}
                        value={rewardDisciplineDetail?.danhMuc || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, danhMuc: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Title"
                        require={true}
                        value={rewardDisciplineDetail?.tieuDe || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, tieuDe: event.target.value })
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
                <button className="save-button" disabled={isSubmit} onClick={() => navigate(`/admin/viewrewardDiscipline`)}>
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
