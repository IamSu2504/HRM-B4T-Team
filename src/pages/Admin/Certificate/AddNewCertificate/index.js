import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CertificateAPI from "../../../../api/certificate";

export default function AddCertificate() {
    const [certificateDetail, setCertificateDetail] = useState({maChungChi: '', loaiChungChi: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maChungChi, loaiChungChi} = certificateDetail
    
            if ( !maChungChi.trim().length ||  !loaiChungChi.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await CertificateAPI.addNewCertificate({...certificateDetail})
                if ( updateRes?.status === 200 ){
                    toast.success('Add new successful information')
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
                    <div className="title">Add Certificate Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Certificate code"
                        value={certificateDetail?.maChungChi || ''}
                        type="text"
                        handleChange={(event) => {
                            setCertificateDetail({...certificateDetail, maChungChi: event.target.value})
                        }}
                        require={true}
                    />
                    <CustomInputField
                        title="Certificate name"
                        value={certificateDetail?.loaiChungChi || ''}
                        type="text"
                        handleChange={(event) => {
                            setCertificateDetail({...certificateDetail, loaiChungChi: event.target.value})
                        }}
                        require={true}
                    />
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div>
                <button className="save-button" disabled={isSubmit} onClick={()=>handleCreate()}>
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
