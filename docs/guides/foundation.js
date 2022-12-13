import React from 'react';
import figmaImg from "./../components/assets/figma.png";
import vueImg from "./../img/gel-logo.svg";
import styled, { css } from "styled-components";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

const FoundationStyle = styled.div`
    min-width: 15rem;
    display: inline-block;
    padding: var(--gel-spacer-3) var(--gel-spacer-4);
    margin-right: var(--gel-spacer-3);
    border-radius: var(--gel-radius-md);
    font-size: var(--gel-font-size-text-sm);
`;

const Foundation = ({ name }) => {
    let text, icon;
    switch (name) {
      case "figma":
        icon = figmaImg;
        text = (<>Hey Designers, please find. If you want permission to access the file, please contact.</> );
        break;
      case "vue":
        icon = vueImg;
        text = (<>Hey Developers, find out the tech documentation of this compoment on. If you have issue, please contact </>);
        break;
    }
  
    return (
      <>
        <FoundationStyle>
            <img src={icon} height="20"/>
            <h5>{name}</h5>
            {text}
        </FoundationStyle>
      </>
    );
  };
  
  export default Foundation;
  