import AxiosClient from "../axiosClient"

const CertificateAPI = {
    getByMaNV(id) {
        const url = `/manager/certificate/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerCertificate({id, certificateID, ngayCap, noiCap, maNV, diemSo}) {
        const url = `/manager/certificate/${id}`;
        return AxiosClient.put(url, { certificateID, ngayCap, noiCap, maNV, diemSo});
    },

    addNewManagerCertificate({certificateID, ngayCap, noiCap, maNV, diemSo}) {
        // console.log()
        const url = `/manager/certificate`;
        return AxiosClient.post(url, {certificateID, ngayCap, noiCap, maNV, diemSo});
    },
    
}

export default CertificateAPI;