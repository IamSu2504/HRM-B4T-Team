import AxiosClient from "../axiosClient"

const ManagerContractAPI = {
    getAll() {
        const url = `/contract`;
        return AxiosClient.get(url);
    },
    
    getnewID() {
        const url = `/contract/newID`;
        return AxiosClient.get(url);
    },

    getManagerContractById(id) {
        const url = `/contract/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerContract({maHD, loaiHopDong, ngayHieuLuc, ngayHetHan,giamTruGiaCanh, ghiChu, maNV}) {
        const url = `/contract/${maHD}`;
        return AxiosClient.put(url, { loaiHopDong, ngayHieuLuc, ngayHetHan,giamTruGiaCanh, ghiChu, maNV});
    },

    addNewManagercontract({maHD, loaiHopDong, ngayHieuLuc, ngayHetHan,giamTruGiaCanh, ghiChu, maNV}) {
        // console.log()
        const url = `/contract`;
        return AxiosClient.post(url, {maHD, loaiHopDong, ngayHieuLuc, ngayHetHan,giamTruGiaCanh, ghiChu, maNV});
    },

}

export default ManagerContractAPI;