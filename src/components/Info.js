import React, { Component } from 'react'
import Faker from 'faker'
import Header from './Header'
import Body from './Body'
import Button from './Button'


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
        return(  
          <div className="w3-container w3-mobile">
            <h2>Card Example</h2>
             <div id="container" className="w3-card-4 w3-display-middle" >
                <Header name = {user.name}/>
                <Body email = {user.email} 
                      avatar = {user.avatar} 
                    company = {user.company} 
                    phone = {user.phone} 
                    address = {user.address} 
                    city = {user.city}/>
                <Button/>
              </div>
          </div>)
      }
      render() {
        return <div>{this.renderUsers(this.state.user)}</div>
      }
}


export default Info;
