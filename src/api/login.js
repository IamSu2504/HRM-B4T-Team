import AxiosClient from "./axiosClient"

const LoginAPI = {
    login({username, password}) {
        const url = `/account/login`;
        return AxiosClient.post(url, { username, password});
    },
}

export default LoginAPI;