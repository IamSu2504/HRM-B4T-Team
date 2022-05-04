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

    updateUser({ id, tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, trangThaiLaoDong, ngayBatDauLam, ngayNghiViec, lyDoNghi }) {
        const url = `/user/${id}`;
        return AxiosClient.put(url, {
            tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, trangThaiLaoDong, ngayBatDauLam, ngayNghiViec, lyDoNghi
        });
    },

    addNewUser({id, tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, trangThaiLaoDong, ngayBatDauLam, ngayNghiViec, lyDoNghi }) {
        const url = `/user`;
        return AxiosClient.post(url, {id,
            tinhChatHopDongID, tinhTrangHonNhanID,
        quocTichID, tenNv, ngaySinh,
        gioiTinh, soDienThoai, soDienThoai2,
        email, cccd, noiCapCccd, ngayCapCccd, ngayHetHanCccd,
        hoChieu, noiCapHoChieu, ngayCapHoChieu, ngayHetHanHoChieu,
        noiSinh, queQuan, diaChiThuongTru, diaChiTamTru, atmNganHang,
        soAtm, trangThaiLaoDong, ngayBatDauLam, ngayNghiViec, lyDoNghi
        });
    },

    deleteUser(id) {
        const url = `/user/${id}`;
        return AxiosClient.delete(url);
    },

    getUserImage(maNv) {
        const url = `/user/${maNv}/image`;
        return AxiosClient.get(url);
    },
    updateUserImage(maNV, image){
        const url = `/user/${maNV}/image`;
        return AxiosClient.put(url, image);
    },
    getUserImageBase64(maNv) {
        const url = `/user/${maNv}/image/base64`;
        return AxiosClient.get(url);
    }
}

export default UserAPI;