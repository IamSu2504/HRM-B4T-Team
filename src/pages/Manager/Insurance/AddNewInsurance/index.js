import React, { useState, useEffect } from "react";
import CustomInputField from "../../../../components/customInputField";
import CustomSelectBox from "../../../../components/customSelectbox";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManagerInsuranceAPI from "../../../../api/Manager/Insurance";
import InsuranceAPI from "../../../../api/insurance";
import { useParams, useNavigate } from "react-router-dom";


export default function AddManagerInsurance() {
    const [haveNewInsurance, setHaveNewInsurance] = useState()
    const [managerInsuranceDetail, setManagerInsuranceDetail] = useState([])
    const [submitError, setSubmitError] = useState({ status: false, error: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const { maNv } = useParams()
    const navigate = useNavigate();
    const [checkBaoHiemXaHoi, setCheckBaoHiemXaHoi] = useState('')
    const [checkBaoHiemYTe, setCheckBaoHiemYTe] = useState('')
    const [checkCongDoan, setCheckCongDoan] = useState('')
    var valiBaoHiemXaHoi = /^[0-9]{10}$/;
    var valiBaoHiemYTe = /(([A-Z]{2})+([0-9]{3})\b)/g;
    var valiCongDoan = /^[0-9]{10}$/;

    const handleCreate = async () => {
        try {
            setSubmitError({ status: false, error: '' })
            console.log(maNv)
            console.log(managerInsuranceDetail);
            if (!managerInsuranceDetail.BHXH.trim().length || !managerInsuranceDetail.BHYT.trim().length || !managerInsuranceDetail.CD.trim().length) {
                setSubmitError({ status: true, error: 'Information is not blank' })
            } else
                if (!valiBaoHiemXaHoi.test(managerInsuranceDetail.BHXH) || !valiBaoHiemYTe.test(managerInsuranceDetail.BHYT) || !valiCongDoan.test(managerInsuranceDetail.CD)) {
                    setSubmitError({ status: true, error: 'Information incorrectly format' })
                }
                else {
                    setIsSubmit(true)

                    const updateRes1 = await ManagerInsuranceAPI.addNewManagerInsurance({ idLoaiBH: "1", maSoBH: managerInsuranceDetail.BHXH, maNV: maNv })
                    const updateRes2 = await ManagerInsuranceAPI.addNewManagerInsurance({ idLoaiBH: "2", maSoBH: managerInsuranceDetail.BHYT, maNV: maNv })
                    const updateRes3 = await ManagerInsuranceAPI.addNewManagerInsurance({ idLoaiBH: "3", maSoBH: managerInsuranceDetail.CD, maNV: maNv })
                    if (updateRes1?.status === 200) {
                        toast.success(updateRes1?.data)
                        setHaveNewInsurance(maNv)
                        //navigate(`/manager/addTax/${maNv}`)
                    }
                }

        } catch (error) {
            if (error.response) {
                setSubmitError({ status: true, error: error.response.data })
            }
        } finally {
            setIsSubmit(false)
        }
    }

    const [listInsurance, setListInsurance] = useState([])

    const getAllInsurance = async () => {
        const insuranceRes = await InsuranceAPI.getAll()
        if (insuranceRes?.status === 200) {
            setListInsurance(insuranceRes?.data)
        }
    }

    useEffect(() => {
        getAllInsurance()
    }, [])

    return (
        <div className="update-account-page">
            <div className="row">
                <div className="col-12">
                    <div className="title">Add Information of Insurance</div>
                    <div className="title-sub">Fields with <span style={{ color: "red" }}>*</span> cannot be left blank</div>
                </div>
            </div>

            <div className="row fied-data-row">
                <div>
                    <CustomInputField
                        title="Employee code"
                        require={true}
                        disabled={true}
                        value={maNv}
                        type="text"
                        handleChange={(event) => {
                            setManagerInsuranceDetail({ ...managerInsuranceDetail, maNV: event.target.value })
                        }}
                    />
                    <CustomInputField
                        title='Social insurance'
                        placeholder={"10 numbers"}
                        type="text"
                        disabled={false}
                        require={true}
                        // placeholder = 'BHXH gồm mười số'
                        handleChange={(event) => {
                            if ((event.target.value) && !valiBaoHiemXaHoi.test(event.target.value)) {
                                setCheckBaoHiemXaHoi('Social insurance incorrect format')

                            }
                            else {

                                setCheckBaoHiemXaHoi('')
                                setManagerInsuranceDetail({ ...managerInsuranceDetail, BHXH: event.target.value })
                            }
                        }}
                    />
                    <span style={{ fontSize: '10px', color: 'red', }}>{checkBaoHiemXaHoi}</span>
                    <CustomInputField
                        title='Health Insurance'
                        placeholder={"5 characters (the first 2 letters and the last 3 numbers)"}
                        type="text"
                        disabled={false}
                        require={true}
                        handleChange={(event) => {
                            if ((event.target.value) && !valiBaoHiemYTe.test(event.target.value)) {
                                setCheckBaoHiemYTe('Health Insurance incorrect format')

                            }
                            else {

                                setCheckBaoHiemYTe('')
                                setManagerInsuranceDetail({ ...managerInsuranceDetail, BHYT: event.target.value })
                            }
                        }}
                    />
                    <span style={{ fontSize: '10px', color: 'red', }}>{checkBaoHiemYTe}</span>
                    <CustomInputField
                        title='Trade union code'
                        placeholder={"10 numbers"}
                        type="text"
                        disabled={false}
                        require={true}
                        handleChange={(event) => {
                            if ((event.target.value) && !valiCongDoan.test(event.target.value)) {
                                setCheckCongDoan('Trade union code incorrect format')

                            }
                            else {

                                setCheckCongDoan('')
                                setManagerInsuranceDetail({ ...managerInsuranceDetail, CD: event.target.value })
                            }
                        }}
                    />
                    <span style={{ fontSize: '10px', color: 'red', }}>{checkCongDoan}</span>
                </div>
            </div>
            <div>
                {submitError.status && <div className="tax-update-error">{submitError.error}</div>}
            </div>
            <div className="list-button">
                {
                    haveNewInsurance ?
                        <div>
                            <button className="add-contract" onClick={() => navigate(`/manager/addTax/${maNv}`)}>
                                <span class="image">
                                    <img src="/home/save-icon.svg" />
                                </span>
                                <span class="text"> Add Tax For {maNv}</span>
                            </button>
                        </div> :
                        <button className="save-button" disabled={isSubmit} onClick={() => handleCreate()}>
                            <span class="image">
                                <img src="/home/save-icon.svg" />
                            </span>
                            <span class="text">Add</span>
                        </button>
                }

            </div>
            <ToastContainer />
        </div>
    );
}
