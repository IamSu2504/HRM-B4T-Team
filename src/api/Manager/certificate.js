import AxiosClient from "../axiosClient"

const CertificateAPI = {
    getByMaNV(id) {
        const url = `/manager/certificate/${id}`;
        return AxiosClient.get(url);
    },
    
}

export default CertificateAPI;