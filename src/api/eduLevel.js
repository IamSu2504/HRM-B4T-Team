import AxiosClient from "./axiosClient"

const EduLevelAPI = {
    getAll() {
        const url = `/category/eduLevel`;
        return AxiosClient.get(url);
    },

    getEduLevelById(id) {
        const url = `/category/eduLevel/${id}`;
        return AxiosClient.get(url);
    },

    updateEduLevel({id, trinhDo}) {
        const url = `/category/eduLevel/${id}`;
        return AxiosClient.put(url, { trinhDo});
    },

    addNewEduLevel({trinhDo}) {
        const url = `/category/eduLevel`;
        return AxiosClient.post(url, { trinhDo});
    },

    deleteEduLevel(id) {
        const url = `/category/eduLevel/${id}`;
        return AxiosClient.delete(url);
    },
}

export default EduLevelAPI;