import AxiosClient from "./axiosClient"

const HolidayAPI = {
    getAll() {
        const url = `/category/holiday`;
        return AxiosClient.get(url);
    },

    getHolidayById(id) {
        const url = `/category/holiday/${id}`;
        return AxiosClient.get(url);
    },

    updateHoliday({id, ngay, tenNgayLe}) {
        const url = `/category/holiday/${id}`;
        return AxiosClient.put(url, { ngay, tenNgayLe});
    },

    addNewHoliday({ngay, tenNgayLe}) {
        const url = `/category/holiday`;
        return AxiosClient.post(url, { ngay, tenNgayLe});
    },

    deleteHoliday(id) {
        const url = `/category/holiday/${id}`;
        return AxiosClient.delete(url);
    },
}

export default HolidayAPI;