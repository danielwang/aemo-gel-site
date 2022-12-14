import React, { Children } from 'react';
import styled, { css } from "styled-components";


const FoundationStyle = styled.div`
    width: 100%;
    display: flex;
    border-radius: var(--gel-radius-md);
    overflow: auto;

    div:nth-child(4n+1) {
        background: #9DD7E350;
    }
    div:nth-child(4n+2) {
        background: #BAB8EC50;
    }
    div:nth-child(4n+3) {
        background: #98CCC250;
    }
    div:nth-child(4n+4) {
        background: #F8DB9C50;
    }
`;

const Foundations = ({ children }) => {  
    return (
      <>
        <FoundationStyle>
            {children}
        </FoundationStyle>
      </>
    );
  };
  
  export default Foundations;
  