import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpecializeAPI from "../../../../api/specialize";

export default function AddSpecialize() {
    const [specializeDetail, setSpecializeDetail] = useState({maChuyenMon: '', chuyenMon: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maChuyenMon, chuyenMon} = specializeDetail
    
            if ( !maChuyenMon.trim().length ||  !chuyenMon.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await SpecializeAPI.addNewSpecialize({...specializeDetail})
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
                    <div className="title">Add Information of Specialize</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Specialize code"
                        require={true}
                        value={specializeDetail?.maChuyenMon || ''}
                        type="text"
                        handleChange={(event) => {
                            setSpecializeDetail({...specializeDetail, maChuyenMon: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Specialize name"
                        require={true}
                        value={specializeDetail?.chuyenMon || ''}
                        type="text"
                        handleChange={(event) => {
                            setSpecializeDetail({...specializeDetail, chuyenMon: event.target.value})
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
