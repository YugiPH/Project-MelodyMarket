export const addUser = (data) => {
    return {
        type: 'ADD_USER',
        data
    };
};

export const addCart = (data) => {
    return {
        type: 'ADD_CART',
        data
    };
};

export const updateCart = (data) => {
    return {
        type: 'UPDATE_CART',
        data
    };
};

export const deleteCart = (data) => {
    return {
        type: 'DELETE_CART',
        data
    };
};

export const deleteAllCart = () => {
    return {
        type: 'DELETE_ALL_CART'
    };
};
