const initialState = {
    search: ''
};

const ReducerSearch = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return { ...state, search: action.data };

        case 'DELETE_SEARCH':
            return { ...state, search: '' };

        default:
            return state;
    }
};

export default ReducerSearch;
