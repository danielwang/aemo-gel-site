import React from 'react';
import figma from "./assets/figma.png";
import vue from "./assets/vue.png";
import styled, { css } from "styled-components";


const FigmaVueStyle = styled.div`
    padding: var(--gel-spacer-3) var(--gel-spacer-4);
    border-left: var(--ifm-alert-border-left-width) solid ${props => props.type === 'figma' ? "var(--gel-color-primary-purple-500)" : "var(--gel-color-secondary-teal)"};
    border-radius: var(--gel-radius-md);
    background-color: ${props => props.type === 'figma' ? "var(--gel-color-primary-purple-100)" : "var(--gel-color-secondary-blue-100)"}
`;

const FigmaVue = ({ type, url }) => {
    let text, logo, classes;
    switch (type) {
      case "figma":
        logo = figma;
        text = 'Figma design file';
        break;
      case "vue":
        logo = vue;
        text = 'Dev API in VueJS';
        break;
    }
  
    return (
      <>
        <FigmaVueStyle className="admonition" type={type}>
            <h5><img src={logo} height="20"/> <b>{type}</b></h5>
            <div>Please find more about the <a href={url} target="_blank">{text} </a></div>
        </FigmaVueStyle>
      </>
    );
  };
  
  export default FigmaVue;
  