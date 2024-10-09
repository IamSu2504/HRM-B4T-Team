import AxiosClient from "./axiosClient"

const RegisterShiftAPI = {
    getRegisterShiftByTime({ idPhong, ngayTu, ngayDen}){
        const url = `/shift/table`;
        return AxiosClient.post(url, { idPhong, ngayTu, ngayDen});
    },
  
    addNewRegisterShift({userID, shiftCategoryID, roomID, date}) {
        const url = `/shift`;
        return AxiosClient.post(url, {userID, shiftCategoryID, roomID, date});
    },
    getRegisterShiftByMaNv({ idPhong, ngayTu, ngayDen, maNv}){
        const url = `/shift/table`;
        return AxiosClient.post(url, { idPhong, ngayTu, ngayDen, maNv});
    },

}

export default RegisterShiftAPI;