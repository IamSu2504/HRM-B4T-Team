import AxiosClient from "../axiosClient"

const ManagerSalaryAPI = {
    getAll() {
        const url = `/salary`;
        return AxiosClient.get(url);
    },

    getReportSalary() {
        const url = `/report/salary`;
        return AxiosClient.get(url);
    },

    getManagerSalaryById(id) {
        const url = `/salary/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerSalary({id, maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu}) {
        const url = `/salary/${id}`;
        return AxiosClient.put(url, { maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu});
    },

    addNewManagerSalary({maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu}) {
        const url = `/salary`;
        console.log('trong api',{maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu} )
        return AxiosClient.post(url, {maHD, idBacLuong, luongCoBan, phuCapKhac, ngayHieuLuc, ngayKetThuc, ghiChu});
    },

}

export default ManagerSalaryAPI;