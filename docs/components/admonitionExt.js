import React from 'react';
import figmaImg from "./assets/figma.png";
import vueImg from "./assets/vue.png";
import styled, { css } from "styled-components";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';


const FigmaVueStyle = styled.div`
    padding: var(--gel-spacer-3) var(--gel-spacer-4);
    border-left: var(--ifm-alert-border-left-width) solid ${props => props.type === 'figma' ? "var(--gel-color-primary-purple-500)" : "var(--gel-color-secondary-teal)"};
    border-radius: var(--gel-radius-md);
    background-color: ${props => props.type === 'figma' ? "var(--gel-color-primary-purple-100)" : "var(--gel-color-secondary-blue-100)"}
`;

const AdmonitionExt = ({ type, url }) => {
    let text, logo;
    switch (type) {
      case "figma":
        logo = figmaImg;
        text = (<>Hey Designers, please find <Link to={url}>the Figma assets here</Link>. If you want permission to access the file, please contact <Link to={useBaseUrl('/community')}>GEL Community</Link>.</> );
        break;
      case "vue":
        logo = vueImg;
        text = (<>Hey Developers, find out the tech documentation of this compoment on <Link to={url}>PrimeVue</Link>. If you have issue, please contact  <Link to={useBaseUrl('/community')}>GEL Community</Link></>);
        break;
    }
  
    return (
      <>
        <FigmaVueStyle className="admonition" type={type}>
            <h5><img src={logo} height="20"/> <b>{type}</b></h5>
            <div> {text}</div>
        </FigmaVueStyle>
      </>
    );
  };
  
  export default AdmonitionExt;
  