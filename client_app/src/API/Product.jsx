import axiosClient from './axiosClient';

const Product = {
    Get_All_Product: () => {
        const url = '/products';
        return axiosClient.get(url);
    },

    Get_Category_Product: (query) => {
        const url = `/products/category${query}`;
        return axiosClient.get(url);
    },

    Get_Detail_Product: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    Get_Pagination: (query) => {
        const url = `/products/pagination${query}`;
        return axiosClient.get(url);
    },

    get_search_list: (query) => {
        const url = `/products/scroll${query}`;
        return axiosClient.get(url);
    }
};

export default Product;
