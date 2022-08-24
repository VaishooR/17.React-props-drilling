import * as React from 'react';

function Home(props){
  return(
    <div>
      <h1>Home page</h1>
      <h3>Name: {props.username}</h3>
    </div>
  )
}
export default Home;