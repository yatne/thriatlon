import React from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";

const CentralLayout = styled.div`
  display: flex;
  width: 1200px;
  margin: auto; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;   
`;


const Page = (props) => (
  <div>
    <NavBar />
    <CentralLayout>
      {props.children}
    </CentralLayout>
  </div>
);

export default Page
