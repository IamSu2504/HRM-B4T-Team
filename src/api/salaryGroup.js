import AxiosClient from "./axiosClient"

const SalaryGroupAPI = {
    getAll() {
        const url = `/category/salaryGroup`;
        return AxiosClient.get(url);
    },

    getSalaryGroupById(id) {
        const url = `/category/salaryGroup/${id}`;
        return AxiosClient.get(url);
    },

    updateSalaryGroup({id, maNhomLuong, tenNhomLuong}) {
        const url = `/category/salaryGroup/${id}`;
        return AxiosClient.put(url, { maNhomLuong, tenNhomLuong});
    },

    addNewSalaryGroup({maNhomLuong, tenNhomLuong}) {
        const url = `/category/salaryGroup`;
        return AxiosClient.post(url, { maNhomLuong, tenNhomLuong});
    },

    deleteSalaryGroup(id) {
        const url = `/category/salaryGroup/${id}`;
        return AxiosClient.delete(url);
    },
}

export default SalaryGroupAPI;