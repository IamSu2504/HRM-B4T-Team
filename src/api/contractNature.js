import AxiosClient from "./axiosClient"

const ContractNatureAPI = {
    getAll() {
        const url = `/category/contractNature`;
        return AxiosClient.get(url);
    },

    getContractNatureById(id) {
        const url = `/category/contractNature/${id}`;
        return AxiosClient.get(url);
    },

    updateContractNature({id, tinhChatHopDong}) {
        const url = `/category/contractNature/${id}`;
        return AxiosClient.put(url, { tinhChatHopDong});
    },

    addNewContractNature({tinhChatHopDong}) {
        const url = `/category/contractNature`;
        return AxiosClient.post(url, { tinhChatHopDong});
    },

    deleteContractNature(id) {
        const url = `/category/contractNature/${id}`;
        return AxiosClient.delete(url);
    },
}

export default ContractNatureAPI;