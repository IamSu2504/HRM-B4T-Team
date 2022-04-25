import AxiosClient from "./axiosClient"

const UserAPI = {
    getAll() {
        const url = `/user`;
        return AxiosClient.get(url);
    },

    getUserById(id) {
        const url = `/user/${id}`;
        return AxiosClient.get(url);
    },

    updateUser({ id, tinhChatHopDongID, tinhTrangHonNhanID, chucVuID,
        quocTichID, tenNv, ngaySinh, gioiTinh,
        soDienThoai, soDienThoai2, email,
        cccd, noiCapCccd, ngayCapCccd,
        ngayHetHanCccd, hoChieu, noiCapHoChieu,
        ngayCapHoChieu, ngayHetHanHoChieu, noiSinh,
        queQuan, diaChiThuongTru, diaChiTamTru,
        atmNganHang, soAtm, trangThaiLaoDong,
        ngayBatDauLam, ngayNghiViec, lyDoNghi, image }) {
        const url = `/user/${id}`;
        return AxiosClient.put(url, {
            tinhChatHopDongID, tinhTrangHonNhanID, chucVuID,
            quocTichID, tenNv, ngaySinh, gioiTinh,
            soDienThoai, soDienThoai2, email,
            cccd, noiCapCccd, ngayCapCccd,
            ngayHetHanCccd, hoChieu, noiCapHoChieu,
            ngayCapHoChieu, ngayHetHanHoChieu, noiSinh,
            queQuan, diaChiThuongTru, diaChiTamTru,
            atmNganHang, soAtm, trangThaiLaoDong,
            ngayBatDauLam, ngayNghiViec, lyDoNghi, image
        });
    },

    addNewUser({ tinhChatHopDongID, tinhTrangHonNhanID, chucVuID,
        quocTichID, tenNv, ngaySinh, gioiTinh,
        soDienThoai, soDienThoai2, email,
        cccd, noiCapCccd, ngayCapCccd,
        ngayHetHanCccd, hoChieu, noiCapHoChieu,
        ngayCapHoChieu, ngayHetHanHoChieu, noiSinh,
        queQuan, diaChiThuongTru, diaChiTamTru,
        atmNganHang, soAtm, trangThaiLaoDong,
        ngayBatDauLam, ngayNghiViec, lyDoNghi, image }) {
        const url = `/user`;
        return AxiosClient.post(url, {
            tinhChatHopDongID, tinhTrangHonNhanID, chucVuID,
            quocTichID, tenNv, ngaySinh, gioiTinh,
            soDienThoai, soDienThoai2, email,
            cccd, noiCapCccd, ngayCapCccd,
            ngayHetHanCccd, hoChieu, noiCapHoChieu,
            ngayCapHoChieu, ngayHetHanHoChieu, noiSinh,
            queQuan, diaChiThuongTru, diaChiTamTru,
            atmNganHang, soAtm, trangThaiLaoDong,
            ngayBatDauLam, ngayNghiViec, lyDoNghi, image
        });
    },

    deleteUser(id) {
        const url = `/user/${id}`;
        return AxiosClient.delete(url);
    },

    getUserImage(userId) {
        const url = `user/${userId}/image`;
        return AxiosClient.get(url);
    }
}

export default UserAPI;