import * as React from 'react';
import Changeprofile from './Changeprofile';

function Profile(props){
  return(
    <div>
      <h1>Profile page</h1>
      <p>Profile name is {props.username}.</p>
      <Changeprofile setusername={props.setusername}/>
    </div>
  )
}
export default Profile;