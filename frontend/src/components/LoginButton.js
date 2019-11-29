import React from 'react';
import FacebookLogin from "react-facebook-login";

const LoginButton = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = () => {
    console.log( "Clicked!" );
  };

  return (
    <FacebookLogin
      appId="777227539347046"
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      render={renderProps => (
        <button onClick={renderProps.onClick}>This is my custom FB button</button>
      )}
    />
  );
};

export default LoginButton;
