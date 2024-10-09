import AxiosClient from "./axiosClient"

const InsuranceAPI = {
    getAll() {
        const url = `/category/insurance`;
        return AxiosClient.get(url);
    },

    getInsuranceById(id) {
        const url = `/category/insurance/${id}`;
        return AxiosClient.get(url);
    },

    updateInsurance({id, maBH, tenBH}) {
        const url = `/category/insurance/${id}`;
        return AxiosClient.put(url, { maBH, tenBH});
    },

    addNewInsurance({maBH, tenBH}) {
        const url = `/category/insurance`;
        return AxiosClient.post(url, { maBH, tenBH});
    },

    deleteInsurance(id) {
        const url = `/category/insurance/${id}`;
        return AxiosClient.delete(url);
    },
}

export default InsuranceAPI;