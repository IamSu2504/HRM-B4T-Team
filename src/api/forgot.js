import AxiosClient from "./axiosClient"

const ForgotAPI = {
    forgot(gmail) {
        const url = `/account/forgot`;
        return AxiosClient.post(url,gmail);
    },

    getAccountById(id) {
        const url = `account/${id}/forgot`;
        return AxiosClient.get(url);
    },

    updatePassword({id, username, password, maNv, roleID}) {
        const url = `/account/${id}`;
        return AxiosClient.put(url, { username, password, maNv, roleID});
    },
}

export default ForgotAPI;