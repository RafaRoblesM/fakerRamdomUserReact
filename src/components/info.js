import React, { Component } from 'react'

class Info extends Component{
   render(){ 
       return(
    <div className="w3-container w3-mobile">
          <h2>Card Example</h2>
          <div id="container" className="w3-card-4 w3-display-middle" >
            <header className="w3-container w3-light-grey">
              <div id="wrapper"> {user.name}<br/></div>
            </header>
            <div className="w3-container">
              <p>New friend request</p>
              <hr/>
              <div id="avatar"><img src={user.avatar} className="w3-left w3-circle "/></div>
              <div id="info" >
              Email: {user.email}<br/>
              Company: {user.company}<br/>
              Phone: {user.phone}<br/>
              Address: {user.address}<br/>
              City: {user.city}<br/>
              </div><br/>
            </div>
            <button className="w3-button w3-block w3-dark-grey">+ Connect</button>
          </div>
        </div>   
  )}
}


export default Info;
