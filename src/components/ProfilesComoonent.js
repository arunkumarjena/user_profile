import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";


const ProfileComponent = () => {
    const profiles  = useSelector(state => state.allProfiles.data);
    const renderList = profiles.map((profiles) => {
        const {id,first_name, last_name, avatar} = profiles;
        return (
    
        <div className="four wide column" key={id}>
        <Link to={`/profile/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={avatar} alt="error" />
              </div>
              <div className="content">
                <div className="header">{first_name} {last_name}</div>
              </div>
            </div>
          </div>
         </Link>
      </div>
        );
    })
    // destructring
    // const {id, email} = profileDetails[0];
    // console.log(profileDetails);
    return (
        <>
        
        {renderList}
        </>
    );
};

export default ProfileComponent;
