import AxiosClient from "./axiosClient"

const employeeContractAndSalaryAPI = {


    getContract(id) {
        const url = `/contract/employee/${id}`;
        return AxiosClient.get(url);
    },

    // updateTax({id, maPhanLoai, tenLoaiThue}) {
    //     const url = `/category/tax/${id}`;
    //     return AxiosClient.put(url, { maPhanLoai, tenLoaiThue});
    // },

    // addNewTax({maPhanLoai, tenLoaiThue}) {
    //     const url = `/category/tax`;
    //     return AxiosClient.post(url, { maPhanLoai, tenLoaiThue});
    // },

    // deleteTax(id) {
    //     const url = `/category/tax/${id}`;
    //     return AxiosClient.delete(url);
    // },
}

export default employeeContractAndSalaryAPI;