import AxiosClient from "./axiosClient"

const DegreeAPI = {
    getAll() {
        const url = `/category/degree`;
        return AxiosClient.get(url);
    },

    getDegreeById(id) {
        const url = `/category/degree/${id}`;
        return AxiosClient.get(url);
    },

    updateDegree({id, loaiBangCap}) {
        const url = `/category/degree/${id}`;
        return AxiosClient.put(url, { loaiBangCap});
    },

    addNewDegree({loaiBangCap}) {
        const url = `/category/degree`;
        return AxiosClient.post(url, { loaiBangCap});
    },

    deleteDegree(id) {
        const url = `/category/degree/${id}`;
        return AxiosClient.delete(url);
    },
}

export default DegreeAPI;