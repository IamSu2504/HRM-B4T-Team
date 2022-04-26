import AxiosClient from "./axiosClient"

const RegisterShiftAPI = {
  
    addNewRegisterShift({user, shiftCategory, room, date}) {
        const url = `/shift`;
        return AxiosClient.post(url, { user, shiftCategory, room, date});
    },

}

export default RegisterShiftAPI;