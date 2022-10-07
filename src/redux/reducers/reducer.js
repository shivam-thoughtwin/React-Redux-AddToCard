const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qunt += 1;
            } else {
                const temp = { ...action.payload, qunt: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((elem) => elem.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[ItemIndex_dec].qunt >= 1) {
                const dltitem = state.carts[ItemIndex_dec].qunt -= 1;
                console.log([...state.carts, dltitem])

                return {
                    ...state,
                    carts: [...state.carts]
                }
            }else if(state.carts[ItemIndex_dec].qunt === 1){
                const data = state.carts.filter((elem) => elem.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }
            }

        default:
            return state
    }
}