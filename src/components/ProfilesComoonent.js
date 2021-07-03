import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



const ProfileComponent = () => {

const profiles = useSelector(state => state.allProfiles.data);
console.log("Data" , profiles[0].first_name);
const sort_by = (field, reverse, primer) => {
console.log('field', field);
  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

// var filterByFirstName = 'first_name';
// var filterByLastName = 'last_name';

// var submit = (event) => {
//   console.log('selected vlaue', event.target.value);
// }

// profiles.sort(sort_by(filterByFirstName, false, (a) =>  a.toUpperCase()));
const change = function(event){
        //  this.setState({sortBy: event.target.value});
         console.log(event.target.value)
         const sortArray = profiles.sort(sort_by(event.target.value, false));
        //  setState(sortArray);
                 console.log(profiles);
                 console.log("sortearry", sortArray);
     }
  const renderList = profiles.map((profiles) => {
    const { id, first_name, last_name, avatar } = profiles;
    return (
      <div className="container" key={id}>
        <div className="row">
          <div className="four wide column">
            <Link to={`/profile/${id}`}>
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={avatar}/>
                </div>
                <div className="team-content">
                  <h3 className="name">{first_name} {last_name}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
      //   <div className="four wide column" key={id}>
      //   <Link to={`/profile/${id}`}>
      //     <div className="ui link cards">
      //       <div className="card">
      //         <div className="image">
      //           <img src={avatar} alt="error" />
      //         </div>
      //         <div className="content">
      //           <div className="header">{first_name} {last_name}</div>
      //         </div>
      //       </div>
      //     </div>
      //    </Link>
      // </div>

    );
  })
  // destructring
  // const {id, email} = profileDetails[0];
  // console.log(profileDetails);
  return (
    
    <>
      <div className="conainter">
          <h2 className="ui center aligned header">User Profiles</h2>
            <div className="ui one column  grid container">
              <div className="column">
                <div className="ui grid">
                    <div className="right aligned seven  column">
                      <select className="ui dropdown"  onChange={change} >
                        <option value="">Sort By</option>
                        <option value="firstName" id="firstName">First Name</option>
                        <option value="lastName" id="lastName">Last Name</option>
                      </select>
                      
                    </div>
                </div>
              </div>
            </div>
      </div>
      {renderList}
    </>
  );
};

export default ProfileComponent;
