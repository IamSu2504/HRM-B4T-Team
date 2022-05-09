import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import RewardDisciplineAPI from "../../../../api/rewardDiscipline";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateRewardDiscipline() {
    const [rewardDisciplineDetail, setRewardDisciplineDetail] = useState({danhMuc: '', tieuDe: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {rewardDisciplineId} = useParams()

    const getRewardDisciplineDetail = async() => {
        if(rewardDisciplineId){
            const rewardDisciplineRes = await RewardDisciplineAPI.getRewardDisciplineById(rewardDisciplineId)
            if ( rewardDisciplineRes?.status === 200){
                setRewardDisciplineDetail(rewardDisciplineRes?.data)
            }
        }      
    }

    useEffect(() => {
        getRewardDisciplineDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {danhMuc, tieuDe} = rewardDisciplineDetail
    
            if ( !danhMuc.trim().length ||  !tieuDe.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await RewardDisciplineAPI.updateRewardDiscipline({id: rewardDisciplineId, ...rewardDisciplineDetail})
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
                    <div className="title">Chỉnh Sửa Thông Tin Khen Thưởng Và Kỉ Luật</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={rewardDisciplineId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Danh Mục *:"
                        value={rewardDisciplineDetail?.danhMuc || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({...rewardDisciplineDetail, danhMuc: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Tiêu Đề *:"
                        value={rewardDisciplineDetail?.tieuDe || ''}
                        type="text"
                        handleChange={(event) => {
                            setRewardDisciplineDetail({...rewardDisciplineDetail, tieuDe: event.target.value})
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
