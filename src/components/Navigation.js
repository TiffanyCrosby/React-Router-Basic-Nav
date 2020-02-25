import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2%;
  color: red;
  font-size: 2.6rem;
`;

const Navigation = () => {
  return (
    <div>
      <StyledDiv className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Navigation;
