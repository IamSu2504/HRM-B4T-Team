import AxiosClient from "./axiosClient"

const ShiftAPI = {
    getAll() {
        const url = `/category/shift`;
        return AxiosClient.get(url);
    },

    getShiftById(id) {
        const url = `/category/shift/${id}`;
        return AxiosClient.get(url);
    },

    updateShift({id, tenCa, gioBatDau, gioKetThuc}) {
        const url = `/category/shift/${id}`;
        return AxiosClient.put(url, { tenCa, gioBatDau, gioKetThuc});
    },

    addNewShift({tenCa, gioBatDau, gioKetThuc}) {
        const url = `/category/shift`;
        return AxiosClient.post(url, { tenCa, gioBatDau, gioKetThuc});
    },

    deleteShift(id) {
        const url = `/category/shift/${id}`;
        return AxiosClient.delete(url);
    },
}

export default ShiftAPI;