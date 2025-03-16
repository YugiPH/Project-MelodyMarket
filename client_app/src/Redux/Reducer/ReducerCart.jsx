const initialState = {
    id_user: '',
    listCart: []
};

const ReducerCart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, id_user: action.data };

        case 'ADD_CART': {
            const data_add_cart = action.data;
            const add_cart = [...state.listCart];

            const existingItemIndex = add_cart.findIndex(
                item => item.id_product === data_add_cart.id_product && item.size === data_add_cart.size
            );

            if (existingItemIndex !== -1) {
                add_cart[existingItemIndex] = {
                    ...add_cart[existingItemIndex],
                    count: add_cart[existingItemIndex].count + data_add_cart.count
                };
            } else {
                add_cart.push(data_add_cart);
            }

            return { ...state, listCart: add_cart };
        }

        case 'DELETE_CART': {
            const updatedCart = state.listCart.filter(item => item.id_cart !== action.data);
            return { ...state, listCart: updatedCart };
        }

        case 'DELETE_ALL_CART':
            return { ...state, listCart: [] };

        case 'UPDATE_CART': {
            const updatedCart = state.listCart.map(item =>
                item.id_cart === action.data.id_cart ? { ...item, count: action.data.count } : item
            );
            return { ...state, listCart: updatedCart };
        }

        default:
            return state;
    }
};

export default ReducerCart;
