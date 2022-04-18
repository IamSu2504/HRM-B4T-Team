import AxiosClient from "./axiosClient"

const AccountAPI = {
    getAll() {
        const url = `/account`;
        return AxiosClient.get(url);
    },

    getAccountById(id) {
        const url = `/account/${id}`;
        return AxiosClient.get(url);
    },

    updateAccount({id, username, password, maNv, roleID}) {
        const url = `/account/${id}`;
        return AxiosClient.put(url, {  username, password, maNv, roleID});
    },

    addNewAccount({ username, password, maNv, roleID}) {
        const url = `/account`;
        return AxiosClient.post(url, { username, password, maNv, roleID});
    },

    deleteAccount(id) {
        const url = `/account/${id}`;
        return AxiosClient.delete(url);
    },
}

export default AccountAPI;