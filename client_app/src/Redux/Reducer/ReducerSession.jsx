const initialState = {
    idUser: ''
};

const ReducerSession = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SESSION':
            return { ...state, idUser: action.data };

        case 'DELETE_SESSION':
            console.log("idUser: ", action.data);
            return { ...state, idUser: '' };

        default:
            return state;
    }
};

export default ReducerSession;
