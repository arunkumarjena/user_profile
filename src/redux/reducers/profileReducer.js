import { ActionTypes } from "../constants/action-types";
const initialState = {
    data: [],
}
export const profilesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILES:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export const selectedProfileReducer = (state = {}, { type, payload }) => {
    console.log(type)
    switch (type) {
        case ActionTypes.SELECTED_PROFILES:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PROFILES:
            return {};
        default:
            return state;
    }
};