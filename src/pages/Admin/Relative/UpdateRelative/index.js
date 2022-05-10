import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import RelativeAPI from "../../../../api/relative";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateRelative() {
    const [relativeDetail, setRelativeDetail] = useState({quanHe: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {relativeId} = useParams()

    const getRelativeDetail = async() => {
        if(relativeId){
            const relativeRes = await RelativeAPI.getRelativeById(relativeId)
            if ( relativeRes?.status === 200){
                setRelativeDetail(relativeRes?.data)
            }
        }      
    }

    useEffect(() => {
        getRelativeDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {quanHe} = relativeDetail
    
            if ( !quanHe.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await RelativeAPI.updateRelative({id: relativeId, ...relativeDetail})
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
                    <div className="title">Edit Information of Relationship</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={relativeId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Relationship"
                        require={true}
                        value={relativeDetail?.quanHe || ''}
                        type="text"
                        handleChange={(event) => {
                            setRelativeDetail({...relativeDetail, quanHe: event.target.value})
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
