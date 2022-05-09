import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShiftAPI from "../../../../api/shift";

export default function AddShift() {
    const [shiftDetail, setShiftDetail] = useState({tenCa: '', gioBatDau: '', gioKetThuc: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {tenCa, gioBatDau, gioKetThuc} = shiftDetail
    
            if ( !tenCa.trim().length ||  !gioBatDau.trim().length || !gioKetThuc.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await ShiftAPI.addNewShift({...shiftDetail})
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
                    <div className="title">Thêm Thông Tin Ca Làm</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Tên Ca Làm *:"
                        value={shiftDetail?.tenCa || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({...shiftDetail, tenCa: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Giờ Bắt Đầu *:"
                        value={shiftDetail?.gioBatDau || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({...shiftDetail, gioBatDau: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Giờ Kết Thúc *:"
                        value={shiftDetail?.gioKetThuc || ''}
                        type="text"
                        handleChange={(event) => {
                            setShiftDetail({...shiftDetail, gioKetThuc: event.target.value})
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
                    <span class="text">Thêm</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
