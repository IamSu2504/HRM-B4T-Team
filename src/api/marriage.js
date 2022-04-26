import AxiosClient from "./axiosClient"

const MarriageAPI = {
    getAll() {
        const url = `/category/marriage`;
        return AxiosClient.get(url);
    },

    getMarriageById(id) {
        const url = `/category/marriage/${id}`;
        return AxiosClient.get(url);
    },

    updateMarriage({id, tinhTrang}) {
        const url = `/category/marriage/${id}`;
        return AxiosClient.put(url, { tinhTrang});
    },

    addNewMarriage({tinhTrang}) {
        const url = `/category/marriage`;
        return AxiosClient.post(url, { tinhTrang});
    },

    deleteMarriage(id) {
        const url = `/category/marriage/${id}`;
        return AxiosClient.delete(url);
    },
}

export default MarriageAPI;