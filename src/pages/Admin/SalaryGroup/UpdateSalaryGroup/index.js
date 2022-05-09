import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SalaryGroupAPI from "../../../../api/salaryGroup";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateSalaryGroup() {
    const [salaryGroupDetail, setSalaryGroupDetail] = useState({maNhomLuong: '', tenNhomLuong: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {salaryGroupId} = useParams()

    const getSalaryGroupDetail = async() => {
        if(salaryGroupId){
            const salaryGroupRes = await SalaryGroupAPI.getSalaryGroupById(salaryGroupId)
            if ( salaryGroupRes?.status === 200){
                setSalaryGroupDetail(salaryGroupRes?.data)
            }
        }      
    }

    useEffect(() => {
        getSalaryGroupDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maNhomLuong, tenNhomLuong} = salaryGroupDetail
    
            if ( !maNhomLuong.trim().length ||  !tenNhomLuong.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await SalaryGroupAPI.updateSalaryGroup({id: salaryGroupId, ...salaryGroupDetail})
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
                    <div className="title">Chỉnh Sửa Thông Tin Nhóm Lương</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={salaryGroupId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Mã Nhóm Lương *:"
                        value={salaryGroupDetail?.maNhomLuong || ''}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGroupDetail({...salaryGroupDetail, maNhomLuong: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Tên Nhóm Lương *:"
                        value={salaryGroupDetail?.tenNhomLuong || ''}
                        type="text"
                        handleChange={(event) => {
                            setSalaryGroupDetail({...salaryGroupDetail, tenNhomLuong: event.target.value})
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
                    <span class="text">Lưu thông tin</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
