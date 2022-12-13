import React, { Children } from 'react';
import styled, { css } from "styled-components";


const FoundationStyle = styled.div`
    width: 100%;
    display: flex;
    border-radius: var(--gel-radius-md);
    overflow: auto;

    div:nth-child(1) {
        background: var(--gel-color-secondary-blue-100);
    }
    div:nth-child(2) {
        background: var(--gel-color-secondary-green-100);
    }
    div:nth-child(3) {
        background: var(--gel-color-secondary-aqua);
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
  