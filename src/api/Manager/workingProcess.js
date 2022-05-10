import AxiosClient from "../axiosClient"

const ManagerWorkingProcessAPI = {
    getAll() {
        const url = `/workingProcess`;
        return AxiosClient.get(url);
    },

    getManagerWorkingProcessById(id) {
        const url = `/workingProcess/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerWorkingProcess({id, idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV}) {
        const url = `/workingProcess/${id}`;
        return AxiosClient.put(url, { idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV});
    },

    addNewManagerWorkingProcess({idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV}) {
        const url = `/workingProcess`;
        return AxiosClient.post(url, {idPhongBan, idChucVu, ngayVao, ngayRa, trangThai, maNV});
    },

}

export default ManagerWorkingProcessAPI;