import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import DegreeAPI from "../../../../api/degree";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateDegree() {
    const [ degreeDetail, setDegreeDetail] = useState({loaiBangCap: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {degreeId} = useParams()

    const getDegreeDetail = async() => {
        if(degreeId){
            const degreeIdRes = await DegreeAPI.getDegreeById(degreeId)
            if ( degreeIdRes?.status === 200){
                setDegreeDetail(degreeIdRes?.data)
            }
        }      
    }

    useEffect(() => {
        getDegreeDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {loaiBangCap} = degreeDetail
    
            if ( !loaiBangCap.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await DegreeAPI.updateDegree({id: degreeId, ...degreeDetail})
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
                    <div className="title">Chỉnh Sửa Thông Tin Bằng Cấp</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={degreeId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Loại Bằng Cấp *:"
                        value={degreeDetail?.loaiBangCap || ''}
                        type="text"
                        handleChange={(event) => {
                            setDegreeDetail({...degreeDetail, loaiBangCap: event.target.value})
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
