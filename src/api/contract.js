import AxiosClient from "./axiosClient"

const ContractAPI = {
    getAll() {
        const url = `/category/contract`;
        return AxiosClient.get(url);
    },

    getContractById(id) {
        const url = `/category/contract/${id}`;
        return AxiosClient.get(url);
    },

    updateContract({id, maLoaiHopDong, tenLoaiHopDong}) {
        const url = `/category/contract/${id}`;
        return AxiosClient.put(url, { maLoaiHopDong, tenLoaiHopDong});
    },

    addNewContract({maLoaiHopDong, tenLoaiHopDong}) {
        const url = `/category/contract`;
        return AxiosClient.post(url, { maLoaiHopDong, tenLoaiHopDong});
    },

    deleteContract(id) {
        const url = `/category/contract/${id}`;
        return AxiosClient.delete(url);
    },
}

export default ContractAPI;