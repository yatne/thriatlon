import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { useReducer } from '../reducer/ReducerProvider'

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #ffa72c;
  box-shadow: 0 2px #dddddd;
`;

const NavBar = () => {
  const { test, test2 } = useReducer()

    return (
      <NavBarDiv>
        <div>Triathlon Challenge</div>
        <LoginButton />
        <button onClick={() => test()}>test</button>
        <button onClick={() => test2()}>test2</button>
      </NavBarDiv>
    );
};

export default NavBar
