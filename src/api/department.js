import AxiosClient from "./axiosClient"

const DepartmentAPI = {
    getAll() {
        const url = `/category/department`;
        return AxiosClient.get(url);
    },

    getDepartmentById(id) {
        const url = `/category/department/${id}`;
        return AxiosClient.get(url);
    },

    updateDepartment({id, maPhongBan, tenPhongBan}) {
        const url = `/category/department/${id}`;
        return AxiosClient.put(url, { maPhongBan, tenPhongBan});
    },

    addNewDepartment({maPhongBan, tenPhongBan}) {
        const url = `/category/department`;
        return AxiosClient.post(url, { maPhongBan, tenPhongBan});
    },

    deleteDepartment(id) {
        const url = `/category/department/${id}`;
        return AxiosClient.delete(url);
    },
}

export default DepartmentAPI;