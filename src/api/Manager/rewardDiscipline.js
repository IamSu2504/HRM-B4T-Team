import AxiosClient from "../axiosClient"

const RewardDisciplineAPI = {
    getAllReward() {
        const url = `/reward`;
        return AxiosClient.get(url);
    },
    getAllDiscipline() {
        const url = `/discipline`;
        return AxiosClient.get(url);
    },

    getRewardById(id) {
        const url = `/reward/${id}`;
        return AxiosClient.get(url);
    },
    getDisciplineById(id) {
        const url = `/discipline/${id}`;
        return AxiosClient.get(url);
    },

    updateRewardDiscipline({id, phanLoaiID, lyDo, maNv}) {
        const url = `/rewardDiscipline/${id}`;
        return AxiosClient.put(url, { phanLoaiID, lyDo, maNv});
    },

    addNewRewardDiscipline({phanLoaiID, lyDo, maNv}) {
        const url = `/rewardDiscipline`;
        return AxiosClient.post(url, { phanLoaiID, lyDo, maNv});
    },

    
}

export default RewardDisciplineAPI;