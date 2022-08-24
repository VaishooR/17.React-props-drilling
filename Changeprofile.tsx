import * as React from 'react';
import {useState} from 'react';

function Changeprofile(props){
  const[newusername,setnewusername]=useState('')
  return(
    <div>
      <input type="text" onChange={(e)=>{
        setnewusername(e.target.value)
      }}/>
      <button onClick={()=>{props.setusername(newusername)}}>Change username</button>
    </div>
  )
}
export default Changeprofile;