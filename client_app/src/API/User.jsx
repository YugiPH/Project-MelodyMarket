import axiosClient from './axiosClient';

const User = {
    Get_All_User: () => {
        const url = '/users';
        return axiosClient.get(url);
    },

    Get_User: (id) => {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },

    Put_User: (data) => {
        const url = `/users/update`;
        return axiosClient.put(url, data);
    },

    Get_Detail_User: (query) => {
        const url = `/users/detail${query}`;
        return axiosClient.get(url);
    },

    Post_User: (data) => {
        const url = '/users/create';
        return axiosClient.post(url, data);
    }
}

export default User;
