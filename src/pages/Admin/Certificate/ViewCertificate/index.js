import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CertificateAPI from "../../../../api/certificate";
import CustomPopover from "../../../../components/CustomPopover";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ViewCertificate() {
    const [listCertificate, setListCertificate] = useState([])
    const [popoverId, setPopoverId] = useState("");

    const navigate = useNavigate()

    const getAllCertificate = async() => {
        const certificateRes = await CertificateAPI.getAll()
        if ( certificateRes?.status === 200 ){
            setListCertificate(certificateRes?.data)
        }
    }

    useEffect(() => {
        getAllCertificate()
    }, [])

    const deleteCertificate = async(certificateId) => {
        try{
            const deleteRes = await CertificateAPI.deleteCertificate(certificateId)

            if (deleteRes?.status === 200){
                toast('Xóa thành công')
                getAllCertificate()
            }
        }catch(error){
            if (error.response) {
                toast(error.response.data)
            }
        }
    }

    return (
        <div className="homepage">
            <div className="title">List of Certificate</div>
            <div className="table-frame">
            <div>
                <button className="save-button" onClick={()=>navigate(`/admin/addcertificate`)}>
                    <span class="image">
                        <img src="/home/save-icon.svg" />
                    </span>
                    <span class="text">Add</span>
                </button>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr className="head">
                            <th scope="col">No.</th>
                            <th scope="col">Certificate code</th>
                            <th scope="col">Certificate name</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCertificate.map((certificateItem, certificateIndex) => {
                            return (
                                <tr key={`certificate-item-${certificateIndex}`}>
                                    <th scope="row">{certificateIndex + 1}</th>
                                    <td>{certificateItem?.maChungChi}</td>
                                    <td>{certificateItem?.loaiChungChi}</td>
                                    <td>
                                        <div onClick={()=>navigate(`/admin/updatecertificate/${certificateItem?.id}`)}>
                                            <img src="/home/update-icon.svg" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="pagination-frame">
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
            </div>
            <ToastContainer />
        </div>
    );
}
