import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClassRoomAPI from "../../../../api/classRoom";

export default function AddClassRoom() {
    const [classRoomDetail, setClassRoomDetail] = useState({maPhongHoc: '', tenPhongHoc: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maPhongHoc, tenPhongHoc} = classRoomDetail
    
            if ( !maPhongHoc.trim().length ||  !tenPhongHoc.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await ClassRoomAPI.addNewClassRoom({...classRoomDetail})
                if ( updateRes?.status === 200 ){
                    toast.success('Thêm mới thông tin thành công')
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
                    <div className="title">Add Classroom Information</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank
</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Classroom code"
                        require={true}
                        value={classRoomDetail?.maPhongHoc || ''}
                        type="text"
                        handleChange={(event) => {
                            setClassRoomDetail({...classRoomDetail, maPhongHoc: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Classroom name"
                        require={true}
                        value={classRoomDetail?.tenPhongHoc || ''}
                        type="text"
                        handleChange={(event) => {
                            setClassRoomDetail({...classRoomDetail, tenPhongHoc: event.target.value})
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
