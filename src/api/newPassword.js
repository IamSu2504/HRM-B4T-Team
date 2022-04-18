import AxiosClient from "./axiosClient"

const NewPassWordAPI = {
    
    getNewPassWordById(id) {
        const url = `/account/${id}/forgot`;
        return AxiosClient.get(url);
    },

    // updateNation({id, quocTich}) {
    //     const url = `/category/nation/${id}`;
    //     return AxiosClient.put(url, { quocTich});
    // },

    // addNewNation({quocTich}) {
    //     const url = `/category/nation`;
    //     return AxiosClient.post(url, { quocTich});
    // },

    // deleteNation(id) {
    //     const url = `/category/nation/${id}`;
    //     return AxiosClient.delete(url);
    // },
}

export default NewPassWordAPI;