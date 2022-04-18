import AxiosClient from "./axiosClient"

const RelativeAPI = {
    getAll() {
        const url = `/category/relative`;
        return AxiosClient.get(url);
    },

    getRelativeById(id) {
        const url = `/category/relative/${id}`;
        return AxiosClient.get(url);
    },

    updateRelative({id, quanHe}) {
        const url = `/category/relative/${id}`;
        return AxiosClient.put(url, { quanHe});
    },

    addNewRelative({quanHe}) {
        const url = `/category/relative`;
        return AxiosClient.post(url, { quanHe});
    },

    deleteRelative(id) {
        const url = `/category/relative/${id}`;
        return AxiosClient.delete(url);
    },
}

export default RelativeAPI;