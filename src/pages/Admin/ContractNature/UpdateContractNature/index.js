import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ContractNatureAPI from "../../../../api/contractNature";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateContractNature() {
    const [contractNatureDetail, setContractNatureDetail] = useState({tinhChatHopDong: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {contractNatureId} = useParams()

    const getContractNatureDetail = async() => {
        if(contractNatureId){
            const contractNatureRes = await ContractNatureAPI.getContractNatureById(contractNatureId)
            if ( contractNatureRes?.status === 200){
                setContractNatureDetail(contractNatureRes?.data)
            }
        }      
    }

    useEffect(() => {
        getContractNatureDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {tinhChatHopDong} = contractNatureDetail
    
            if ( !tinhChatHopDong.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await ContractNatureAPI.updateContractNature({id: contractNatureId, ...contractNatureDetail})
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
                    <div className="title">Edit Information of Contract Nature</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={contractNatureId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Contract nature"
                        require={true}
                        value={contractNatureDetail?.tinhChatHopDong || ''}
                        type="text"
                        handleChange={(event) => {
                            setContractNatureDetail({...contractNatureDetail, tinhChatHopDong: event.target.value})
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
