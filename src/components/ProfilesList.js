import React, {useEffect, useState} from 'react'
import axios from "axios";
import ProfileComponent from './ProfilesComoonent';
import {useSelector, useDispatch} from 'react-redux';
import {setProfiles} from '../redux/actions/userProfileAction';
import PageLoader from '../components/PageLoader/PageLoader';

const ProfilesList = () => {
    // from redux store
    const profileDetails  = useSelector(state => state);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(null);
    // from apis
    const fetchProfiles = async () => {
        const response = await axios
        .get("https://reqres.in/api/users/")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProfiles(response.data));
        setLoading(true);
    };
    
    useEffect(() => {
        fetchProfiles();
    }, []);
    console.log("Profiles : ", profileDetails)
    return (
        
        <div className="ui grid container">
            {loading ? <ProfileComponent/> : (
                <PageLoader/>

            )}
            
        </div>
        
    );
};

export default ProfilesList;
