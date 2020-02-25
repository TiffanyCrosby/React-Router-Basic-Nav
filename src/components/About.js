import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: green;
    font-weight: bold;
    text-shadow: 0 0 6px black, 0 0 6px #0000FF;
    text-align: center
`;

const StyledDiv = styled.div`
    width: 80%;
    margin: 5% auto;
    padding: 3%;
    background-color: #ffbb99;
    text-align: center
`;

const About = () => {
    return (
        <StyledDiv>
            <StyledHeader>About Us...That's Us!</StyledHeader>
        </StyledDiv>
    )
}

export default About;
