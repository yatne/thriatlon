import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton'

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #ffa72c;
  box-shadow: 0 2px #dddddd;
`;

const NavBar = () => {
    return (
      <NavBarDiv>
        <div>Triathlon Challenge</div>
        <LoginButton />
      </NavBarDiv>
    );
};

export default NavBar
