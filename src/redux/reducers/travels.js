import { ADD_NEW_TRAVEL, FETCH_TRAVELS } from "../actions/actionTypes";

const initialState = []

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TRAVELS:
            return [...state, ...payload];
            break;
        case ADD_NEW_TRAVEL:
            console.log('Agregando a mi estado ', payload);
            return [...state, payload]
            break;
        default:
            return state
    }
}

export default reducer;