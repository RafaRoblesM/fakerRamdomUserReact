import React, { Component } from 'react'
import Faker from 'faker'
import Info from './components/info'

import './App.css'
 
class App extends Component {
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
    <Info/>
  }
  render() {
    return <div>{this.renderUsers(this.state.user)}</div>
  }
}
 
export default App
