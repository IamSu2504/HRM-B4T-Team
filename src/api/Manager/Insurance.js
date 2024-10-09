import AxiosClient from "../axiosClient"

const ManagerInsuranceAPI = {
    getAll() {
        const url = `/insurance`;
        return AxiosClient.get(url);
    },

    getManagerInsuranceById(id) {
        const url = `/insurance/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerInsurance({id, idLoaiBH, maSoBH, maNV}) {
        const url = `/insurance/${id}`;
        return AxiosClient.put(url, { idLoaiBH, maSoBH, maNV});
    },

    addNewManagerInsurance({idLoaiBH, maSoBH, maNV}) {
        const url = `/insurance`;
        return AxiosClient.post(url, {idLoaiBH, maSoBH, maNV});
    },

}

export default ManagerInsuranceAPI;