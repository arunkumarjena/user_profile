import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function User({user}) {
  const { id, first_name, last_name, avatar } = user;
  console.log("List of data",user.id);
    return (
      <div className="four wide column">
        <Link to={`/profile/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image" key={id}>
                <img src={avatar}/>
              </div>
              <div className="content">
                <div className="header">{first_name} {last_name}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default User