import AxiosClient from "./axiosClient"

const SpecializeAPI = {
    getAll() {
        const url = `/category/specialize`;
        return AxiosClient.get(url);
    },

    getSpecializeById(id) {
        const url = `/category/specialize/${id}`;
        return AxiosClient.get(url);
    },

    updateSpecialize({id, maChuyenMon, chuyenMon}) {
        const url = `/category/specialize/${id}`;
        return AxiosClient.put(url, { maChuyenMon, chuyenMon});
    },

    addNewSpecialize({maChuyenMon, chuyenMon}) {
        const url = `/category/specialize`;
        return AxiosClient.post(url, { maChuyenMon, chuyenMon});
    },

    deleteSpecialize(id) {
        const url = `/category/specialize/${id}`;
        return AxiosClient.delete(url);
    },
}

export default SpecializeAPI;