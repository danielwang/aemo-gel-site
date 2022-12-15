import React, { Children } from 'react';
import styled, { css } from "styled-components";

const FoundationStyle = styled.div`
    width: 100%;
    display: flex;
    border-radius: var(--gel-radius-md);
    overflow: auto;
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
  