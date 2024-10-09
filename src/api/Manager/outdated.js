import AxiosClient from "../axiosClient"

const ManagerOutdatedAPI = {
    getAll() {
        const url = `/report/employee/outdated`;
        return AxiosClient.get(url);
    },
    
}

export default ManagerOutdatedAPI;