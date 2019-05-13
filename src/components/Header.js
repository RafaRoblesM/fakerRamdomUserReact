import React, { Component } from 'react'

class Header extends Component{

     
    render(){return(<header className="w3-container w3-light-grey">
        <div id="wrapper"> {this.props.name}<br/></div>
        </header>);}
    }
      


export default Header;
