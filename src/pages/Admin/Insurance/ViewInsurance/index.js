import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import InsuranceAPI from "../../../../api/insurance";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewInsurance() {
    const [listInsurance, setListInsurance] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllInsurance = async() => {
        const insuranceRes = await InsuranceAPI.getAll()
        if ( insuranceRes?.status === 200 ){
            setListInsurance(insuranceRes?.data)
        }
    }

    useEffect(() => {
        getAllInsurance()
    }, [])

    const deleteInsurance = async(insuranceId) => {
        try{
            const deleteRes = await InsuranceAPI.deleteInsurance(insuranceId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllInsurance()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">Danh Sách Bảo Hiểm</div>
            <div className="table-frame">
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">STT</th>
                            <th scope="col">Mã Bảo Hiểm</th>
                            <th scope="col">Tên Bảo Hiểm</th>
                            <th scope="col">Sửa</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {listInsurance.map((insuranceItem, insuranceIndex) => {
                            return (
                                <tr key={`tax-item-${insuranceIndex}`}>
                                    <th scope="row">{insuranceIndex + 1}</th>
                                    <td>{insuranceItem?.maBH}</td>
                                    <td>{insuranceItem?.tenBH}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updateinsurance/${insuranceItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                    {/* <td>                
                                        <CustomPopover
                                            open={popoverId === insuranceItem?.id}
                                            onClose={() => setPopoverId("")}
                                            handleSubmit={() => {
                                                deleteInsurance(insuranceItem?.id)
                                            }}
                                        >          
                                            <div 
                                                onClick={() => {
                                                    if (popoverId !== insuranceItem?.id) {
                                                        setPopoverId(insuranceItem?.id);
                                                    } else {
                                                        setPopoverId("");
                                                    }
                                                }}
                                            >
                                                <img src="/home/delete-icon.svg" />
                                            </div>
                                        </CustomPopover>
                                    </td> */}
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {/* <div className="pagination-frame">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}

            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addinsurance`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Thêm Mới</span>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
