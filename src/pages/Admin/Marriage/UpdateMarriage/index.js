import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MarriageAPI from "../../../../api/marriage";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateMarriage() {
    const [marriageDetail, setMarriageDetail] = useState({tinhTrang: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {marriageId} = useParams()

    const getMarriageDetail = async() => {
        if(marriageId){
            const marriageRes = await MarriageAPI.getMarriageById(marriageId)
            if ( marriageRes?.status === 200){
                setMarriageDetail(marriageRes?.data)
            }
        }      
    }

    useEffect(() => {
        getMarriageDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {tinhTrang} = marriageDetail
    
            if ( !tinhTrang.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await MarriageAPI.UpdateMarriage({id: marriageId, ...marriageDetail})
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
                    <div className="title">Edit Information of Marital Status</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={marriageId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Marital Status"
                        require={true}
                        value={marriageDetail?.tinhTrang || ''}
                        type="text"
                        handleChange={(event) => {
                            setMarriageDetail({...marriageDetail, tinhTrang: event.target.value})
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
