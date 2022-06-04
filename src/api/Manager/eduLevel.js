import AxiosClient from "../axiosClient"

const ManagerEduLevelAPI = {
    getAll() {
        const url = `/eduLevel`;
        return AxiosClient.get(url);
    },

    getManagerEduLevelByMaNv(MaNv) {
        const url = `/eduLevel/${MaNv}`;
        return AxiosClient.get(url);
    },
    
    getManagerEduLevelById(id) {
        const url = `/eduLevel/id/${id}`;
        return AxiosClient.get(url);
    },

    updateManagerEduLevel({id,idChuyenMon, idTrinhDo, idBangCap, tenTruong, thoiGianTu, thoiGianDen, maNV}) {
        const url = `/eduLevel/${id}`;
        return AxiosClient.put(url, { idChuyenMon, idTrinhDo, idBangCap, tenTruong, thoiGianTu, thoiGianDen, maNV});
    },

    addNewManagerEduLevel({idChuyenMon, idTrinhDo, idBangCap, tenTruong, thoiGianTu, thoiGianDen, maNV}) {
        // console.log()
        const url = `/eduLevel`;
        return AxiosClient.post(url, {idChuyenMon, idTrinhDo, idBangCap, tenTruong, thoiGianTu, thoiGianDen, maNV});
    },

}

export default ManagerEduLevelAPI;