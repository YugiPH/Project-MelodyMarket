const initialState = {
    isLoad: true
};

const ReducerCount = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LOAD':
            return { ...state, isLoad: !state.isLoad };

        default:
            return state;
    }
};

export default ReducerCount;
