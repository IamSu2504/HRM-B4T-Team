import AxiosClient from "./axiosClient"

const RewardDisciplineAPI = {
    getAll() {
        const url = `/category/rewardDiscipline`;
        return AxiosClient.get(url);
    },

    getRewardDisciplineById(id) {
        const url = `/category/rewardDiscipline/${id}`;
        return AxiosClient.get(url);
    },

    updateRewardDiscipline({id, danhMuc, tieuDe}) {
        const url = `/category/rewardDiscipline/${id}`;
        return AxiosClient.put(url, { danhMuc, tieuDe});
    },

    addNewRewardDiscipline({danhMuc, tieuDe}) {
        const url = `/category/rewardDiscipline`;
        return AxiosClient.post(url, { danhMuc, tieuDe});
    },

    deleteRewardDiscipline(id) {
        const url = `/category/rewardDiscipline/${id}`;
        return AxiosClient.delete(url);
    },
}

export default RewardDisciplineAPI;