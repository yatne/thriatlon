import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLoginWithButton from 'react-facebook-login';

function App() {

  const responseFacebook = (response) => {
      console.log(response);
  }

  const componentClicked = () => {
      console.log( "Clicked!" )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <FacebookLoginWithButton
            appId="777227539347046"
            autoLoad
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            icon="fa-facebook"
          />
      </header>
    </div>
  );
}

export default App;
