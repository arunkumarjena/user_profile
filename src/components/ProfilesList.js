import React, {useEffect} from 'react'
import axios from "axios";
import ProfileComponent from './ProfilesComoonent';
import {useSelector, useDispatch} from 'react-redux';
import {setProfiles} from '../redux/actions/userProfileAction';

const ProfilesList = () => {
    // from redux store
    const profileDetails  = useSelector(state => state);
    const dispatch = useDispatch();

    // from apis
    const fetchProfiles = async () => {
        const response = await axios
        .get("https://reqres.in/api/users/")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProfiles(response.data));
    };
    
    useEffect(() => {
        fetchProfiles();
    }, []);
    console.log("Profiles : ", profileDetails)
    return (
        
        <div className="ui grid container">
            <ProfileComponent/>
        </div>
        
    );
};

export default ProfilesList;
