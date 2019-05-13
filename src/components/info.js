import React, { Component } from 'react'
import Faker from 'faker'
import Header from './Header'
class Info extends Component{
    constructor(props) {
        super(props)
        this.state = {
          user: {},
        }
      }
     
      componentWillMount() {
        Faker.locale = "es"
          const user = {
            name: Faker.internet.userName(),
            email: Faker.internet.email(),
            avatar: Faker.internet.avatar(),
            company: Faker.company.companyName(),
            phone: Faker.phone.phoneNumber(),
            address: Faker.address.streetAddress(),
            city: Faker.address.city(),
          }
          this.setState(() => ({
            user: user,
          }))
      }
      renderUsers(user) {
        return(  <div className="w3-container w3-mobile">
        <h2>Card Example</h2>
        <div id="container" className="w3-card-4 w3-display-middle" >
         <Header/>
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
      </div> )
      }
      render() {
        return <div>{this.renderUsers(this.state.user)}</div>
      }
}


export default Info;
