import {combineReducers} from 'redux';
import { profilesReducer, selectedProfileReducer } from './profileReducer';

const reducers = combineReducers ({
    allProfiles : profilesReducer,
    profile: selectedProfileReducer,
});

export default reducers;