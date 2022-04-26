import AxiosClient from "./axiosClient"

const NationAPI = {
    getAll() {
        const url = `/category/nation`;
        return AxiosClient.get(url);
    },

    getNationById(id) {
        const url = `/category/nation/${id}`;
        return AxiosClient.get(url);
    },

    updateNation({id, quocTich}) {
        const url = `/category/nation/${id}`;
        return AxiosClient.put(url, { quocTich});
    },

    addNewNation({quocTich}) {
        const url = `/category/nation`;
        return AxiosClient.post(url, { quocTich});
    },

    deleteNation(id) {
        const url = `/category/nation/${id}`;
        return AxiosClient.delete(url);
    },
}

export default NationAPI;