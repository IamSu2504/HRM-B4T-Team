import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function UpdateRewardDiscipline() {
    const [rewardDisciplineDetail, setRewardDisciplineDetail] = useState({ danhMuc: '', tieuDe: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const { rewardDisciplineId } = useParams()

    const getRewardDisciplineDetail = async () => {
        if (rewardDisciplineId) {

            const rewardDisciplineRes = await RewardDisciplineAPI.getRewardDisciplineById(rewardDisciplineId)
            if (rewardDisciplineRes?.status === 200) {
                setRewardDisciplineDetail(rewardDisciplineRes?.data)
            }
        }
    }

    useEffect(() => {
        getRewardDisciplineDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { danhMuc, tieuDe } = rewardDisciplineDetail

            if (!danhMuc.trim().length || !tieuDe.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await RewardDisciplineAPI.updateRewardDiscipline({ id: rewardDisciplineId, ...rewardDisciplineDetail })
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
                    <div className="title">Edit Information of Reward and Disciplinary</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={rewardDisciplineId}
                        type="text"
                        disabled={true}
                    />

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
                <button className="save-button" disabled={isSubmit} onClick={() => handleUpdate()}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Save</span>
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
