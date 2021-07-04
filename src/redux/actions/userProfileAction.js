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

// Sort By Name Actions
export const sortByName = (users) =>{
  return{
      type: ActionTypes.SORT_BY_NAME,
      payload:users
  };
};

const sorting =  (field, reverse) => {
      console.log('field', field);
      
        const key = 
      
          function(x) {
            return x[field]
          };
      
        reverse = !reverse ? 1 : -1;
      
        return function(a, b) {
          return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
      }

export const sortUsersByName = (users,sort, reverse) =>  {
  console.log("Before Sorted Users: ", users);
 const sortedUsers = users.sort(sorting(sort, reverse));
 console.log("After Sorted Users: ", sortedUsers);

 

 console.log("Store UPdated....");
 return{
  type: ActionTypes.SORT_BY_NAME,
  payload: [...sortedUsers]
};
 

}


export const filterUsers = (profiles, name) => (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_PROFILE_BY_NAME,
    payload: {
      name: name,
      users:
        name === ""
          ? profiles
          : profiles.filter((x) => x.availableUsers.indexOf(name) >= 0),
    },
  });
};