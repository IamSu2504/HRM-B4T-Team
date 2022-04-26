import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerRewardDisciplineAPI from "../../../../api/Manager/rewardDiscipline";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline"


export default function AddDiscipline() {
    const [listDiscipline, setListDiscipline] = useState([])

    const getAllDiscipline = async () => {
        const disciplineRes = await RewardDisciplineAPI.getAllDiscipline()
        if (disciplineRes?.status === 200) {
            setListDiscipline(disciplineRes?.data)
        }
    }

    useEffect(() => {
        getAllDiscipline()
    }, [])


    const [rewardDisciplineDetail, setrewardDisciplineDetail] = useState({ phanLoaiID: '', lyDo: '', maNv: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            const { phanLoaiID, lyDo, maNv } = rewardDisciplineDetail

            if (!phanLoaiID.trim().length || !lyDo.trim().length || !maNv.trim().length) {
                setSubmitError({ status: true, error: 'Thông tin không được bỏ trống' })
            } else {
                setIsSubmit(true)

                const updateRes = await ManagerRewardDisciplineAPI.addNewRewardDiscipline({ ...rewardDisciplineDetail })
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
                    <div className="title">Thêm Thông Tin Kỉ Luật </div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomSelectBox
                        title="Phân Loại"
                        option={listDiscipline.map((disciplineItem) => {
                            return (
                                { label: disciplineItem.danhMuc, value: disciplineItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setrewardDisciplineDetail({ ...rewardDisciplineDetail, phanLoaiID: event.currentTarget.value })
                        }}
                    />
                    <CustomInputField
                        title="Lý Do *:"
                        type="text"
                        handleChange={(event) => {
                            setrewardDisciplineDetail({ ...rewardDisciplineDetail, lyDo: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Mã Số Nhân Viên *:"
                        type="text"
                        handleChange={(event) => {
                            setrewardDisciplineDetail({ ...rewardDisciplineDetail, maNv: event.target.value })
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
