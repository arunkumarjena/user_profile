import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProfiles, removeSelectedProfiles } from '../redux/actions/userProfileAction';


const ProfileDetail = () => {
    const { id } = useParams();
    let profile = useSelector((state) => state.profile);
    const { first_name, last_name, avatar, email } = profile;

    const dispatch = useDispatch();
    // console.log(id);
    const fetchProfileDetails = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch((err) => {
            console.log("Err", err);
        });

        dispatch(selectedProfiles(response.data.data));

        // console.log(response.data);
    };

    useEffect(() => {
        if (id && id !== "") fetchProfileDetails(id);
        return () => {
            dispatch(removeSelectedProfiles());
        };
    }, [id]);

    console.log("Profile Detail of user ", profile);
    return (
        <div className="ui grid container  column stackable center aligned grid">
            {Object.keys(profile).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="middle aligned row">
                            <div className="ui two column stackable center aligned grid"><h3>{first_name} {last_name}</h3></div>
                        </div>
                        <div className="column lp">
                            <img className="ui fluid image" src={avatar} />
                        </div>
                        <div className="middle aligned row">
                            <div className="column rp">
                                <h2>Email : {email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );

};

export default ProfileDetail;
