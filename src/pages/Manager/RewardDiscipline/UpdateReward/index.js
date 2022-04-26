import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManagerRewardDisciplineAPI from "../../../../api/Manager/rewardDiscipline";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline"
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateShift() {
    const [listReward, setListReward] = useState([])

    const getAllReward = async () => {
        const rewardRes = await RewardDisciplineAPI.getAllReward()
        if (rewardRes?.status === 200) {
            setListReward(rewardRes?.data)
        }
    }

    useEffect(() => {
        getAllReward()
    }, [])


    const [rewardDisciplineDetail, setRewardDisciplineDetail] = useState({ phanLoaiID: '', lyDo: '', maNv: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { rewardDisciplineId } = useParams()

    const getRewardDetail = async () => {
        if (rewardDisciplineId) {
            const rewardRes = await ManagerRewardDisciplineAPI.getRewardById(rewardDisciplineId)
            if (rewardRes?.status === 200) {
                setRewardDisciplineDetail(rewardRes?.data)
            }
        }
    }

    useEffect(() => {
        getRewardDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { phanLoaiID, lyDo, maNv } = rewardDisciplineDetail
            if (!phanLoaiID.trim().length || !lyDo.trim().length || !maNv.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)
                console.log(rewardDisciplineDetail)
                const updateRes = await ManagerRewardDisciplineAPI.updateRewardDiscipline({ id: rewardDisciplineId, ...rewardDisciplineDetail })
                if (updateRes?.status === 200) {
                    toast.success(updateRes?.data)
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
                    <div className="title">Chỉnh Sửa Thông Tin Khen Thưởng </div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Phân Loại"
                        option={listReward.map((rewardItem) => {
                            return (
                                { label: rewardItem.danhMuc, value: rewardItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, phanLoaiID: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Lý Do *:"
                        value={rewardDisciplineDetail?.lyDo || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, lyDo: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Mã Số Nhân Viên *:"
                        value={rewardDisciplineDetail?.user?.id || ''}
                        type="text"
              
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, maNv: rewardDisciplineDetail?.user?.id })
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
