import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import EduLevelAPI from "../../../../api/eduLevel";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateEduLevel() {
    const [eduLevelDetail, setEduLevelDetail] = useState({trinhDo: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {eduLevelId} = useParams()

    const getEduLevelDetail = async() => {
        if(eduLevelId){
            const eduLevelRes = await EduLevelAPI.getEduLevelById(eduLevelId)
            if ( eduLevelRes?.status === 200){
                setEduLevelDetail(eduLevelRes?.data)
            }
        }      
    }

    useEffect(() => {
        getEduLevelDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {trinhDo} = eduLevelDetail
    
            if ( !trinhDo.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await EduLevelAPI.updateEduLevel({id: eduLevelId, ...eduLevelDetail})
                if ( updateRes?.status === 200 ){
                    toast.success('Cập nhật thông tin thành công')
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
                    <div className="title">Edit Information of Education Level</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                    
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={eduLevelId}
                        type="text"
                        disabled={true}
                    />

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
