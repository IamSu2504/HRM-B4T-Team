import AxiosClient from "./axiosClient"

const SalaryGradeAPI = {
    getAll() {
        const url = `/category/salary`;
        return AxiosClient.get(url);
    },

    getSalaryGradeById(id) {
        const url = `/category/salary/${id}`;
        return AxiosClient.get(url);
    },

    updateSalaryGrade({id, maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen}) {
        const url = `/category/salary/${id}`;
        return AxiosClient.put(url, { maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen});
    },

    addNewSalaryGrade({maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen}) {
        const url = `/category/salary`;
        return AxiosClient.post(url, { maBacLuong, tenBacLuong, khoangLuongTu, khoangLuongDen});
    },

    deleteSalaryGrade(id) {
        const url = `/category/salaryGroup/${id}`;
        return AxiosClient.delete(url);
    },
}

export default SalaryGradeAPI;