import AxiosClient from "./axiosClient"

const TaxAPI = {
    getAll() {
        const url = `/category/tax`;
        return AxiosClient.get(url);
    },

    getTaxById(id) {
        const url = `/category/tax/${id}`;
        return AxiosClient.get(url);
    },

    updateTax({id, maPhanLoai, tenLoaiThue}) {
        const url = `/category/tax/${id}`;
        return AxiosClient.put(url, { maPhanLoai, tenLoaiThue});
    },

    addNewTax({maPhanLoai, tenLoaiThue}) {
        const url = `/category/tax`;
        return AxiosClient.post(url, { maPhanLoai, tenLoaiThue});
    },

    deleteTax(id) {
        const url = `/category/tax/${id}`;
        return AxiosClient.delete(url);
    },
}

export default TaxAPI;