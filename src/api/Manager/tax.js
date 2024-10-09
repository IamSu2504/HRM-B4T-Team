import AxiosClient from "../axiosClient"

const ManagerTaxAPI = {
    getAll() {
        const url = `/tax`;
        return AxiosClient.get(url);
    },

    getManagerTaxById(id) {
        const url = `/tax/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerTax({id, idLoaiThue, maSoThue, maNV}) {
        const url = `/tax/${id}`;
        return AxiosClient.put(url, { idLoaiThue, maSoThue, maNV});
    },

    addNewManagerTax({idLoaiThue, maSoThue, maNV}) {
        const url = `/tax`;
        return AxiosClient.post(url, {idLoaiThue, maSoThue, maNV});
    },

}

export default ManagerTaxAPI;