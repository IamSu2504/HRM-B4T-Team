import AxiosClient from "./axiosClient"

const PositionAPI = {
    getAll() {
        const url = `/category/position`;
        return AxiosClient.get(url);
    },

    getPositionById(id) {
        const url = `/category/position/${id}`;
        return AxiosClient.get(url);
    },

    updatePosition({id, maChucVu, tenChucVu, phuCap}) {
        const url = `/category/position/${id}`;
        return AxiosClient.put(url, { maChucVu, tenChucVu, phuCap});
    },

    addNewPosition({maChucVu, tenChucVu, phuCap}) {
        const url = `/category/position`;
        return AxiosClient.post(url, { maChucVu, tenChucVu, phuCap});
    },

    deletePosition(id) {
        const url = `/category/position/${id}`;
        return AxiosClient.delete(url);
    },
}

export default PositionAPI;