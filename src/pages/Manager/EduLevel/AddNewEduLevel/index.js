import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerEduLevelAPI from "../../../../api/Manager/eduLevel";
import EduLevelAPI from "../../../../api/eduLevel";
import SpecializeAPI from "../../../../api/specialize";
import DegreeAPI from "../../../../api/degree";

import { useParams, useNavigate } from "react-router-dom";


export default function AddEduLevel() {
    const [eduLevelDetail, setEduLevelDetail] = useState({ idChuyenMon: '1', idTrinhDo: '1', idBangCap: '1', tenTruong: '', thoiGianTu: '', thoiGianDen: '', maNV: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const navigate = useNavigate()

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log('>>>>>', eduLevelDetail)
            eduLevelDetail.maNV = maNv
            const { idChuyenMon, idTrinhDo, idBangCap, tenTruong, thoiGianTu, thoiGianDen, maNV } = eduLevelDetail

            if (!idChuyenMon.trim().length || !idTrinhDo.trim().length || !idBangCap.trim().length || !tenTruong.trim().length
                || !thoiGianTu.trim().length || !thoiGianDen.trim().length || !maNV.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagerEduLevelAPI.addNewManagerEduLevel({ ...eduLevelDetail })
                if (addRes?.status === 200) {
                    navigate(`/manager/viewUser/${maNv}`)
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

    const [listSpecialize, setListSpecialize] = useState([])

    const getAllSpecialize = async () => {
        const specializeRes = await SpecializeAPI.getAll()
        if (specializeRes?.status === 200) {
            setListSpecialize(specializeRes?.data)
        }
    }

    useEffect(() => {
        getAllSpecialize()
    }, [])

    const [listEduLevel, setListEduLevel] = useState([])

    const getAllEduLevel = async () => {
        const eduLevelRes = await EduLevelAPI.getAll()
        if (eduLevelRes?.status === 200) {
            setListEduLevel(eduLevelRes?.data)
        }
    }

    useEffect(() => {
        getAllEduLevel()
    }, [])


    const [listDegree, setListDegree] = useState([])

    const getAllDegree = async () => {
        const degreeRes = await DegreeAPI.getAll()
        if (degreeRes?.status === 200) {
            setListDegree(degreeRes?.data)
        }
    }

    useEffect(() => {
        getAllDegree()
    }, [])



    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Information of EduLevel</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        type="text"
                        value={maNv}
                        disabled={true}
                    />
                    <CustomSelectBox
                        title="Specialize"
                        value={eduLevelDetail.idChuyenMon || 1}
                        option={listSpecialize.map((specializeItem) => {
                            return (
                                { label: specializeItem.chuyenMon, value: specializeItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setEduLevelDetail({ ...eduLevelDetail, idChuyenMon: event.currentTarget.value })
                        }}
                    />

                    <CustomSelectBox
                        title="EduLevel"
                        value={eduLevelDetail.idTrinhDo || 1}
                        option={listEduLevel.map((eduLevelItem) => {
                            return (
                                { label: eduLevelItem.trinhDo, value: eduLevelItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setEduLevelDetail({ ...eduLevelDetail, idTrinhDo: event.currentTarget.value })
                        }}
                    />

                    <CustomSelectBox
                        title="Degree"
                        value={eduLevelDetail.idBangCap || 1}
                        option={listDegree.map((degreeItem) => {
                            return (
                                { label: degreeItem.loaiBangCap, value: degreeItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setEduLevelDetail({ ...eduLevelDetail, idBangCap: event.currentTarget.value })
                        }}
                    />

                    <CustomInputField
                        title="University Name"
                        require={true}
                        type="text"
                        handleChange={(event) => {

                            setEduLevelDetail({ ...eduLevelDetail, tenTruong: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="From"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setEduLevelDetail({ ...eduLevelDetail, thoiGianTu: event.target.value })

                        }}
                    />

                    <CustomInputField
                        title="To"
                        require={true}
                        type="text"
                        handleChange={(event) => {
                            setEduLevelDetail({ ...eduLevelDetail, thoiGianDen: event.target.value })

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
            <ToastContainer />
        </div>
    );
}
