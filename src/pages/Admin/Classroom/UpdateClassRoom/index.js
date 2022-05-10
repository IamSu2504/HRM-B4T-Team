import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ClassRoomAPI from "../../../../api/classRoom";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateClassRoom() {
    const [classRoomDetail, setClassRoomDetail] = useState({maPhongHoc: '', tenPhongHoc: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {classRoomId} = useParams()

    const getClassDetail = async() => {
        if(classRoomId){
            const classRoomRes = await ClassRoomAPI.getClassRoomById(classRoomId)
            if ( classRoomRes?.status === 200){
                setClassRoomDetail(classRoomRes?.data)
            }
        }      
    }

    useEffect(() => {
        getClassDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {maPhongHoc, tenPhongHoc} = classRoomDetail
    
            if ( !maPhongHoc.trim().length ||  !tenPhongHoc.trim().length){
                setSubmitError({status: true, error: 'Thông tin không được bỏ trống'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await ClassRoomAPI.updateClassRoom({id: classRoomId, ...classRoomDetail})
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
                    <div className="title">Chỉnh Sửa Thông Tin Phòng Học</div>
                    <div className="title-sub">Những ô có dấu * không được để trống</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={classRoomId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Mã Phòng Học *:"
                        value={classRoomDetail?.maPhongHoc || ''}
                        type="text"
                        handleChange={(event) => {
                            setClassRoomDetail({...classRoomDetail, maPhongHoc: event.target.value})
                        }}
                    />
                    <CustomInputField
                        title="Tên Phòng Học *:"
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
