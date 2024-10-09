import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import DayOffAPI from "../../../../api/dayOff";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateNation() {
    const [dayOffDetail, setDayOffDetail] = useState({loaiNghi: ''})
    const [submitError, setSubmitError] = useState({status: false, error: ''})
    const [isSubmit, setIsSubmit] = useState(false)
    const {dayOffId} = useParams()

    const getDayOffDetail = async() => {
        if(dayOffId){
            const dayOffIdRes = await DayOffAPI.getDayOffById(dayOffId)
            if ( dayOffIdRes?.status === 200){
                setDayOffDetail(dayOffIdRes?.data)
            }
        }      
    }

    useEffect(() => {
        getDayOffDetail()
    }, [])

    const handleUpdate = async () => {
        try{
            setSubmitError({status: false, error: ''})
            const {loaiNghi} = dayOffDetail
    
            if ( !loaiNghi.trim().length){
                setSubmitError({status: true, error: 'Information is not blank'})
            }else{
                setIsSubmit(true)
    
                const updateRes = await DayOffAPI.updateDayOff({id: dayOffId, ...dayOffDetail})
                if ( updateRes?.status === 200 ){
                    toast.success('Successfully updated')
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
                    <div className="title">Edit Information on Day Off</div>
                    <div className="title-sub">Fields with <span style={{color:"red"}}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="ID"
                        value={dayOffId}
                        type="text"
                        disabled={true}
                    />

                    <CustomInputField
                        title="Type of day off"
                        require={true}
                        value={dayOffDetail?.loaiNghi || ''}
                        type="text"
                        handleChange={(event) => {
                            setDayOffDetail({...dayOffDetail, loaiNghi: event.target.value})
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
                    <span class="text">Add</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
