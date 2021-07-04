import React from 'react'
import {connect} from 'react-redux'


import {sortUsersByName} from '../redux/actions/userProfileAction'

import User from './User.js'

// Add State Properties to Components State
const mapStateToProps = (state) => ({
  users: state.allProfiles.data
}
)
// Adding Actions to Props
const mapDispatchToProps = (dispatch) => ({
sortByName: (e, users) => {
  console.log("Sort By: ",e.target.value);
  dispatch(sortUsersByName(users, e.target.value, false))
}
})

const userContainer = (props) => {
  return (
    
        <>
          <div className="ui container">
              <h2 className="ui center aligned container">User Profiles</h2>
                <div className="ui one column  grid container">
                  <div className="column">
                    <div className="ui grid">
                        <div className="right aligned seven  column">
                          <select className="ui dropdown"  onChange={(e) => props.sortByName(e, props.users)} >
                            <option value="">Sort By</option>
                            <option value="first_name" id="firstName">First Name</option>
                            <option value="last_name" id="lastName">Last Name</option>
                          </select>
                          
                        </div>
                    </div>
                  </div>
                </div>
          </div>
         <div>
           <div>
           
           </div>
              {
                props.users.map((user) => <User key={user.id} user={user}/>)
              }
         </div>
         
        </>
      );
}

export default connect(mapStateToProps, mapDispatchToProps) (userContainer)