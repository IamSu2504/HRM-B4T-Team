import React, {useState} from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HolidayAPI from "../../../../api/holiday";

export default function AddHoliday() {
    const [holidayDetail, setHolidayDetail] = useState({ngay: '', tenNgayLe: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleCreate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {ngay, tenNgayLe} = holidayDetail
    
            if ( !ngay.trim().length ||  !tenNgayLe.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await HolidayAPI.addNewHoliday({...holidayDetail})
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
                    <div className="title">Thêm Thông Tin Ngày Nghỉ Lễ</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Ngày *:"
                        value={holidayDetail?.ngay || ''}
                        type="date"
                        handleChange={(event) => {
                            setHolidayDetail({...holidayDetail, ngay: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Tên Ngày Lễ *:"
                        value={holidayDetail?.tenNgayLe || ''}
                        type="text"
                        handleChange={(event) => {
                            setHolidayDetail({...holidayDetail, tenNgayLe: event.target.value})
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
