import AxiosClient from "./axiosClient"

const DayOffAPI = {
    getAll() {
        const url = `/category/dayOff`;
        return AxiosClient.get(url);
    },

    getDayOffById(id) {
        const url = `/category/dayOff/${id}`;
        return AxiosClient.get(url);
    },

    updateDayOff({id, loaiNghi}) {
        const url = `/category/dayOff/${id}`;
        return AxiosClient.put(url, { loaiNghi});
    },

    addNewDayOff({loaiNghi}) {
        const url = `/category/dayOff`;
        return AxiosClient.post(url, { loaiNghi});
    },

    deleteDayOff(id) {
        const url = `/category/dayOff/${id}`;
        return AxiosClient.delete(url);
    },
}

export default DayOffAPI;