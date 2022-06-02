import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TaxAPI from "../../../../api/tax";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateTax() {
    const [taxDetail, setTaxDetail] = useState({maPhanLoai: '', tenLoaiThue: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {taxId} = useParams()

    const getTaxDetail = async() => {
        if(taxId){
            const taxRes = await TaxAPI.getTaxById(taxId)
            if ( taxRes?.status === 200){
                setTaxDetail(taxRes?.data)
            }
        }      
    }

    useEffect(() => {
        getTaxDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maPhanLoai, tenLoaiThue} = taxDetail
    
            if ( !maPhanLoai.trim().length ||  !tenLoaiThue.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await TaxAPI.updateTax({id: taxId, ...taxDetail})
                if ( updateRes?.status === 200 ){
                    toast.success(setIsSubmit.error)
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
                    <div className="title">Edit Information of Tax</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={taxId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                         title="Classification code"
                         require={true}
                        value={taxDetail?.maPhanLoai || ''}
                        type="text"
                        handleChange={(event) => {
                            setTaxDetail({...taxDetail, maPhanLoai: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Type of tax"
                        require={true}
                        value={taxDetail?.tenLoaiThue || ''}
                        type="text"
                        handleChange={(event) => {
                            setTaxDetail({...taxDetail, tenLoaiThue: event.target.value})
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
