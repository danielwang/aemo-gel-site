import React, { Children } from 'react';
import styled, { css } from "styled-components";

const BgColors =['#9DD7E350','#BAB8EC50','#98CCC250', '#F8DB9C50'];

const FoundationStyle = styled.div`
    width: 100%;
    display: flex;
    border-radius: var(--gel-radius-md);
    overflow: auto;

    // div:nth-child(4n+1) {
    //     background: ${BgColors[Math.floor(Math.random() * BgColors.length)]}; 
    // }
    // div:nth-child(4n+2) {
    //     background: ${BgColors[Math.floor(Math.random() * BgColors.length)]};
    // }
    // div:nth-child(4n+3) {
    //     background: ${BgColors[Math.floor(Math.random() * BgColors.length)]};
    // }
    // div:nth-child(4n+4) {
    //     background: ${BgColors[Math.floor(Math.random() * BgColors.length)]};
    // }
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
  