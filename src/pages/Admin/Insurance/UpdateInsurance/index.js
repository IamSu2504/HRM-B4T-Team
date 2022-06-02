import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import InsuranceAPI from "../../../../api/insurance";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateInsurance() {
    const [insuranceDetail, setInsuranceDetail] = useState({maBH: '', tenBH: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {insuranceId} = useParams()

    const getInsuranceDetail = async() => {
        if(insuranceId){
            const insuranceRes = await InsuranceAPI.getInsuranceById(insuranceId)
            if ( insuranceRes?.status === 200){
                setInsuranceDetail(insuranceRes?.data)
            }
        }      
    }

    useEffect(() => {
        getInsuranceDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maBH, tenBH} = insuranceDetail
    
            if ( !maBH.trim().length ||  !tenBH.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await InsuranceAPI.updateInsurance({id: insuranceId, ...insuranceDetail})
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
                    <div className="title">Edit Information of Insurance</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={insuranceId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Insurance code"
                        require={true}
                        value={insuranceDetail?.maBH || ''}
                        type="text"
                        handleChange={(event) => {
                            setInsuranceDetail({...insuranceDetail, maBH: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Insurance name"
                        require={true}
                        value={insuranceDetail?.tenBH || ''}
                        type="text"
                        handleChange={(event) => {
                            setInsuranceDetail({...insuranceDetail, tenBH: event.target.value})
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
