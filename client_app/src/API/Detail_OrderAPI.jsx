import axiosClient from "./axiosClient";

const Detail_OrderAPI = {
    post_detail_order: (data) => {
        const url = `/api/detail-orders/create`;
        return axiosClient.post(url, data);
    },

    get_detail_order: (id) => {
        const url = `/api/detail-orders/${id}`;
        return axiosClient.get(url);
    }
};

export default Detail_OrderAPI;
