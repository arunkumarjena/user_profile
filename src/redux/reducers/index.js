import {combineReducers} from 'redux';
import { profilesReducer, selectedProfileReducer, personReducer } from './profileReducer';

const reducers = combineReducers ({
    allProfiles : profilesReducer,
    profile: selectedProfileReducer,
    persons: personReducer
});

export default reducers;