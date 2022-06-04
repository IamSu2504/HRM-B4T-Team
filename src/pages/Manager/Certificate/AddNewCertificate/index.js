import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerCertificateAPI from "../../../../api/Manager/certificate";
import CertificateAPI from "../../../../api/certificate";

import { useParams, useNavigate } from "react-router-dom";


export default function AddCertificate() {
    const [certificateDetail, setCertificateDetail] = useState({ certificateID: '1', ngayCap: '', noiCap: '', maNV: '', diemSo: '' })
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const navigate = useNavigate()

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log('>>>>>', certificateDetail)
            certificateDetail.maNV = maNv
            const { certificateID, ngayCap, noiCap, maNV, diemSo } = certificateDetail

            if (!certificateID.trim().length || !ngayCap.trim().length || !noiCap.trim().length || !diemSo.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else {
                setIsSubmit(true)

                const addRes = await ManagerCertificateAPI.addNewManagerCertificate({ ...certificateDetail })
                if (addRes?.status === 200) {
                    navigate(`/manager/addeduLevel/${maNv}`)
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

    const [listCertificate, setListCertificate] = useState([])

    const getAllCertificate = async () => {
        const certificateRes = await CertificateAPI.getAll()
        if (certificateRes?.status === 200) {
            setListCertificate(certificateRes?.data)
        }
    }

    useEffect(() => {
        getAllCertificate()
    }, [])



    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Information of Certificate</div>
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
                        title="Certificate"
                        value={certificateDetail.certificateID || 1}
                        option={listCertificate.map((certificateItem) => {
                            return (
                                { label: certificateItem.loaiChungChi, value: certificateItem.id }
                            )
                        })}
                        require={true}
                        handleChange={(event) => {
                            setCertificateDetail({ ...certificateDetail, certificateID: event.currentTarget.value })
                        }}
                    />

                    <CustomInputField
                        title="Effective date"
                        require={true}
                        type="date"
                        handleChange={(event) => {
                            setCertificateDetail({ ...certificateDetail, ngayCap: event.target.value })

                        }}
                    />
                    <CustomInputField
                        title="Place"
                        require={true}
                        type="text"
                        handleChange={(event) => {

                            setCertificateDetail({ ...certificateDetail, noiCap: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title="Grades"
                        require={true}
                        type="text"
                        disabled={false}
                        handleChange={(event) => {
                            setCertificateDetail({ ...certificateDetail, diemSo: event.target.value })

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
