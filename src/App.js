import React from 'react';
import 'react-w3-components';


function App() {
  return (
    <div className="App w3-container">
        <h2>Card Example</h2>
        <div className="w3-card-4 w3-display-middle" >
          <header className="w3-container w3-light-grey">
            <div id="wrapper"></div>
          </header>
          <div className="w3-container">
            <p>New friend request</p>
            <hr/>
            <div id="avatar" className="w3-left w3-circle " ></div>
            <div id="info" ></div><br/>
          </div>
          <button className="w3-button w3-block w3-dark-grey">+ Connect</button>
        </div>
      </div>
  );
}

export default App;
