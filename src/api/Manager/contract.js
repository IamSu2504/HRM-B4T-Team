import AxiosClient from "../axiosClient"

const ManagerContractAPI = {
    getAll() {
        const url = `/contract`;
        return AxiosClient.get(url);
    },

    getManagerContractById(id) {
        const url = `/contract/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerContract({id, maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV}) {
        const url = `/contract/${id}`;
        return AxiosClient.put(url, { maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV});
    },

    addNewManagercontract({maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV}) {
        const url = `/contract`;
        return AxiosClient.post(url, {maHD, loaiHopDong, ngayHieuLuc, ngayHetHan, ghiChu, trangThai, maNV});
    },

}

export default ManagerContractAPI;