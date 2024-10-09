import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManagerRewardDisciplineAPI from "../../../../api/Manager/rewardDiscipline";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline"
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateDiscipline() {
    const [listDiscipline, setListDiscipline] = useState([])
    const [rewardDisciplineDetail, setRewardDisciplineDetail] = useState({ phanLoaiID: '', lyDo: '', maNv: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { rewardDisciplineId } = useParams()

    const getAllDiscipline = async () => {
        const disciplineRes = await RewardDisciplineAPI.getAllDiscipline()
        if (disciplineRes?.status === 200) {
            setListDiscipline(disciplineRes?.data)
        }
    }

    useEffect(() => {
        getAllDiscipline()
    }, [])

    const getDisciplineDetail = async () => {
        if (rewardDisciplineId) {
            const rewardRes = await ManagerRewardDisciplineAPI.getDisciplineById(rewardDisciplineId)
            if (rewardRes?.status === 200) {
                setRewardDisciplineDetail({ phanLoaiID: rewardRes?.data?.phanLoai?.id, lyDo: rewardRes?.data?.lyDo || '', maNv: rewardRes?.data?.user?.id })
            }
        }
    }

    useEffect(() => {
        getDisciplineDetail()
    }, [])

    const handleUpdate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { phanLoaiID, lyDo, maNv } = rewardDisciplineDetail
            if (!phanLoaiID.toString()?.trim()?.length || !lyDo.toString()?.trim()?.length || !maNv.toString()?.trim()?.length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const updateRes = await ManagerRewardDisciplineAPI.updateRewardDiscipline({ id: rewardDisciplineId, ...rewardDisciplineDetail })
                if (updateRes?.status === 200) {
                    toast.success(updateRes?.data)
                }
            }
        } catch (error) {
            if (error.response) {
                setSubmitError({ status: true, error: error.response.data })
            }
        }
        finally {
            setIsSubmit(false)
        }
    }
    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Edit Information of Discipline</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Type of Discipline"
                        value={rewardDisciplineDetail?.phanLoaiID}
                        option={listDiscipline.map((disciplineItem) => {
                            return (
                                { label: disciplineItem.danhMuc, value: disciplineItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, phanLoaiID: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Reason"
                        require={true}
                        value={rewardDisciplineDetail?.lyDo || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, lyDo: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        value={rewardDisciplineDetail?.maNv || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({ ...rewardDisciplineDetail, maNv: event.target.value })
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
