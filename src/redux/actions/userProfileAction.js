import { ActionTypes } from "../constants/action-types"
// for all user profiles
export const setProfiles = (profiles) => {
    return {
        type: ActionTypes.SET_PROFILES,
        payload: profiles,
    };
};
// click event by id
export const selectedProfiles = (profile) => {
    return {
        type: ActionTypes.SELECTED_PROFILES,
        payload: profile,
    };
};

export const removeSelectedProfiles = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PROFILES
    };
};