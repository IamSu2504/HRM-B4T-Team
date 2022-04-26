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

    updateManagerInsurance({id, idLoaiBH, maSoBH, tienBH, maNV}) {
        const url = `/insurance/${id}`;
        return AxiosClient.put(url, { idLoaiBH, maSoBH, tienBH, maNV});
    },

    addNewManagerInsurance({idLoaiBH, maSoBH, tienBH, maNV}) {
        const url = `/insurance`;
        return AxiosClient.post(url, {idLoaiBH, maSoBH, tienBH, maNV});
    },

}

export default ManagerInsuranceAPI;