import axiosClient from "./axiosClient";

const NoteAPI = {
    post_note: (data) => {
        const url = `/api/notes/create`;
        return axiosClient.post(url, data);
    },

    get_note: (id) => {
        const url = `/api/notes/${id}`;
        return axiosClient.get(url);
    }
};

export default NoteAPI;
