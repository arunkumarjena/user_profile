import { ActionTypes } from "../constants/action-types";
const initialState = {
    data: [],
}
export const profilesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILES:
            return { ...state, ...payload };
            
            
            case ActionTypes.SORT_BY_NAME:
            return { ...state, data: payload };
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

export const personReducer = (state = {}, {type, payload}) => {
console.log(type)
  switch (type) {
    case ActionTypes.FILTER_PROFILE_BY_NAME:
      return {
        ...state,
        name: type.payload.name,
        filterdUsers: type.payload.users,
      };
      default:
        return state;
  }
};