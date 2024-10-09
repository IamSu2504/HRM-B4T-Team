import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EduLevelAPI from "../../../../api/eduLevel";

export default function AddEduLevel() {
    const [eduLevelDetail, setEduLevelDetail] = useState({trinhDo: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {trinhDo} = eduLevelDetail
    
            if ( !trinhDo.trim().length ){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await EduLevelAPI.addNewEduLevel({...eduLevelDetail})
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
                    <div className="title">Add Information of Education Level</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Education Leve"
                        require={true}
                        value={eduLevelDetail?.trinhDo || ''}
                        type="text"
                        handleChange={(event) => {
                            setEduLevelDetail({...eduLevelDetail, trinhDo: event.target.value})
                        }}
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
