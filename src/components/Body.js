import React, { Component } from 'react'

export default (props) => <div className="w3-container">
        <p>New friend request</p>
        <hr/>
        <div id="avatar"><img src={props.avatar} className="w3-left w3-circle "/></div>
        <div id="info" >
        Email: {props.email}<br/>
        Company: {props.company}<br/>
        Phone: {props.phone}<br/>
        Address: {props.address}<br/>
        City: {props.city}<br/>
        </div><br/>
   </div>;
