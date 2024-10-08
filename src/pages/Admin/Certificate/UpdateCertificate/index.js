import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CertificateAPI from "../../../../api/certificate";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateCertificate() {
    const [certificateDetail, setCertificateDetail] = useState({maChungChi: '', loaiChungChi: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {certificateId} = useParams()

    const getCertificateDetail = async() => {
        if(certificateId){
            const certificateRes = await CertificateAPI.getCertificateById(certificateId)
            if ( certificateRes?.status === 200){
                setCertificateDetail(certificateRes?.data)
            }
        }      
    }

    useEffect(() => {
        getCertificateDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maChungChi, loaiChungChi} = certificateDetail
    
            if ( !maChungChi.trim().length ||  !loaiChungChi.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await CertificateAPI.updateCertificate({id: certificateId, ...certificateDetail})
                if ( updateRes?.status === 200 ){
                    toast.success('Successfully updated')
                }
            }
        }catch(error){
            if (error.response) {
                setSubmitError({status: true, error: error.response.data})
            }
        }finally{
            setIsSubmit(false)
        }      
    }

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Edit Certificate Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={certificateId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Certificate code"
                        require={true}
                        value={certificateDetail?.maChungChi || ''}
                        type="text"
                        handleChange={(event) => {
                            setCertificateDetail({...certificateDetail, maChungChi: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Certificate name"
                        require={true}
                        value={certificateDetail?.loaiChungChi || ''}
                        type="text"
                        handleChange={(event) => {
                            setCertificateDetail({...certificateDetail, loaiChungChi: event.target.value})
                        }}
                    />
                    
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={()=>handleUpdate()}>
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
