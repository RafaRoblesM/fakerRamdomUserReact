import React, { Component } from 'react'

class Body extends Component{

   
    render(){return(<div className="w3-container">
             <p>New friend request</p>
            <hr/>
            <div id="avatar"><img src={this.props.avatar} className="w3-left w3-circle "/></div>
            <div id="info" >
                Email: {this.props.email}<br/>
                Company: {this.props.company}<br/>
                Phone: {this.props.phone}<br/>
                Address: {this.props.address}<br/>
                City: {this.props.city}<br/>
                </div><br/>
                </div>)}
}
export default Body;
