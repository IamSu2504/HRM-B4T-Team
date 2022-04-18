import AxiosClient from "./axiosClient"

const ClassRoomAPI = {
    getAll() {
        const url = `/category/classRoom`;
        return AxiosClient.get(url);
    },

    getClassRoomById(id) {
        const url = `/category/classRoom/${id}`;
        return AxiosClient.get(url);
    },

    updateClassRoom({id, maPhongHoc, tenPhongHoc}) {
        const url = `/category/classRoom/${id}`;
        return AxiosClient.put(url, { maPhongHoc, tenPhongHoc});
    },

    addNewClassRoom({maPhongHoc, tenPhongHoc}) {
        const url = `/category/classRoom`;
        return AxiosClient.post(url, { maPhongHoc, tenPhongHoc});
    },

    deleteClassRoom(id) {
        const url = `/category/classRoom/${id}`;
        return AxiosClient.delete(url);
    },
}

export default ClassRoomAPI;