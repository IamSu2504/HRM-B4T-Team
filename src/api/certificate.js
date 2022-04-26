import AxiosClient from "./axiosClient"

const CertificateAPI = {
    getAll() {
        const url = `/category/certificate`;
        return AxiosClient.get(url);
    },

    getCertificateById(id) {
        const url = `/category/certificate/${id}`;
        return AxiosClient.get(url);
    },

    updateCertificate({id, maChungChi, loaiChungChi}) {
        const url = `/category/certificate/${id}`;
        return AxiosClient.put(url, { maChungChi, loaiChungChi});
    },

    addNewCertificate({maChungChi, loaiChungChi}) {
        const url = `/category/certificate`;
        return AxiosClient.post(url, { maChungChi, loaiChungChi});
    },

    deleteCertificate(id) {
        const url = `/category/certificate/${id}`;
        return AxiosClient.delete(url);
    },
}

export default CertificateAPI;