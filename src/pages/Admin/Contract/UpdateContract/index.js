import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ContractAPI from "../../../../api/contract";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateContract() {
    const [contractDetail, setContractDetail] = useState({maLoaiHopDong: '', tenLoaiHopDong: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {contractId} = useParams()

    const getContractDetail = async() => {
        if(contractId){
            const contractRes = await ContractAPI.getContractById(contractId)
            if ( contractRes?.status === 200){
                setContractDetail(contractRes?.data)
            }
        }      
    }

    useEffect(() => {
        getContractDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maLoaiHopDong, tenLoaiHopDong} = contractDetail
    
            if ( !maLoaiHopDong.trim().length ||  !tenLoaiHopDong.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await ContractAPI.updateContract({id: contractId, ...contractDetail})
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
                    <div className="title">Edit Contract Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={contractId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Classification code"
                        require={true}
                        value={contractDetail?.maLoaiHopDong || ''}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({...contractDetail, maLoaiHopDong: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Contract type name"
                        require={true}
                        value={contractDetail?.tenLoaiHopDong || ''}
                        type="text"
                        handleChange={(event) => {
                            setContractDetail({...contractDetail, tenLoaiHopDong: event.target.value})
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
